# Arshan Shareef - Personal Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── assets/           # Images and static assets
├── components/
│   ├── common/       # Reusable components (ScrollReveal)
│   ├── layout/       # Layout components (Navbar, StarField)
│   ├── sections/     # Page sections (Hero, About, etc.)
│   └── ui/           # UI primitives (shadcn/ui)
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
├── pages/            # Page components
├── index.css         # Global styles & design tokens
└── main.tsx          # App entry point
```

## 🌐 Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Deploy using gh-pages**
   ```bash
   npm install -D gh-pages
   ```

   Add to `package.json` scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

   Then run:
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages**
   - Go to your repo → Settings → Pages
   - Set source to `gh-pages` branch
   - Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## 🛠 Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📄 License

MIT
