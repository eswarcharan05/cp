# Deployment Guide - Privacy Sentinel

## 🚀 Recommended: Deploy as Static Site

Privacy Sentinel is a React SPA (Single Page Application) built with Vite. The **best way** to deploy it is as a **Static Site**, not a Web Service.

### ✅ Why Static Site?

- **Faster**: No Node.js server needed
- **Cheaper**: Free tier on most platforms
- **Simpler**: Just serve pre-built HTML/CSS/JS
- **Better Performance**: CDN-optimized delivery

---

## 📦 Option 1: Render (Static Site) - Recommended

### Step 1: Push to GitHub
```bash
git add -A
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Static Site on Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository: `eswarcharan05/cp`
4. Configure:

```
Name: privacy-sentinel
Root Directory: privacy-sentinel
Build Command: npm install && npm run build
Publish Directory: privacy-sentinel/dist
```

5. Click **"Create Static Site"**

### Step 3: Configure Redirects (for React Router)

Render will automatically use the `render.yaml` file in your repo, which includes:
- SPA redirect rules (all routes → `/index.html`)
- Cache headers for optimal performance

### Step 4: Deploy

Render will automatically:
- Install dependencies
- Build your app (`npm run build`)
- Deploy the `dist/` folder
- Assign you a URL: `https://privacy-sentinel.onrender.com`

---

## 📦 Option 2: Render (Web Service) - Alternative

If you need to use a Web Service instead:

### Configuration:

```
Name: privacy-sentinel
Root Directory: privacy-sentinel
Build Command: npm install
Start Command: npm run dev
```

### Environment Variables:
```
PORT=10000
```

**Note**: Your `package.json` and `vite.config.js` are already configured for this:
- `package.json`: `"dev": "vite --host 0.0.0.0 --port $PORT"`
- `vite.config.js`: Includes React plugin and server config

---

## 📦 Option 3: Netlify (Static Site)

### Step 1: Install Netlify CLI (optional)
```bash
npm install -g netlify-cli
```

### Step 2: Deploy

**Via Netlify Dashboard:**
1. Go to [Netlify](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect GitHub: `eswarcharan05/cp`
4. Configure:

```
Base directory: privacy-sentinel
Build command: npm run build
Publish directory: privacy-sentinel/dist
```

**Via CLI:**
```bash
cd privacy-sentinel
netlify deploy --prod
```

### Step 3: Configure Redirects

Create `public/_redirects`:
```
/*    /index.html   200
```

This ensures React Router works correctly.

---

## 📦 Option 4: Vercel (Static Site)

### Step 1: Install Vercel CLI (optional)
```bash
npm install -g vercel
```

### Step 2: Deploy

**Via Vercel Dashboard:**
1. Go to [Vercel](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import from GitHub: `eswarcharan05/cp`
4. Configure:

```
Root Directory: privacy-sentinel
Build Command: npm run build
Output Directory: dist
```

**Via CLI:**
```bash
cd privacy-sentinel
vercel --prod
```

Vercel automatically handles SPA routing.

---

## 📦 Option 5: GitHub Pages (Free)

### Step 1: Update `vite.config.js`

Add base path:
```javascript
export default defineConfig({
  base: '/cp/',  // Your repo name
  plugins: [react()],
  // ... rest of config
})
```

### Step 2: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 3: Add deploy script to `package.json`
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### Step 4: Deploy
```bash
npm run deploy
```

Your site will be live at: `https://eswarcharan05.github.io/cp/`

---

## 🔧 Build Verification

Before deploying, always test the build locally:

```bash
# Build the app
npm run build

# Preview the build
npm run preview
```

Visit `http://localhost:4173` to test the production build.

---

## ✅ Current Configuration Status

### package.json ✅
```json
{
  "scripts": {
    "dev": "vite --host 0.0.0.0 --port $PORT",  ✅ Render-ready
    "build": "vite build",                       ✅ Works everywhere
    "preview": "vite preview"                    ✅ Local testing
  }
}
```

### vite.config.js ✅
```javascript
export default defineConfig({
  plugins: [react()],                            ✅ React support
  server: {
    host: '0.0.0.0',                            ✅ Binds to all interfaces
    port: process.env.PORT || 5173,             ✅ Uses Render's PORT
    allowedHosts: ['akmoviescp.onrender.com'],  ✅ Allows your domain
  },
})
```

### render.yaml ✅
- Static site configuration
- SPA routing support
- Cache headers
- Auto-deployment on push

---

## 🎯 Recommended Deployment Path

**For Privacy Sentinel:**

1. ✅ **Render Static Site** (Best choice)
   - Free tier available
   - Auto-deploys on git push
   - Fast CDN delivery
   - Already configured via `render.yaml`

2. 🥈 **Netlify** (Great alternative)
   - Generous free tier
   - Excellent DX
   - Built-in form handling

3. 🥉 **Vercel** (Also excellent)
   - Zero config for Vite
   - Great performance
   - Free for personal projects

---

## 🐛 Troubleshooting

### Issue: "404 on page refresh"
**Solution**: Ensure SPA redirects are configured (see platform-specific sections above)

### Issue: "Blank page after deployment"
**Solution**: 
1. Check browser console for errors
2. Verify `base` path in `vite.config.js` matches your deployment URL
3. Ensure all assets are in `public/` folder

### Issue: "Images not loading"
**Solution**: 
- Images in `public/` are served from root: `/images/x/step1.svg`
- Images in `src/assets/` need to be imported in code

### Issue: "Environment variables not working"
**Solution**: 
- Vite only exposes vars prefixed with `VITE_`
- Example: `VITE_API_KEY` (accessible via `import.meta.env.VITE_API_KEY`)

---

## 📊 Build Output

Expected build output:
```
dist/
├── index.html
├── assets/
│   ├── index-[hash].css
│   └── index-[hash].js
└── images/
    └── x/
        ├── x1-step1.svg
        ├── x1-step2.svg
        └── ...
```

**Size**: ~300 KB (gzipped)
**Build time**: ~1 second

---

## 🔐 Security Notes

- All API keys should use `VITE_` prefix
- Never commit `.env` files
- Use platform environment variables for secrets
- Enable HTTPS (automatic on Render/Netlify/Vercel)

---

## 📈 Performance Tips

1. **Enable compression**: All platforms do this automatically
2. **Use CDN**: Render/Netlify/Vercel all use CDNs
3. **Optimize images**: Already using SVG (small file size)
4. **Code splitting**: Vite does this automatically
5. **Cache headers**: Configured in `render.yaml`

---

## 🎉 You're Ready!

Your app is **fully configured** for deployment. Choose your platform and deploy! 🚀

**Recommended**: Start with **Render Static Site** using the `render.yaml` configuration.
