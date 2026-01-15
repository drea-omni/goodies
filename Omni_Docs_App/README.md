# Omni Docs AI - Home Screen App

A Progressive Web App (PWA) wrapper for the Omni Docs AI assistant that lets you install it directly to your iOS or Android home screen for quick access!

## ✨ Features

- 🚀 **Launch from Home Screen** - One tap access to Omni Docs AI
- 📱 **Full Screen Experience** - No browser chrome, feels like a native app
- 🎨 **Beautiful App Icon** - Branded Omni gradient icon on your home screen
- ⚡ **Instant Loading** - Optimized for mobile performance
- 🔄 **Refresh & Home Buttons** - Easy navigation controls
- 📶 **Works Offline** - Basic app shell loads even without connection

## 📲 Installation Instructions

### iOS (iPhone/iPad)

1. **Open Safari** (must use Safari browser)
2. Navigate to where you've hosted `omni-docs-ai-app.html`
3. Tap the **Share button** (the square with arrow pointing up) at the bottom of the screen
4. Scroll down and tap **"Add to Home Screen"**
5. Edit the name if desired (default: "Omni Docs AI")
6. Tap **"Add"** in the top right corner

That's it! The Omni Docs AI icon will appear on your home screen.

### Android (Chrome)

1. **Open Chrome** browser
2. Navigate to where you've hosted `omni-docs-ai-app.html`
3. Tap the **menu** (three dots) in the top right
4. Tap **"Add to Home screen"** or **"Install app"**
5. Confirm by tapping **"Add"** or **"Install"**

The app will appear on your home screen and in your app drawer.

### Desktop (Chrome/Edge)

1. Navigate to the app URL in Chrome or Edge
2. Look for the **install icon** (⊕) in the address bar
3. Click it and confirm installation

## 🗂️ Files Included

- **omni-docs-ai-app.html** - Main app file (this is what you open/host)
- **manifest.json** - PWA manifest with app metadata and icons
- **sw.js** - Service worker for offline functionality
- **README.md** - This file with instructions

## 🌐 How to Use

### Option 1: Local Testing
1. Save all files to the same folder
2. Open `omni-docs-ai-app.html` in a mobile browser
3. Follow installation instructions above

### Option 2: Host Online
1. Upload all files to a web server (GitHub Pages, Netlify, Vercel, etc.)
2. Make sure they're in the same directory
3. Access via HTTPS (required for PWA features)
4. Follow installation instructions above

### Quick Deploy Examples

**GitHub Pages:**
```bash
# Create a new repository, then:
git add .
git commit -m "Add Omni Docs AI app"
git push origin main
# Enable GitHub Pages in repo settings
```

**Netlify Drop:**
- Just drag and drop all files to netlify.app/drop
- Get an instant URL

**Vercel:**
```bash
vercel --prod
```

## 🎯 What It Does

This app creates a wrapper around `docs.omni.co` that:
- Loads the full Omni docs site with AI agent
- Provides a clean header with refresh/home controls
- Removes browser UI for a native app feel
- Handles iOS safe areas (notch, home indicator)
- Shows loading states and error handling
- Enables installation to home screen

## 🔧 Technical Details

- **Framework**: Vanilla HTML/CSS/JS (no dependencies!)
- **PWA Standard**: Fully compliant Progressive Web App
- **Mobile Optimized**: Responsive design with iOS-specific fixes
- **Safe Areas**: Proper handling of iPhone notch and bottom bar
- **Service Worker**: Offline shell with network-first for content

## 💡 Tips

- The app needs an internet connection to load docs.omni.co content
- Clear your browser cache if you make updates
- HTTPS is required for service worker and installation
- Works best in Safari on iOS, Chrome on Android

## 🎨 Customization

Want to change the icon or colors? Edit these in `omni-docs-ai-app.html`:

```css
/* Header gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

And in `manifest.json` for the icons.

## 🐛 Troubleshooting

**"Add to Home Screen" not showing?**
- Make sure you're using Safari on iOS or Chrome on Android
- Check that you're on HTTPS (required for PWA)
- Clear browser cache and try again

**App not loading?**
- Check your internet connection
- Tap the refresh button in the header
- Try uninstalling and reinstalling

**Icon not appearing?**
- The SVG icons should work automatically
- If not, you can replace with PNG icons in the manifest

## 📝 Notes

- This is a wrapper/launcher app for docs.omni.co
- It doesn't modify or scrape the Omni docs content
- All functionality comes from the official Omni docs site
- The AI agent features are provided by Omni's site

Enjoy your quick-access Omni Docs AI assistant! 🚀✨
