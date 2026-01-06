import type { VercelRequest, VercelResponse } from '@vercel/node';
import { generateText } from 'ai';
import { google, createGoogleGenerativeAI } from '@ai-sdk/google';
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
        const envKeys = Object.keys(process.env);
        console.log('DEBUG: Available Environment Variables:', envKeys);

        const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.GOOGLE_API_KEY || process.env.API_KEY;

        if (!apiKey) {
            console.error('DEBUG: API Key is CRITICALLY MISSING. Checked GOOGLE_GENERATIVE_AI_API_KEY, GOOGLE_API_KEY, API_KEY');
            throw new Error(`Missing API Key. Available env vars: ${envKeys.filter(k => k.includes('API') || k.includes('KEY')).join(', ')}`);
        }

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
