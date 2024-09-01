const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;
const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('AI Comedy Generator Backend is running');
});

app.post('/generate-script', async (req, res) => {
    const theme = req.body.theme;

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: 'You are a helpful assistant.'
                },
                {
                    role: 'user',
                    content: `Generate a comedy script based on the theme: "${theme}"`
                }
            ],
            max_tokens: 150,
            temperature: 0.7
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            }
        });

        const generatedScript = response.data.choices[0].message.content.trim();
        res.json({ script: generatedScript });
    } catch (error) {
        console.error('Error generating script:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to generate script' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
