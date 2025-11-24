# ANIDEN — Anime Discovery Web App

2025  
React | Vite | Tailwind CSS | React Router | GraphQL (AniList) | REST (AOT Quote API)

Short single-page application for discovering anime, viewing details, and displaying random anime quotes. Combines GraphQL and REST API integrations with reusable components and custom hooks.

## Key Features
• SPA with client-side routing: Home (releasing), Aired, Upcoming, Detail pages, Search, 404.  
• Hybrid API usage: GraphQL (AniList) for anime/character metadata and REST (AOT quote API) for real-time quotes.  
• Reusable components: AnimeCard, AnimeQuote, Header, Footer, etc.  
• Custom hooks for data logic: useFetch (GraphQL), useSearch, useDetail, useTitle.  
• Dark mode + responsive UI implemented with Tailwind CSS.  
• Simple error handling and loading states for network requests.

## Project Structure (important files)
src/  
├─ components/ — UI components (AnimeCard, AnimeQuote, Header, Footer)  
├─ hooks/ — custom hooks (useFetch.js, useSearch.js, useDetail.js, useTitle.js)  
├─ pages/ — page components (AnimeList, AnimeDetail, Search, PageNotFound)  
├─ routes/AllRoutes.jsx — app routing configuration  
├─ assets/ — images and static assets

Notable files:
- src/hooks/useFetch.js — GraphQL POST requests to https://graphql.anilist.co (fetches media lists by status).  
- src/components/AnimeQuote.jsx — REST GET to https://aot-api.vercel.app/quote and a follow-up GraphQL query to AniList for character images.

## APIs
- AniList GraphQL endpoint: POST https://graphql.anilist.co — used for fetching anime metadata and character images.  
- AOT quote REST endpoint: GET https://aot-api.vercel.app/quote — used for random quotes.

## Setup & Run (Windows)
1. Clone repository
2. Open terminal in that folder (PowerShell/CMD/WSL).  
3. Install dependencies:
   npm install
4. Run dev server:
   npm run dev
5. Build for production:
   npm run build
6. Preview production build:
   npm run preview

(Adjust commands if using yarn or pnpm.)


