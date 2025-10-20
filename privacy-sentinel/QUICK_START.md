# 🚀 Quick Start Guide

Get Privacy Sentinel up and running in 5 minutes!

## ⚡ Fast Setup

```bash
# Navigate to the project directory
cd privacy-sentinel

# Install dependencies (if not already done)
npm install

# Start development server
npm run dev
```

Open your browser to `http://localhost:5173` (or the port shown in terminal)

## 🎯 What You'll See

### Home Page
- 4 colorful platform cards (WhatsApp, Instagram, Facebook, X)
- Click any card to view that platform's privacy guides

### Platform Guides Page
- Search bar to find specific guides
- Category tabs to filter guides
- Grid of guide cards with priority labels
- Click "View Guide →" to see step-by-step instructions

### Guide Detail Page
- Progress bar showing completion
- Step-by-step instructions with image placeholders
- Previous/Next navigation buttons
- Quick jump to any step
- Complete & return to guide list

## 🧪 Try These Features

1. **Search for a guide**
   - Type "two-factor" in the search box
   - See guides filtered in real-time

2. **Filter by category**
   - Click on "Account Security" tab
   - See only security-related guides

3. **Navigate a guide**
   - Open any guide
   - Use Previous/Next buttons
   - Or click step numbers for quick navigation

4. **Check different platforms**
   - Return to home
   - Explore guides for different platforms
   - Notice the platform-specific colors!

## 📱 Test Responsive Design

1. Open browser DevTools (F12)
2. Toggle device toolbar
3. Try different screen sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1920px

## 🏗️ Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

The build output is in the `dist/` folder.

## 🚀 Deploy in 2 Minutes

### Option 1: Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Netlify
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

## 📝 Add Your First Guide

1. Open `src/data/whatsapp.json`
2. Copy an existing guide object
3. Modify the details:
   - Change ID
   - Update title and description
   - Edit steps

4. Save and refresh your browser
5. Your new guide appears immediately!

## 🖼️ Add Screenshots

1. Navigate to `src/assets/images/whatsapp/`
2. Add your screenshot files: `step1.png`, `step2.png`, etc.
3. Update the guide JSON with correct image names
4. Refresh to see your screenshots!

## 🎨 Customize Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  whatsapp: '#25D366',
  facebook: '#1877F2',
  twitter: '#000000',
  // Add your custom colors
}
```

## 🐛 Troubleshooting

### Port already in use?
```bash
# Kill the process using port 5173
npx kill-port 5173

# Or let Vite choose another port (automatic)
```

### Build errors?
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles not applying?
- Check console for errors
- Verify Tailwind is imported in `src/index.css`
- Clear browser cache (Ctrl+Shift+R)

## 📚 Next Steps

- Read [README.md](README.md) for full documentation
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment options
- See [CONTRIBUTING.md](CONTRIBUTING.md) to add guides
- Review [CHANGELOG.md](CHANGELOG.md) for version history

## 💡 Tips

- Use the search feature to quickly find guides
- Priority labels help identify critical settings
- All guides work offline after first load
- Share specific guide URLs with friends!

## 🎉 You're Ready!

Privacy Sentinel is now running. Start exploring privacy guides or add your own!

Need help? Check the full documentation or open an issue on GitHub.

---

**Happy Privacy Protecting! 🛡️**
