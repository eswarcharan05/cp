# Image Naming Convention

## Overview

All guide images follow a consistent naming pattern to avoid conflicts and improve organization.

## Naming Pattern

```
{guide-id}-step{number}.{extension}
```

### Examples:

- **x-1** (Control Audience and Tagging): `x1-step1.svg`, `x1-step2.svg`, `x1-step3.svg`, `x1-step4.svg`
- **x-2** (Manage Location Sharing): `x2-step1.svg`, `x2-step2.svg`, `x2-step3.svg`
- **x-3** (Control Message Settings): `x3-step1.svg`, `x3-step2.svg`, `x3-step3.svg`, `x3-step4.svg`
- **x-4** (Configure Privacy and Safety): `x4-step1.svg`, `x4-step2.svg`, `x4-step3.svg`, `x4-step4.svg`
- **x-5** (Enable Two-Factor Authentication): `x5-step1.svg`, `x5-step2.svg`, `x5-step3.svg`, `x5-step4.svg`
- **x-6** (Manage Discoverability): `x6-step1.svg`, `x6-step2.svg`, `x6-step3.svg`

## Directory Structure

```
public/images/
├── x/
│   ├── x1-step1.svg
│   ├── x1-step2.svg
│   ├── x1-step3.svg
│   ├── x1-step4.svg
│   ├── x2-step1.svg
│   ├── x2-step2.svg
│   ├── x2-step3.svg
│   ├── x3-step1.svg
│   └── ...
├── whatsapp/
│   ├── whatsapp1-step1.svg
│   └── ...
├── instagram/
│   ├── instagram1-step1.svg
│   └── ...
└── facebook/
    ├── facebook1-step1.svg
    └── ...
```

## Benefits

✅ **No Conflicts**: Each guide has unique image names  
✅ **Easy to Find**: Guide ID matches the image prefix  
✅ **Scalable**: Works for unlimited guides per platform  
✅ **Clear Organization**: Immediately know which guide an image belongs to  

## How to Add New Images

### Step 1: Identify the Guide ID
Check the JSON file for the guide ID (e.g., `"id": "x-7"`)

### Step 2: Create Images
Name them following the pattern:
- Guide ID `x-7` → Images: `x7-step1.svg`, `x7-step2.svg`, etc.

### Step 3: Place in Public Folder
```bash
public/images/x/x7-step1.svg
public/images/x/x7-step2.svg
```

### Step 4: Update JSON
```json
{
  "id": "x-7",
  "steps": [
    {
      "stepNumber": 1,
      "image": "x7-step1.svg"
    }
  ]
}
```

## Current Status

### X (Twitter) Platform - ✅ Complete

| Guide ID | Title | Images |
|----------|-------|--------|
| x-1 | Control Audience and Tagging | x1-step1.svg to x1-step4.svg ✅ |
| x-2 | Manage Location Sharing | x2-step1.svg to x2-step3.svg ✅ |
| x-3 | Control Message Settings | x3-step1.svg to x3-step4.svg 📝 |
| x-4 | Configure Privacy and Safety | x4-step1.svg to x4-step4.svg 📝 |
| x-5 | Enable Two-Factor Authentication | x5-step1.svg to x5-step4.svg 📝 |
| x-6 | Manage Discoverability | x6-step1.svg to x6-step3.svg 📝 |

**Legend:**
- ✅ Images created and tested
- 📝 Needs images (placeholders will show)

### Other Platforms - 🔜 To Do

- **WhatsApp**: Use `whatsapp{n}-step{n}.svg`
- **Instagram**: Use `instagram{n}-step{n}.svg`
- **Facebook**: Use `facebook{n}-step{n}.svg`

## Image Specifications

- **Format**: SVG (preferred) or PNG
- **Size**: 400x800 for mobile screenshots
- **Quality**: High resolution, clear text
- **Content**: Actual UI screenshots or mockups matching the step instructions

## Migration Notes

**Old Pattern** (deprecated):
```
step1.png, step2.png, step3.png
```

**New Pattern** (current):
```
x1-step1.svg, x1-step2.svg, x1-step3.svg
```

All X platform guides have been migrated to the new naming convention as of 2025-10-20.
