# Contributing to Privacy Sentinel

Thank you for considering contributing to Privacy Sentinel! This guide will help you get started.

## 🎯 Ways to Contribute

- **Add new privacy guides** for existing platforms
- **Add support for new platforms** (TikTok, Snapchat, LinkedIn, etc.)
- **Update existing guides** when platforms change their settings
- **Add actual screenshots** to replace placeholders
- **Improve documentation** and translations
- **Report bugs** or suggest features
- **Improve UI/UX** design

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm or yarn
- Git

### Setup Development Environment

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/privacy-sentinel.git
   cd privacy-sentinel
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   - Visit `http://localhost:5173`

## 📝 Adding a New Privacy Guide

### Step 1: Locate the Platform Data File

Find the appropriate JSON file in `src/data/`:
- `whatsapp.json`
- `instagram.json`
- `facebook.json`
- `x.json`

### Step 2: Add Your Guide

Add a new guide object to the `guides` array:

```json
{
  "id": "platform-shortname-number",
  "title": "Clear and Descriptive Title",
  "priority": "Critical|High Priority|Important",
  "category": "Account Security|Personal Info|Messaging|Posts & Sharing|Discovery & Visibility",
  "description": "A brief description explaining what this guide covers and why it matters.",
  "steps": [
    {
      "stepNumber": 1,
      "title": "Step Title",
      "instruction": "Clear, actionable instruction for this step. Be specific about where to tap/click.",
      "image": "step1.png"
    },
    {
      "stepNumber": 2,
      "title": "Next Step Title",
      "instruction": "Continue with the next action.",
      "image": "step2.png"
    }
  ]
}
```

### Step 3: Add Screenshots (Optional but Recommended)

1. Take screenshots on the actual platform
2. Name them `step1.png`, `step2.png`, etc.
3. Save them in `src/assets/images/[platform]/`
4. Recommended size: 1080x1920 (mobile) or 1920x1080 (desktop)
5. Format: PNG for best quality

### Step 4: Test Your Guide

1. Navigate to the platform's guide page
2. Find your new guide in the list
3. Click "View Guide"
4. Test all step navigation
5. Verify descriptions and images

## 🆕 Adding a New Platform

To add support for a new social media platform:

### 1. Create Data File

Create `src/data/[platform].json`:

```json
{
  "platform": "Platform Name",
  "color": "#HexColor",
  "guides": []
}
```

### 2. Update Home Page

Edit `src/pages/Home.jsx` and add your platform to the `platforms` array:

```javascript
{
  name: 'Platform Name',
  icon: IconComponent,
  color: '#HexColor',
  path: '/guides/platform-slug',
  description: 'X privacy guides',
  bgGradient: 'from-color-400 to-color-600'
}
```

### 3. Update Platform Guides Page

Edit `src/pages/PlatformGuides.jsx` and add your platform to `platformData`:

```javascript
const platformData = {
  // ... existing platforms
  'platform-slug': platformSlugData
};
```

### 4. Import Icons

If using a new icon, install or import it from `react-icons`.

### 5. Create Image Directory

```bash
mkdir -p src/assets/images/[platform-slug]
```

## 🎨 Design Guidelines

### Colors

Use the official brand colors:
- WhatsApp: `#25D366`
- Instagram: Gradient `#E1306C` to `#833AB4`
- Facebook: `#1877F2`
- X (Twitter): `#000000`

### Priority Labels

- **Critical**: Security features that prevent unauthorized access
- **High Priority**: Important privacy settings that affect data sharing
- **Important**: Useful privacy features that enhance user control

### Categories

- **Account Security**: Login, passwords, 2FA, account access
- **Personal Info**: Profile details, visibility, contact information
- **Messaging**: DM settings, message requests, read receipts
- **Posts & Sharing**: Post visibility, story settings, tags
- **Discovery & Visibility**: Search settings, recommendations

## 📸 Screenshot Guidelines

### Requirements

1. **Clear and readable** - Use high resolution
2. **Annotated** - Highlight relevant UI elements (optional)
3. **Up-to-date** - Use current app versions
4. **Consistent** - Same device/theme for a platform
5. **Privacy-respecting** - Blur personal information

### Tools

- **Mobile**: Built-in screenshot tools
- **Annotation**: Markup (iOS), Google Photos, Snapseed
- **Editing**: Remove status bar, crop consistently

## 🧪 Testing Checklist

Before submitting a PR:

- [ ] All routes work correctly
- [ ] Search finds your guide
- [ ] Category filtering works
- [ ] Step navigation (previous/next) works
- [ ] Mobile responsive on small screens
- [ ] No console errors
- [ ] JSON is valid (use a JSON validator)
- [ ] Text has no spelling errors
- [ ] Instructions are clear and actionable

## 📤 Submitting Changes

### 1. Create a Branch

```bash
git checkout -b feature/add-tiktok-privacy-guide
```

### 2. Make Your Changes

Follow the guidelines above.

### 3. Commit Your Changes

```bash
git add .
git commit -m "Add privacy guide: Hide TikTok activity status"
```

Use clear, descriptive commit messages:
- `Add guide: [Platform] - [Feature]`
- `Update guide: [Platform] - [Feature]`
- `Fix: [Description of fix]`
- `Docs: [Description of documentation change]`

### 4. Push to Your Fork

```bash
git push origin feature/add-tiktok-privacy-guide
```

### 5. Create Pull Request

1. Go to the original repository on GitHub
2. Click "New Pull Request"
3. Select your fork and branch
4. Fill in the PR template:
   - What changes were made
   - Why these changes are needed
   - Screenshots (if applicable)
   - Testing done

## 📋 Pull Request Guidelines

### Title Format

- `[Platform] Add guide: [Feature name]`
- `[Platform] Update guide: [Feature name]`
- `Fix: [Issue description]`
- `Docs: [Documentation change]`

### Description

Include:
- Purpose of the changes
- List of guides added/modified
- Screenshots of new guides
- Any breaking changes
- Related issues

### Review Process

1. Maintainers will review your PR
2. Address any feedback or requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited!

## 🐛 Reporting Bugs

### Before Reporting

1. Check if the issue already exists
2. Verify it's reproducible
3. Test on latest version

### Bug Report Template

```markdown
**Description**
Clear description of the bug.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen.

**Screenshots**
If applicable.

**Environment**
- Browser: [e.g. Chrome 120]
- Device: [e.g. iPhone 12, Windows 11]
- Version: [e.g. 1.0.0]
```

## 💡 Feature Requests

We welcome feature suggestions! Please include:

- Clear description of the feature
- Use case (why is it needed?)
- Proposed implementation (if you have ideas)
- Examples from other apps (if applicable)

## 📜 Code Style

- Use **ES6+ JavaScript**
- Follow existing code formatting
- Use **functional components** with hooks
- Keep components **small and focused**
- Add **comments** for complex logic
- Use **meaningful variable names**

## 🤝 Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Respect different perspectives

## 📞 Getting Help

- **Questions**: Open a GitHub Discussion
- **Bugs**: Open a GitHub Issue
- **Security**: Email security@privacysentinel.dev (if this were a real project)

## 🎉 Recognition

Contributors will be:
- Listed in CONTRIBUTORS.md
- Credited in release notes
- Thanked in the README

Thank you for making Privacy Sentinel better! 🛡️
