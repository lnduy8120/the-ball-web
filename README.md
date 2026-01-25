<div align="center">
  <img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Football Companion - The Ball Web

A comprehensive football application featuring live scores, match statistics, team details, AI-powered predictions, and more. Built with modern web technologies to provide a premium, responsive user experience.

## ✨ Features

- **Match Center**: Real-time live scores, match statistics, lineups, and commentary.
- **Team Insights**: Detailed team profiles, squad lists, and match history.
- **League Standings**: Dynamic standings tables for various leagues.
- **News**: Latest football news and updates.
- **Predictions**: AI-powered match predictions and betting insights.
- **User Accounts**: Secure authentication and user profiles using NextAuth.js.
- **Responsive Design**: Mobile-first architecture with a refined navigation system (Bottom Navigation for mobile, Side Navigation for landscape/desktop).
- **PWA Ready**: Configured manifest and viewport settings for a native app-like experience.

## 🛠 Tech Stack

### Core
- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [React Query](https://tanstack.com/query/latest) (@tanstack/react-query)
- **Authentication**: [NextAuth.js](https://authjs.dev/) (Beta)

### UI & UX
- **Icons**: Material Symbols Outlined
- **Fonts**: Inter & Lexend (Google Fonts)
- **Charts**: Recharts
- **Internationalization**: i18next & react-i18next

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Web Server**: Nginx (for production serving)

## 📂 Project Structure

This project follows a modular Next.js App Router structure.

```
src/
├── app/                  # App Router pages and layouts
│   ├── (primary)/        # Main app layout (BottomNav/SideNav)
│   │   ├── matches/      # Match lists and live scores
│   │   ├── news/         # News feed
│   │   ├── profile/      # User profile
│   │   ├── standings/    # League tables
│   │   └── ...           # Other primary route groups
│   ├── api/              # backend API routes
│   ├── match/            # Match detail pages
│   ├── team-detail/      # Team specific pages
│   ├── login/            # Authentication pages
│   └── ...
├── components/           # Reusable UI components
│   ├── BottomNav.tsx     # Mobile navigation
│   ├── SideNav.tsx       # Desktop/Landscape navigation
│   └── ...
├── config/               # App configuration files
├── context/              # React Context (Auth, Toast, etc.)
├── hooks/                # Custom React hooks
├── lib/                  # Utilities (validators, formatters)
├── locales/              # i18n translation files
├── services/             # API services (Axios + React Query integration)
│   ├── authService.ts    # Authentication logic
│   ├── matchService.ts   # Match data fetching
│   ├── teamService.ts    # Team data fetching
│   └── ...
└── types/                # TypeScript interfaces and types
```

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18 or higher
- **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd the-ball-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory. You can use `.env` as a reference.
   ```env
   # Example variables
   NEXTAUTH_SECRET=your_secret_key
   NEXTAUTH_URL=http://localhost:3000
   # Add other API keys as needed (e.g., GEMINI_API_KEY)
   ```

4. **Run Locally:**
   Start the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🐳 Docker Deployment

The project includes a `Dockerfile` and `docker-compose.yml` for easy containerization.

1. **Build and Run:**
   ```bash
   docker-compose up --build
   ```

2. **Production Build:**
   The `Dockerfile` is optimized for production, using a multi-stage build to reduce image size. It exposes the application on port 3000 by default.

## 🌐 Navigation Logic

The application uses a hybrid navigation system defined in `src/app/(primary)/layout.tsx`:

- **Portrait Mode**: Displays a `BottomNav` bar for easy thumb access.
- **Landscape/Desktop**: Automatically switches to a `SideNav` rail to maximize vertical screen space.
- **Routing**: Uses Next.js file-system based routing. Pages within `(primary)` are wrapped with the main navigation, while specific detail pages (like `match/[id]`) or full-screen auth pages exist outside this layout for a focused experience.

## 🔐 Authentication

Authentication is handled via **NextAuth.js**.
- The `AuthContext` provides session state throughout the app.
- Protected routes can redirect unauthenticated users to `/login`.
- Services (`authService.ts`) handle interaction with backend auth endpoints if custom integration is required alongside NextAuth.

