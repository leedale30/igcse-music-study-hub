// Serverless function to proxy Gemini API requests from a non-China region
// This runs as a Vercel serverless function, not an edge function

export const config = {
    // Force this function to run in a US region, not in China
    regions: ['iad1', 'sfo1', 'pdx1'],
};

export default async function handler(req: any, res: any) {
    // Only allow POST requests
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'API key not configured' });
    }

    try {
        const { model, contents, systemInstruction, generationConfig } = req.body;

        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model || 'gemini-2.5-flash'}:generateContent?key=${apiKey}`;

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
            return res.status(response.status).json(data);
        }

        return res.status(200).json(data);
    } catch (error: any) {
        console.error('Gemini proxy error:', error);
        return res.status(500).json({ error: error.message || 'Proxy error' });
    }
}
