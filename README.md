# Portfolio Website - Adeniyi

A modern, responsive portfolio website with dark mode toggle.

## ✨ Features

- ✅ **Dark Mode Toggle** - Starts in light mode, switches to dark with button
- ✅ **Orange Accent Color** (#FF6B35) - Used for "Adeniyi" text and `</>` brackets
- ✅ **Standout Typography** - Outfit font family (modern, bold, readable)
- ✅ **Typewriter Animation** - "Hi, I'm Adeniyi" with orange highlight
- ✅ **Responsive Design** - Works on all devices
- ✅ **Smooth Animations** - Framer Motion for elegant transitions
- ✅ **3 Project Showcases** - Ready for your screenshots

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to `http://localhost:5173`

## 🎨 What's Fixed

### Dark Mode Toggle
- **Starts in light mode** (white background)
- Click moon icon → switches to dark mode
- Click sun icon → switches back to light mode
- Properly applies `dark` class to toggle all colors

### Typography
- **Outfit font** - Modern, geometric, highly readable
- Bold weights for headers
- Stands out from typical portfolios

### Colors
- Orange accent (#FF6B35) on "Adeniyi" text
- Orange brackets `</>` in navbar
- Orange buttons and hover states
- Works perfectly in both light and dark modes

## 📝 Next Steps

1. **Add Project Screenshots**
   - Replace gradient placeholders with real screenshots
   - Update project URLs in `src/data/projects.js`

2. **Update Social Links**
   - Email in Contact section
   - Verify GitHub, LinkedIn, Twitter links

3. **Deploy to Vercel**
   ```bash
   npm run build
   vercel --prod
   ```

## 📁 Project Structure

```
portfolio-project/
├── src/
│   ├── components/
│   │   └── TypeWriter.jsx      # Typing animation component
│   ├── context/
│   │   └── ThemeContext.jsx    # Dark mode state management
│   ├── data/
│   │   └── projects.js         # Project data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🎯 Key Implementation Details

### Dark Mode
- Uses React Context API for state management
- Starts with `darkMode: false` (light mode)
- `toggleDarkMode()` switches between themes
- Tailwind's `dark:` classes handle all color changes

### Orange Accent
- Color: `#FF6B35`
- Applied via `text-[#FF6B35]` utility
- Works on both light and dark backgrounds

### Typography Hierarchy
- "Hi, I'm Adeniyi": `text-5xl md:text-7xl` (BIGGEST)
- "Frontend Developer": `text-3xl md:text-5xl` (smaller)
- Creates proper visual hierarchy

## 🔧 Troubleshooting

If dark mode doesn't work:
1. Make sure `ThemeProvider` wraps `<App />` in `main.jsx`
2. Check that the wrapper div has `className={darkMode ? 'dark' : ''}` in `App.jsx`
3. Verify `darkMode: 'class'` is in `tailwind.config.js`

## 📦 Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- Lucide React

---

Built with ❤️ by Adeniyi
