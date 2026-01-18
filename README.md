<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1qWL80MI5Mn7Gh2eYpi0zFpldfO-6OyJ2

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Project Structure

This project follows a standard Next.js App Router structure with TypeScript.

```
/
├── public/              # Static assets (images, icons, etc.)
├── src/
│   ├── app/             # Next.js App Router pages and layouts
│   ├── components/      # Reusable UI components
│   ├── config/          # Application configuration
│   ├── context/         # React Context providers
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions and library wrappers
│   ├── locales/         # Localization files
│   ├── services/        # API services and data fetching logic
│   └── types/           # TypeScript type definitions
├── .env                 # Environment variables
├── docker-compose.yml   # Docker Compose configuration
├── Dockerfile           # Docker build instructions
├── next.config.mjs      # Next.js configuration
├── nginx.conf           # Nginx configuration for production
└── tailwind.config.js   # Tailwind CSS configuration
```
