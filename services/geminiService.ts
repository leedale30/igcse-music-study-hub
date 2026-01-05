import { GoogleGenAI } from "@google/genai";
import { ChatMessage, ABC_PLUS_CONTEXT, GroundingMetadata } from "../types/tutor";

// Using Flash 3 Preview as requested for speed and teacher persona
export const MODEL_NAME = "gemini-3-flash-preview";

let chatSession: any = null;

export const initChatSession = (pageContext?: string, baseUrl?: string) => {
    try {
        // Access process.env.API_KEY directly as required by guidelines
        const key = process.env.API_KEY;

        // Initialize with custom baseUrl if provided (essential for China/Enterprise proxies)
        const genAI = new GoogleGenAI({
            apiKey: key,
            baseUrl: baseUrl
        } as any);

        let systemInstruction = ABC_PLUS_CONTEXT;

        // Inject page context if provided
        if (pageContext) {
            systemInstruction += `\n\n=== CONTEXT FROM USER'S CURRENT SCREEN ===\nThe user is currently looking at a webpage with the following content. Use this to answer context-specific questions:\n\n${pageContext.substring(0, 20000)}\n\n=== END CONTEXT ===`;
        }

        const chat = genAI.chats.create({
            model: MODEL_NAME,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.7,
                tools: [{ googleSearch: {} }], // Enable Search Grounding
            }
        });
        chatSession = chat;
        return chat;
    } catch (error) {
        console.error("Failed to init chat", error);
        return null;
    }
};

export const sendMessageToTeacher = async (userMessage: string, history: ChatMessage[], baseUrl?: string): Promise<{ text: string; groundingMetadata?: GroundingMetadata }> => {
    if (!chatSession) {
        // Fallback init without context if session was lost
        const initialized = initChatSession(undefined, baseUrl);
        if (!initialized) {
            throw new Error("Failed to initialize chat session");
        }
    }

    try {
        const response = await chatSession.sendMessage({
            message: userMessage
        });

        // Extract text and grounding metadata
        const text = response.text || "I'm having trouble responding right now.";
        const groundingMetadata = response.candidates?.[0]?.groundingMetadata;

        return { text, groundingMetadata };
    } catch (error) {
        console.error("Gemini Error:", error);
        chatSession = null;
        throw error;
    }
};