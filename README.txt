The backend server is built using Node.js and Express. It handles requests from the frontend, interacts with the OpenAI API, and generates comedy scripts.
Features

    Endpoint to generate comedy scripts based on a provided theme.
    Integration with OpenAI's API to generate scripts.

Deployment

The backend can be deployed on platforms like Heroku, Vercel, or any other hosting provider. Make sure to configure your environment variables and deploy according to the platform’s instructions.
Setup

To run the backend locally:

    Clone the repository:

    bash

git clone https://github.com/abhi012323/ai-comedyshow-backend
cd backend

Install dependencies:

bash

npm install

Create a .env file in the root directory with your OpenAI API key:

makefile

OPENAI_API_KEY=your-openai-api-key

Start the server:

bash

    npm start

API Endpoints

    GET /: Returns a simple message indicating the backend is running.
    POST /generate-script: Accepts a JSON payload with a theme field and returns a generated comedy script.

Error Handling

If you encounter issues, check the backend logs for more details. Common issues include invalid API keys or exceeded quota limits.
