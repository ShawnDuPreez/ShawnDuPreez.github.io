# Shawn du Preez - Portfolio (Next.js 15)

Modern, high-performance portfolio website built with **Next.js 15**, **React**, **Framer Motion**, **Lenis**, and **Tailwind CSS**.

🌐 **Live Site**: [shawndupreez.github.io](https://shawndupreez.github.io)

## ✨ Features

- ⚡ **Next.js 15** with App Router and Server-Side Rendering
- 🎨 **Framer Motion** for buttery smooth animations
- 📜 **Lenis** for smooth scrolling
- 🎯 **Custom cursor** effect with hover interactions
- 🧲 **Magnetic buttons** with interactive hover effects
- 🎭 **Fade-up animations** with stagger effects
- 🌈 **Animated gradient backgrounds**
- 📱 **Fully responsive** design
- ⚡ **Optimized images** with Next.js Image component
- 🔍 **SEO optimized** with metadata and Open Graph tags

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Navigate to project directory
cd portfolio-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:3000`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
/app
  ├─ layout.tsx           → Root layout with Lenis & metadata
  ├─ page.tsx             → Main page with all sections
  ├─ globals.css          → Tailwind + custom styles
  └─ components/
      ├─ Navigation.tsx   → Fixed navigation with active states
      ├─ Hero.tsx         → Hero section with rotating subtitles
      ├─ About.tsx        → About section with specializations
      ├─ Projects.tsx      → Projects grid with modals
      ├─ Contact.tsx       → Contact section with social links
      ├─ Footer.tsx        → Footer with glow line
      ├─ SmoothScroll.tsx  → Lenis smooth scroll provider
      ├─ CursorEffect.tsx  → Custom cursor follower
      ├─ AnimatedText.tsx → Reusable text animation
      └─ MagneticButton.tsx → Interactive magnetic button
/public
  └─ images/              → Optimized images
```

## 🎨 Customization

### Colors

Edit `app/globals.css` to customize the color palette:

```css
:root {
  --purple: #6B00B6;
  --cyan: #00FFFF;
  --black: #0A0A0A;
}
```

### Projects

Edit `app/components/Projects.tsx` to add or modify projects:

```typescript
const projects: Project[] = [
  {
    title: 'Your Project',
    description: 'Project description...',
    tech: ['Tech1', 'Tech2'],
    image: '/images/project.png',
    demo: 'https://demo-link.com', // optional
  },
];
```

## 📦 Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS

### Animation & Effects
- **Framer Motion** - Animation library
- **Lenis** - Smooth scrolling
- **Custom CSS animations** - Gradient and glow effects

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Manual Build

```bash
npm run build
# Output is in .next directory
```

## 📊 Performance Targets

- Lighthouse Performance: ≥95
- Lighthouse Accessibility: ≥95
- Lighthouse Best Practices: ≥95
- Lighthouse SEO: ≥95

## 📝 License

© 2025 Shawn du Preez. All rights reserved.

## 🤝 Contact

- **Email**: [Shawn345dp@gmail.com](mailto:Shawn345dp@gmail.com)
- **GitHub**: [@ShawnDuPreez](https://github.com/ShawnDuPreez)
- **LinkedIn**: [Shawn du Preez](https://www.linkedin.com/in/shawn-du-preez-6228a9284)

---

**Built with ❤️ using Next.js 15, React, Framer Motion, Lenis & Tailwind CSS**
