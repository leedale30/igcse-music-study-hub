import type { VercelRequest, VercelResponse } from '@vercel/node';

// Force this function to run in US regions, not China
export const config = {
    regions: ['iad1', 'sfo1', 'pdx1'],
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        return res.status(200).end();
    }

    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed. Use POST.' });
    }

    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        console.error('API_KEY environment variable not set');
        return res.status(500).json({ error: 'API key not configured on server' });
    }

    try {
        const { model, contents, systemInstruction, generationConfig } = req.body;

        const modelName = model || 'gemini-2.5-flash';
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

        console.log('Proxying request to Gemini API for model:', modelName);

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents,
                systemInstruction,
                generationConfig,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error('Gemini API error:', response.status, data);
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);
    } catch (error: any) {
        console.error('Gemini proxy error:', error);
        return res.status(500).json({ error: error.message || 'Proxy error' });
    }
}
