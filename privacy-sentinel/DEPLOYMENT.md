# 🚀 Deployment Guide

This guide will help you deploy Privacy Sentinel to various hosting platforms.

## Prerequisites

- A GitHub account (recommended for easy deployment)
- Your Privacy Sentinel code pushed to a GitHub repository

## Option 1: Deploy to Vercel (Recommended)

Vercel provides the easiest deployment experience for React apps.

### Steps:

1. **Sign up for Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import Your Project**
   - Click "Add New Project"
   - Select your privacy-sentinel repository
   - Vercel will automatically detect it's a Vite project

3. **Configure Build Settings** (should be auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your app will be live in 1-2 minutes!

5. **Custom Domain** (Optional)
   - Go to Project Settings > Domains
   - Add your custom domain

## Option 2: Deploy to Netlify

Netlify is another excellent option for static site hosting.

### Steps:

1. **Sign up for Netlify**
   - Visit [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Add New Site**
   - Click "Add new site" > "Import an existing project"
   - Connect to your GitHub repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Base directory: (leave empty)

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live with a netlify.app subdomain

5. **Custom Domain** (Optional)
   - Go to Site Settings > Domain management
   - Add your custom domain

## Option 3: Deploy to GitHub Pages

Deploy directly from your GitHub repository.

### Steps:

1. **Install gh-pages package**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   Add these scripts to your `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/privacy-sentinel"
   }
   ```

3. **Update vite.config.js**
   Add base path:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/privacy-sentinel/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Source: Deploy from branch `gh-pages`
   - Your site will be at: `https://yourusername.github.io/privacy-sentinel`

## Option 4: Deploy to Cloudflare Pages

Fast global CDN with generous free tier.

### Steps:

1. **Sign up for Cloudflare Pages**
   - Visit [pages.cloudflare.com](https://pages.cloudflare.com)
   - Create an account

2. **Create a New Project**
   - Click "Create a project"
   - Connect your GitHub repository

3. **Configure Build Settings**
   - Framework preset: Vite
   - Build command: `npm run build`
   - Build output directory: `dist`

4. **Deploy**
   - Click "Save and Deploy"
   - Your site will be live with a pages.dev subdomain

## Environment Variables

If you need to add environment variables (e.g., for analytics):

### Vercel:
- Project Settings > Environment Variables

### Netlify:
- Site Settings > Build & deploy > Environment

### GitHub Pages:
- Use `.env` files and commit them (only for non-sensitive data)

### Cloudflare Pages:
- Project Settings > Environment Variables

## Build Optimization

For production builds, the app is automatically optimized:

- ✅ Code splitting
- ✅ Minification
- ✅ Tree shaking
- ✅ Asset optimization

No additional configuration needed!

## Continuous Deployment

All platforms support automatic deployments:

- Push to `main` branch → Automatic deployment
- Pull Request → Preview deployment
- Rollback to previous versions with one click

## Custom Domain Setup

### DNS Configuration:

For Vercel/Netlify:
1. Add CNAME record pointing to deployment platform
2. Platform will automatically provision SSL

For GitHub Pages:
1. Add CNAME file in `public/` directory
2. Configure DNS A records or CNAME

## Post-Deployment Checklist

- [ ] Test all routes work correctly
- [ ] Verify all platform guides load
- [ ] Test search functionality
- [ ] Test guide navigation (previous/next)
- [ ] Check mobile responsiveness
- [ ] Verify all platform colors display correctly
- [ ] Test category filtering
- [ ] Confirm footer copyright appears

## Troubleshooting

### 404 on Page Refresh (SPA Issue)

For client-side routing, you may need to configure redirects:

**Vercel** - Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

**Netlify** - Create `public/_redirects`:
```
/*    /index.html   200
```

**GitHub Pages** - Create `public/404.html` with same content as `index.html`

### Build Fails

- Clear `node_modules` and `package-lock.json`
- Run `npm install` again
- Check Node.js version (needs v18+)

## Monitoring

Consider adding:

- **Analytics**: Google Analytics, Plausible, or Vercel Analytics
- **Error Tracking**: Sentry
- **Performance**: Lighthouse CI

---

**Need help?** Check the platform-specific documentation or open an issue in the repository.
