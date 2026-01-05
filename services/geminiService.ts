import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ABC_PLUS_CONTEXT, GroundingMetadata } from "../types/tutor";

// Using Gemini 2.5 Flash (the currently available fast model)
export const MODEL_NAME = "gemini-2.5-flash";

let ai: GoogleGenAI | null = null;
let conversationHistory: { role: string; parts: { text: string }[] }[] = [];
let systemInstruction = "";

export const initChatSession = (pageContext?: string, baseUrl?: string) => {
    try {
        // Vite requires VITE_ prefix for env vars to be exposed to frontend
        const key = import.meta.env.VITE_API_KEY;

        if (!key) {
            console.error("No API key found in VITE_API_KEY");
            return null;
        }

        // Initialize the client
        ai = new GoogleGenAI({ apiKey: key });

        // Reset conversation history
        conversationHistory = [];

        // Build system instruction
        systemInstruction = ABC_PLUS_CONTEXT;
        if (pageContext) {
            systemInstruction += `\n\n=== CONTEXT FROM USER'S CURRENT SCREEN ===\nThe user is currently looking at a webpage with the following content. Use this to answer context-specific questions:\n\n${pageContext.substring(0, 20000)}\n\n=== END CONTEXT ===`;
        }

        return ai;
    } catch (error) {
        console.error("Failed to init chat", error);
        return null;
    }
};

export const sendMessageToTeacher = async (
    userMessage: string,
    history: ChatMessage[],
    baseUrl?: string
): Promise<{ text: string; groundingMetadata?: GroundingMetadata }> => {
    if (!ai) {
        const initialized = initChatSession(undefined, baseUrl);
        if (!initialized) {
            throw new Error("Failed to initialize chat session");
        }
    }

    try {
        // Add user message to history
        conversationHistory.push({
            role: "user",
            parts: [{ text: userMessage }]
        });

        // Make the API call using the correct SDK method
        const response = await ai!.models.generateContent({
            model: MODEL_NAME,
            contents: conversationHistory,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
            }
        });

        // Extract the response text
        const text = response.text || "I'm having trouble responding right now.";

        // Add assistant response to history
        conversationHistory.push({
            role: "model",
            parts: [{ text }]
        });

        // Extract grounding metadata if available
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata as GroundingMetadata | undefined;

        return { text, groundingMetadata };
    } catch (error) {
        console.error("Gemini Error:", error);
        // Reset on error
        ai = null;
        conversationHistory = [];
        throw error;
    }
};