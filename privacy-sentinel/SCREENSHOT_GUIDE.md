# 📸 Screenshot Collection Guide

This guide helps you collect and add actual screenshots to replace the placeholders in Privacy Sentinel.

## 🎯 Overview

The app currently has **32 guides** with placeholder images. Each guide has 3-4 steps, requiring approximately **100-120 screenshots** total across all platforms.

## 📱 Screenshot Requirements

### Image Specifications
- **Format**: PNG (recommended) or JPG
- **Mobile Screenshots**: 1080x1920 or 1170x2532 (iPhone dimensions)
- **Desktop Screenshots**: 1920x1080 or larger
- **Quality**: High resolution, clear and readable
- **Size**: Keep under 500KB per image (compress if needed)

### Privacy Requirements
- ⚠️ **Blur all personal information**:
  - Names
  - Phone numbers
  - Email addresses
  - Profile pictures
  - Location data
  - Any identifiable content

### Annotation (Optional but Helpful)
- Highlight the relevant setting or button
- Use arrows or circles to draw attention
- Use platform colors for consistency
- Keep annotations clean and minimal

## 🗂️ Directory Structure

Screenshots should be organized by platform:

```
src/assets/images/
├── whatsapp/
│   ├── step1.png
│   ├── step2.png
│   └── step3.png
├── instagram/
│   ├── step1.png
│   ├── step2.png
│   └── step3.png
├── facebook/
│   ├── step1.png
│   ├── step2.png
│   └── step3.png
└── x/
    ├── step1.png
    ├── step2.png
    └── step3.png
```

## 📋 Screenshot Collection Checklist

### WhatsApp (7 guides, ~25 screenshots)

- [ ] **Hide Last Seen & Online Status** (4 steps)
  - [ ] step1.png - Settings menu
  - [ ] step2.png - Privacy settings
  - [ ] step3.png - Last seen options
  - [ ] step4.png - Online status toggle

- [ ] **Control Profile Photo Privacy** (3 steps)
- [ ] **Set Status Privacy** (3 steps)
- [ ] **Silence Unknown Callers** (3 steps)
- [ ] **Enable Disappearing Messages** (3 steps)
- [ ] **Control Who Can Add You to Groups** (3 steps)
- [ ] **Manage Live Location Sharing** (3 steps)

### Instagram (10 guides, ~35 screenshots)

- [ ] **Hide Activity Status** (3 steps)
- [ ] **Manage Story Privacy** (3 steps)
- [ ] **Control Comments on Posts** (4 steps)
- [ ] **Restrict or Block Accounts** (3 steps)
- [ ] **Manage Tagged Photos** (3 steps)
- [ ] **Hide Like and View Counts** (3 steps)
- [ ] **Control Message Requests** (3 steps)
- [ ] **Review Login Activity** (3 steps)
- [ ] **Enable Two-Factor Authentication** (4 steps)
- [ ] **Manage Data Sharing with Partners** (3 steps)

### Facebook (9 guides, ~30 screenshots)

- [ ] **Use Privacy Checkup** (4 steps)
- [ ] **Control Who Can Find You** (3 steps)
- [ ] **Block Someone** (3 steps)
- [ ] **Manage Device Permissions** (3 steps)
- [ ] **Change Your Password** (4 steps)
- [ ] **Control Post Visibility** (3 steps)
- [ ] **Manage Notification Settings** (3 steps)
- [ ] **Control Ad Preferences** (4 steps)
- [ ] **Lock Your Profile** (3 steps)

### X (Twitter) (6 guides, ~23 screenshots)

- [ ] **Control Audience and Tagging** (4 steps)
- [ ] **Manage Location Sharing** (3 steps)
- [ ] **Control Message Settings** (4 steps)
- [ ] **Configure Privacy and Safety** (4 steps)
- [ ] **Enable Two-Factor Authentication** (4 steps)
- [ ] **Manage Discoverability** (3 steps)

## 🛠️ Tools for Screenshot Collection

### Mobile (iOS)
1. Take screenshot: Volume Up + Side Button
2. Edit with Markup: Tap thumbnail, use tools
3. Blur personal info: Use pixelate tool
4. Save to Photos

### Mobile (Android)
1. Take screenshot: Power + Volume Down
2. Edit with Google Photos or built-in editor
3. Blur personal info
4. Save

### Desktop
- **macOS**: Cmd + Shift + 4 (select area)
- **Windows**: Win + Shift + S
- **Browser**: Browser DevTools device mode for mobile view

### Annotation Tools
- **Snagit** - Professional screen capture (paid)
- **Skitch** - Simple annotations (free)
- **Markup (iOS)** - Built-in iOS tool (free)
- **Annotate** - Chrome extension (free)
- **GIMP** - Open-source image editor (free)
- **Figma** - For creating mockups (free tier)

## 📐 Consistency Guidelines

### Device Choice
Pick one device per platform and stick with it:
- **Mobile**: iPhone or Android flagship (same model throughout)
- **Desktop**: Chrome browser in consistent window size

### Settings Display
- Use light mode (or dark mode consistently)
- Same language throughout
- Remove status bar clutter
- Clear notifications before screenshots

### Naming Convention
Follow the exact naming in JSON files:
- `step1.png`, `step2.png`, `step3.png`, etc.
- Lowercase filenames
- No spaces or special characters

## 🎨 Image Optimization

Before adding screenshots to the project:

### Resize Images
```bash
# Using ImageMagick
mogrify -resize 1080x1920 *.png

# Or online tool: tinypng.com
```

### Compress Images
```bash
# Using ImageOptim (Mac)
# Or use: squoosh.app (web-based)
```

### Batch Processing
```bash
# Convert JPG to PNG
mogrify -format png *.jpg

# Compress all PNG files
pngquant *.png --quality=65-80 --ext=.png --force
```

## 🔄 Adding Screenshots to the App

1. **Navigate to platform directory**
   ```bash
   cd src/assets/images/whatsapp/
   ```

2. **Add your screenshot files**
   - Name them according to step numbers
   - Ensure correct format (PNG/JPG)

3. **Update import if needed**
   If you're loading images dynamically, update `GuideDetail.jsx`

4. **Test the guide**
   - Run `npm run dev`
   - Navigate to the guide
   - Verify images load correctly
   - Check on mobile view

5. **Build and verify**
   ```bash
   npm run build
   npm run preview
   ```

## 🤖 Alternative: Use Mockup Images

If you can't access real platforms, you can:

1. **Use Device Mockups**
   - Place UI screenshots in device frames
   - Sites: Mockuphone, Screely, Shots.so

2. **Create Illustrations**
   - Draw simplified UI representations
   - Use Figma or Sketch
   - Focus on the settings path

3. **Use Stock Images**
   - Some sites offer UI screenshot libraries
   - Ensure licensing allows usage

## ✅ Quality Checklist

Before committing screenshots:

- [ ] All personal info blurred/removed
- [ ] Images are clear and readable
- [ ] Consistent device/platform appearance
- [ ] Correct naming convention used
- [ ] Files optimized for web
- [ ] All steps in sequence are complete
- [ ] Tested in the actual app
- [ ] No copyright/trademark issues

## 📊 Progress Tracking

Create a spreadsheet to track progress:

| Platform | Guide | Steps | Screenshots Collected | Status |
|----------|-------|-------|----------------------|--------|
| WhatsApp | Guide 1 | 4 | 4/4 | ✅ Complete |
| WhatsApp | Guide 2 | 3 | 1/3 | 🟡 In Progress |
| Instagram | Guide 1 | 3 | 0/3 | ⚪ Not Started |

## 🎯 Priority Order

Collect screenshots in this order:

1. **Critical Priority Guides** (Account security, 2FA)
2. **High Priority Guides** (Privacy controls)
3. **Important Guides** (Additional features)

## 💡 Tips

- Take screenshots at the same time for consistency
- Keep original files as backup
- Use cloud storage for team collaboration
- Document any platform UI changes you notice
- Consider creating a video walkthrough too

## 🚀 Batch Collection Strategy

**Weekend Project Plan**:

- **Day 1**: Collect all WhatsApp + Instagram screenshots (~60 images)
- **Day 2**: Collect all Facebook + X screenshots (~53 images)
- **Day 3**: Optimize, annotate, and add to project

**Time Estimate**: 6-8 hours total for all platforms

---

**Need help?** Open an issue in the repository or refer to CONTRIBUTING.md

**🛡️ Remember**: Always respect user privacy when collecting screenshots!
