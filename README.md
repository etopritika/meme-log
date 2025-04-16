# Meme Log 😎

A minimal web app for viewing and editing iconic memes, built with **Next.js 15 App Router**, **HeroUI**, and **Tailwind CSS**.

## ✨ Features

- 📄 View memes in a table or card layout
- 🔎 Edit memes using a modal form with validation
- ✅ Local JSON-based API (FS-backed)
- ⚡ Responsive UI using HeroUI components
- 🧠 Form validation via Zod + React Hook Form
- 🌗 Light/dark theme-ready
- 🛠️ Deployed via Railway

## 📦 Tech Stack

- Next.js 15 App Router
- React 19
- HeroUI
- Tailwind CSS
- Zod
- React Hook Form
- Zustand (optional for state)
- TypeScript

## 📂 Project Structure

```
/src
  /app
    /list        // Card view page
    /table       // Table view page
    /api/memes   // JSON API (GET & PATCH)
  /components
    MemeTable.tsx
    MemeCard.tsx
    EditModal.tsx
    MemeList.tsx
    Navbar.tsx
  /lib
    get-memes.ts
    update-meme.ts
    types.ts
  /data
    memes.json   // Local JSON data
```

## 🧪 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 🔧 Build for Production

```bash
# Create an optimized production build
npm run build

# Start the server
npm start
```

## 🌐 Environment Variables

Create a `.env.local` file in the root:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

When deploying (e.g., to Railway), set `NEXT_PUBLIC_BASE_URL` to your production URL.

## 📤 Deployment

You can deploy this app to platforms like **Railway**, **Vercel**, or **Render**.
