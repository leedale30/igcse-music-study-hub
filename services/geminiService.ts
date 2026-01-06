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
    // Note: API key is now handled server-side via process.env.API_KEY or AI Gateway

    // Use provided baseUrl or stored one
    const proxyBase = baseUrl || currentBaseUrl;

    // Add user message to history
    conversationHistory.push({
        role: "user",
        parts: [{ text: userMessage }]
    });

    try {
        const apiUrl = '/api/gemini';

        // Convert conversation history to Vercel AI SDK Core format (User/Assistant)
        const messages = conversationHistory.map(msg => ({
            role: msg.role === 'model' ? 'assistant' : 'user',
            content: msg.parts[0].text
        }));

        const requestBody = {
            model: MODEL_NAME,
            messages: messages,
            system: systemInstruction, // Pass system instruction separately
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
            console.error('API error:', response.status, errorData);
            throw new Error(errorData.error || `API error: ${response.status}`);
        }

        const data = await response.json();

        // New API returns { text: "..." }
        const text = data.text || "I'm having trouble responding right now.";

        // Add assistant response to history in internal format
        conversationHistory.push({
            role: "model",
            parts: [{ text }]
        });

        // Helper: Currently the Vercel AI SDK generateText doesn't strictly return groundingMetadata in the same way 
        // unless we use specific Google provider features. For now, we assume text response.
        // If we need grounding, we might need to check the raw response in the future.
        const groundingMetadata = undefined;

        return { text, groundingMetadata };
        return { text, groundingMetadata };
    } catch (error) {
        console.error("Gemini Error:", error);
        // Reset on error
        conversationHistory = [];
        throw error;
    }
};

export const getDefinition = async (term: string): Promise<string> => {
    try {
        const systemPrompt = `You are GlossaBot, a friendly and knowledgeable assistant specializing in musical terms for IGCSE Music students. Your responses should be clear, concise, accurate, and easy to understand. Use simple language where appropriate, but don't shy away from correct terminology if explained well. Aim for definitions around 2-4 sentences, plus a short example or fun fact if it enhances understanding. Be encouraging and make learning engaging! When you define the term, please make sure the term itself is bolded using markdown like **Term**. Start your response with a friendly greeting unless it's a follow-up.`;

        const userPrompt = `Hi GlossaBot! Please define the musical term "${term.trim()}" for me. I'm an IGCSE Music student.`;

        const apiUrl = '/api/gemini';

        const requestBody = {
            model: MODEL_NAME,
            messages: [{ role: 'user', content: userPrompt }],
            system: systemPrompt
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
            throw new Error(errorData.error || `API error: ${response.status}`);
        }

        const data = await response.json();
        return data.text || "Could not find definition.";
    } catch (error) {
        console.error("GlossaryBot Error:", error);
        throw error;
    }
};