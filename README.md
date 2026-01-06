# DN & TITO Wedding Website

A beautiful, modern wedding invitation website for Dominion and Tito's wedding celebration. Built with React, TypeScript, and Tailwind CSS, featuring smooth animations, responsive design, and elegant typography.

## ✨ Features

- **Hero Section**: Full-screen video background with custom SVG clipping paths and elegant typography
- **Smooth Navigation**: Animated navbar that transitions from top-left to center on scroll
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop
- **Our Story Section**: Showcase your wedding journey with corner media galleries and animations
- **Gift Registry**: Curated wishlist section for wedding gifts
- **Smooth Scrolling**: Seamless page transitions between sections
- **Custom Clipping Paths**: Unique SVG-based design elements for badges
- **Luxury Aesthetic**: Premium typography with Playfair Display and Cormorant Garamond fonts

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Playfair Display, Cormorant Garamond)
- **Utilities**: clsx, tailwind-merge

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with video background
│   ├── Navbar.tsx            # Navigation bar with scroll animations
│   ├── OurStory.tsx          # Wedding story section with gallery
│   ├── GiftRegistry.tsx      # Gift registry section
│   ├── Clipdef1.tsx          # SVG clip path for top badge
│   └── Clipdef2.tsx          # SVG clip path for bottom badge
├── App.tsx                   # Main app component
├── App.css                   # Global styles and typography
├── index.css                 # Tailwind imports
└── main.tsx                  # React entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd dn
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

## 📝 Configuration

### Update Wedding Details

Edit the following files to customize the wedding information:

**Hero Section** (`src/components/Hero.tsx`):
- Wedding date and location
- Couple names
- Video background

**Gift Registry** (`src/components/GiftRegistry.tsx`):
- Update `wishlistItems` array with your gifts

**Navigation** (`src/components/Navbar.tsx`):
- Links and navigation sections

### Custom Styling

Global styles and fonts are configured in:
- `src/App.css` - Typography and utility classes
- `src/index.css` - Tailwind CSS imports

## 🎨 Key Components

### Hero Component
- Full-screen hero section with video background
- Custom SVG clipping paths for elegant badge design
- Responsive typography with gradient text
- Navbar integration

### Navbar Component
- Position transitions from top-left to center on scroll
- Dynamic color changes based on scroll state
- Mobile menu support with hamburger icon
- Active section highlighting
- Smooth scroll navigation to sections

### OurStory Section
- Corner-based media galleries with slideshow functionality
- Image and video support
- Smooth scroll animations

### GiftRegistry Section
- Wishlist display with grid layout
- Elegant card design
- View/purchase links

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎬 Video Assets

Place your wedding video in the `public/` folder and reference it in `Hero.tsx`:
```tsx
src="YOUR_VIDEO_NAME.mp4"
```

## 🖼 Media Assets

- Logo: `public/DTLogo.png`
- Hero Video: `public/DN&TITO_Template.mp4`
- Additional images in `src/assets/`

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🚀 Deployment

You can deploy to various platforms:

- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **GitHub Pages**: Run `npm run build` and deploy the `dist/` folder

## 🎨 Customization Guide

### Colors
Adjust color palette in component className attributes and `App.css`

### Fonts
Font imports are in `App.css`. Add new fonts from Google Fonts and apply via utility classes

### Animations
Modify Framer Motion animation configs in respective components

### Layout
Adjust spacing and sizing using Tailwind CSS utility classes

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📄 License

Private project. All rights reserved.

## 👥 Support

For issues or questions, please contact the development team.

---

**Created with ❤️ for Dominion & Tito's Wedding**
