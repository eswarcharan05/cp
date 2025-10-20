# 🛡️ Privacy Sentinel

**Your guide to protecting your privacy on social platforms**

Privacy Sentinel is a comprehensive React-based web application that helps users understand and manage their privacy and security settings across popular social media platforms: WhatsApp, Instagram, Facebook, and X (Twitter).

## ✨ Features

- **32 Comprehensive Guides** across 4 major platforms
- **Step-by-Step Instructions** with visual placeholders for screenshots
- **Category Filtering** (Account Security, Personal Info, Messaging, Posts & Sharing, Discovery & Visibility)
- **Priority Labels** (Critical, High Priority, Important)
- **Search Functionality** to quickly find relevant guides
- **Responsive Design** optimized for mobile and desktop
- **Platform-Specific Theming** with unique colors for each social media platform
- **Progress Tracking** in guide detail pages

## 📊 Guide Coverage

- 🟢 **WhatsApp**: 7 guides
- 🟣 **Instagram**: 10 guides
- 🔵 **Facebook**: 9 guides
- ⚫ **X (Twitter)**: 6 guides

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd privacy-sentinel

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🏗️ Project Structure

```
privacy-sentinel/
├── src/
│   ├── assets/
│   │   └── images/          # Platform screenshot directories
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   └── GuideCard.jsx    # Guide card component
│   ├── pages/
│   │   ├── Home.jsx         # Landing page with platform cards
│   │   ├── PlatformGuides.jsx  # Platform-specific guide list
│   │   └── GuideDetail.jsx     # Step-by-step guide view
│   ├── data/
│   │   ├── whatsapp.json    # WhatsApp guide data
│   │   ├── instagram.json   # Instagram guide data
│   │   ├── facebook.json    # Facebook guide data
│   │   └── x.json           # X (Twitter) guide data
│   ├── App.jsx              # Main app with routing
│   ├── index.css            # Tailwind CSS imports
│   └── main.jsx             # App entry point
├── public/                  # Static assets
├── index.html
├── package.json
├── tailwind.config.js       # Tailwind configuration
└── vite.config.js           # Vite configuration
```

## 🎨 Tech Stack

- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **React Icons** - Icon library

## 📱 Adding Screenshots

To add actual screenshots to the guides:

1. Navigate to `src/assets/images/[platform]/`
2. Add screenshots named as `step1.png`, `step2.png`, etc.
3. Update the image paths in the respective JSON files if needed
4. Recommended image format: PNG
5. Recommended dimensions: 1080x1920 (mobile) or 1920x1080 (desktop)

## 🌐 Deployment

This app can be easily deployed to:

- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your repository and set build command to `npm run build`
- **GitHub Pages**: Use `gh-pages` package to deploy the `dist` folder

## 📝 Adding New Guides

To add a new privacy guide:

1. Open the appropriate JSON file in `src/data/`
2. Add a new guide object following this structure:

```json
{
  "id": "unique-id",
  "title": "Guide Title",
  "priority": "Critical|High Priority|Important",
  "category": "Account Security|Personal Info|Messaging|Posts & Sharing|Discovery & Visibility",
  "description": "Brief description of what the guide covers",
  "steps": [
    {
      "stepNumber": 1,
      "title": "Step Title",
      "instruction": "Detailed instruction for this step",
      "image": "step1.png"
    }
  ]
}
```

3. Add corresponding screenshot images to the platform's image directory

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## ⚠️ Disclaimer

This is an educational resource. Privacy settings on social media platforms may change over time. Always verify current settings directly on the platforms themselves.

---

**© 2025 Privacy Sentinel** - Your privacy matters.
