import type { VercelRequest, VercelResponse } from '@vercel/node';
import { generateText } from 'ai';
import { google } from '@ai-sdk/google';
export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages, model, system } = req.body;

        const modelName = model || 'gemini-1.5-flash';

        // Use Vercel AI SDK to generate text
        // Ensure we pick up the API key from various possible env vars
        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_API_KEY || process.env.API_KEY;

        const googleProvider = createGoogleGenerativeAI({
            apiKey: apiKey,
        });

        const result = await generateText({
            model: googleProvider(modelName),
            system: system, // Pass system instruction if provided
            messages: messages, // Expects standard Vercel AI SDK message format
        });

        // Return the text directly
        return res.status(200).json({ text: result.text });
    } catch (error: any) {
        console.error('Gemini API error:', error);
        return res.status(500).json({ error: error.message || 'Error processing request' });
    }
}
