# Shawn du Preez - Portfolio

Modern, modular portfolio website built with **Vite**, **Tailwind CSS**, **DaisyUI**, and **AOS animations**.

🌐 **Live Site**: [shawndupreez.github.io](https://shawndupreez.github.io)

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will open at `http://localhost:5173`

### Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

Build output goes to `/dist` directory.

---

## 📁 Project Structure

```
/
├── index.html              # Main HTML entry point
├── src/
│   ├── main.js            # Main JavaScript entry
│   ├── theme.js           # Theme switcher logic
│   ├── aos.js             # AOS animations setup
│   ├── styles/
│   │   ├── tailwind.css   # Tailwind directives
│   │   └── brand.css      # Custom brand styles
│   ├── components/
│   │   ├── navbar.html    # Navigation bar
│   │   ├── hero.html      # Hero section
│   │   ├── about.html     # About section
│   │   ├── projects.html  # Projects grid
│   │   ├── tech.html      # Tech stack
│   │   ├── resume.html    # Resume section
│   │   ├── contact.html   # Contact section
│   │   └── footer.html    # Footer
│   └── projects/          # Case study pages (future)
├── public/
│   ├── robots.txt         # SEO robots file
│   ├── sitemap.xml        # Sitemap for search engines
│   └── manifest.webmanifest # PWA manifest
├── assets/
│   └── img/               # Images (avatar, projects, hero)
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind + DaisyUI config
├── postcss.config.js      # PostCSS config
└── package.json           # Dependencies & scripts
```

---

## 🎨 Features

- ✅ **32 DaisyUI Themes** - Switch between light, dark, and custom themes
- ✅ **Modular Components** - Clean HTML components loaded dynamically
- ✅ **AOS Animations** - Smooth scroll-triggered animations
- ✅ **Responsive Design** - Mobile-first, works on all devices
- ✅ **Performance Optimized** - Fast loading with Vite bundling
- ✅ **SEO Ready** - Meta tags, sitemap, robots.txt
- ✅ **Beautiful Gradients** - Animated hero section with particles
- ✅ **Theme Persistence** - Your theme choice is saved

---

## 🛠️ Tech Stack

### Core
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS
- **DaisyUI** - Component library
- **AOS** - Animate On Scroll

### Languages
- HTML5
- CSS3
- JavaScript (ES6+)

### Cloud & Deployment
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD (optional)

---

## 🎯 Adding a New Project

1. Add project image to `/assets/img/`
2. Edit `/src/components/projects.html`:

```html
<div class="card bg-base-100 shadow-xl" data-aos="fade-up">
  <figure>
    <img src="/assets/img/your-project.png" alt="Your Project" />
  </figure>
  <div class="card-body">
    <h3 class="card-title">Your Project</h3>
    <p>Project description...</p>
    <div class="flex flex-wrap gap-2 mt-2">
      <span class="badge badge-outline">Tech 1</span>
      <span class="badge badge-outline">Tech 2</span>
    </div>
  </div>
</div>
```

3. Rebuild: `npm run build`

---

## 🌈 Customizing Themes

Edit `tailwind.config.js` to modify available themes:

```javascript
daisyui: {
  themes: [
    "light",
    "dark",
    "synthwave",
    // Add more DaisyUI themes
  ],
}
```

Custom brand colors are in `/src/styles/brand.css`:

```css
:root {
  --brand-purple: #6a00ff;
  --brand-cyan: #00d4ff;
  /* ... */
}
```

---

## 🔍 Running Lighthouse

1. Build production version: `npm run build`
2. Preview: `npm run preview`
3. Open Chrome DevTools (F12)
4. Go to **Lighthouse** tab
5. Click **Generate report**

**Target Scores**:
- Performance: ≥95
- Accessibility: ≥95
- Best Practices: ≥95
- SEO: ≥95

---

## 📦 Deployment

### GitHub Pages (User Site)

This repo is configured for GitHub Pages user site (`username.github.io`).

1. Build: `npm run build`
2. Push `dist/` contents to `main` branch
3. GitHub Actions (if configured) handles deployment automatically

Or manually:
```bash
npm run build
# Push dist/ to gh-pages branch
```

---

## 📝 Scripts

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |

---

## 📄 License

© 2025 Shawn du Preez. All rights reserved.

---

## 🤝 Contact

- **Email**: [Shawn345dp@gmail.com](mailto:Shawn345dp@gmail.com)
- **GitHub**: [@ShawnDuPreez](https://github.com/ShawnDuPreez)
- **LinkedIn**: [Shawn du Preez](https://www.linkedin.com/in/shawn-du-preez-6228a9284)

---

**Built with ❤️ using Vite, Tailwind CSS, DaisyUI & AOS**

