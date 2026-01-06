import { ChatMessage, ABC_PLUS_CONTEXT, GroundingMetadata } from "../types/tutor";

// Using Gemini 2.5 Flash
export const MODEL_NAME = "gemini-2.5-flash";

let conversationHistory: { role: string; parts: { text: string }[] }[] = [];
let systemInstruction = "";
let currentBaseUrl = "";

export const initChatSession = (pageContext?: string, baseUrl?: string) => {
    try {
        const key = import.meta.env.VITE_API_KEY;

        if (!key) {
            console.error("No API key found in VITE_API_KEY");
            return null;
        }

        // Store baseUrl for API calls
        currentBaseUrl = baseUrl || "";

        // Reset conversation history
        conversationHistory = [];

        // Build system instruction
        systemInstruction = ABC_PLUS_CONTEXT;
        if (pageContext) {
            systemInstruction += `\n\n=== CONTEXT FROM USER'S CURRENT SCREEN ===\nThe user is currently looking at a webpage with the following content. Use this to answer context-specific questions:\n\n${pageContext.substring(0, 20000)}\n\n=== END CONTEXT ===`;
        }

        return true;
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
    const key = import.meta.env.VITE_API_KEY;

    if (!key) {
        throw new Error("No API key configured");
    }

    // Use provided baseUrl or stored one
    const proxyBase = baseUrl || currentBaseUrl;

    // Add user message to history
    conversationHistory.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    try {
        // Build the API URL - use proxy if baseUrl is provided, otherwise direct
        let apiUrl: string;
        if (proxyBase) {
            // Use Vercel proxy for China access
            apiUrl = `${proxyBase}/v1beta/models/${MODEL_NAME}:generateContent?key=${key}`;
        } else {
            // Direct API access
            apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${key}`;
        }

        const requestBody = {
            contents: conversationHistory,
            systemInstruction: {
                parts: [{ text: systemInstruction }]
            },
            generationConfig: {
                temperature: 0.7,
            }
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            console.error('Gemini API error:', response.status, errorData);
            throw new Error(errorData.error?.message || `API error: ${response.status}`);
        }

        const data = await response.json();

        // Extract the response text
        const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble responding right now.";

        // Add assistant response to history
        conversationHistory.push({
            role: "model",
            parts: [{ text }]
        });

        // Extract grounding metadata if available
        const groundingMetadata = data.candidates?.[0]?.groundingMetadata as GroundingMetadata | undefined;

        return { text, groundingMetadata };
    } catch (error) {
        console.error("Gemini Error:", error);
        // Reset on error
        conversationHistory = [];
        throw error;
    }
};