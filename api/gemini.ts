import type { VercelRequest, VercelResponse } from '@vercel/node';
import { generateText } from 'ai';
import { gateway } from '@ai-sdk/gateway';

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

        // Use Vercel AI Gateway which handles authentication automatically
        // via OIDC when deployed on Vercel, or via AI_GATEWAY_API_KEY env var
        const modelName = model || 'google:gemini-1.5-flash';

        const result = await generateText({
            model: gateway(modelName),
            system: system,
            messages: messages,
        });

        // Return the text directly
        return res.status(200).json({ text: result.text });
    } catch (error: any) {
        console.error('Gemini API error:', error);
        return res.status(500).json({ error: error.message || 'Error processing request' });
    }
}
