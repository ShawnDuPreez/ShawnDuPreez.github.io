// All HTML components as template strings for reliable loading

export const navbar = `
<header class="navbar fixed top-0 left-0 right-0 z-50 bg-base-100/95 backdrop-blur-xl shadow-lg border-b border-base-300/50">
  <div class="container mx-auto px-4 flex justify-between items-center">
    <div class="flex items-center">
      <a href="#" class="text-xl font-bold gradient-text">Shawn du Preez</a>
    </div>
    <div class="flex items-center space-x-4">
      <nav class="hidden md:flex space-x-4">
        <a href="#about" class="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary">About</a>
        <a href="#projects" class="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary">Projects</a>
        <a href="#tech" class="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary">Tech</a>
        <a href="#resume" class="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary">Resume</a>
        <a href="#contact" class="btn btn-ghost btn-sm hover:bg-primary/10 hover:text-primary">Contact</a>
      </nav>
      <button id="theme-btn" class="btn btn-ghost btn-sm" aria-label="Open theme selector">
        🎨 Theme
      </button>
      <div class="md:hidden">
        <button id="menu-btn" class="btn btn-ghost" aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div id="mobile-menu" class="hidden md:hidden bg-base-100">
    <nav class="flex flex-col items-center py-2 space-y-2">
      <a href="#about" class="btn btn-ghost btn-sm w-full">About</a>
      <a href="#projects" class="btn btn-ghost btn-sm w-full">Projects</a>
      <a href="#tech" class="btn btn-ghost btn-sm w-full">Tech</a>
      <a href="#resume" class="btn btn-ghost btn-sm w-full">Resume</a>
      <a href="#contact" class="btn btn-ghost btn-sm w-full">Contact</a>
    </nav>
  </div>
</header>

<div id="theme-widget" class="fixed top-20 right-4 z-[9999] hidden animate-fade-in">
  <div class="glass-card rounded-2xl shadow-2xl p-6 w-[440px] max-h-[600px] overflow-hidden">
    <div class="flex items-center justify-between mb-5 pb-4 border-b border-base-300/50">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
          <span class="text-xl">🎨</span>
        </div>
        <h3 class="font-bold text-xl">Choose Theme</h3>
      </div>
      <button id="close-theme-widget" class="btn btn-ghost btn-sm btn-circle hover:bg-base-200 hover:rotate-90 transition-all duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <div class="overflow-y-auto max-h-[480px] pr-2 custom-scrollbar">
      <div class="grid grid-cols-2 gap-4" id="theme-selector"></div>
    </div>
  </div>
</div>
`;

export const hero = `
<section id="hero" class="hero min-h-screen relative overflow-hidden">
  <div class="hero-content flex-col lg:flex-row-reverse relative z-10 max-w-6xl mx-auto px-4">
    <div class="lg:w-1/3 flex justify-center mb-8 lg:mb-0" data-aos="zoom-in">
      <img src="assets/img/avatar.png" class="float-animation rounded-full shadow-2xl" style="max-width: 300px; border: 4px solid rgba(255, 255, 255, 0.3);" alt="Shawn du Preez" />
    </div>
    <div class="lg:w-2/3 text-center lg:text-left">
      <div class="inline-block mb-4" data-aos="fade-down">
        <span class="badge badge-lg glass-card text-white font-bold px-6 py-4 text-base">
          👋 Welcome to my portfolio
        </span>
      </div>
      <h1 class="text-5xl lg:text-7xl font-black mb-6 leading-tight" data-aos="fade-up" data-aos-delay="100">
        <span class="text-white drop-shadow-2xl">BSc CS & IT student</span>
        <span class="block gradient-text mt-2">building full-stack apps</span>
      </h1>
      <p class="text-xl lg:text-2xl mb-8 text-white/95 max-w-2xl font-medium drop-shadow-lg" data-aos="fade-up" data-aos-delay="200">
        I ship secure, scalable features across ASP.NET + Azure and Kotlin/React Native, with clean UIs and automation.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start" data-aos="fade-up" data-aos-delay="300">
        <a href="#projects" class="btn btn-lg btn-primary shadow-xl hover:scale-105 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          View Projects
        </a>
        <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-lg glass-card text-white border-2 border-white/30 hover:border-white/50 shadow-xl hover:scale-105 transition-all">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
          </svg>
          Download Resume
        </a>
      </div>
      <div class="stats shadow-2xl glass-card stats-vertical lg:stats-horizontal" data-aos="fade-up" data-aos-delay="400">
        <div class="stat place-items-center">
          <div class="stat-title text-white/80 font-bold">Projects</div>
          <div class="stat-value text-4xl gradient-text">20+</div>
          <div class="stat-desc text-white/70">Full-stack apps</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title text-white/80 font-bold">Technologies</div>
          <div class="stat-value text-4xl gradient-text">15+</div>
          <div class="stat-desc text-white/70">Frameworks & tools</div>
        </div>
        <div class="stat place-items-center">
          <div class="stat-title text-white/80 font-bold">Passion</div>
          <div class="stat-value text-4xl gradient-text">∞</div>
          <div class="stat-desc text-white/70">Always learning</div>
        </div>
      </div>
    </div>
  </div>
  <div id="particles" class="absolute inset-0 overflow-hidden pointer-events-none"></div>
</section>
`;

export const about = `
<section id="about" class="py-24 relative overflow-hidden">
  <div class="container mx-auto px-4 max-w-6xl relative z-10">
    <div class="text-center mb-16" data-aos="fade-up">
      <h2 class="text-5xl lg:text-6xl font-black mb-4 gradient-text">About Me</h2>
      <div class="w-24 h-2 gradient-bg mx-auto rounded-full"></div>
    </div>
    <div class="grid lg:grid-cols-2 gap-12">
      <div class="space-y-6" data-aos="fade-right">
        <div class="card glass-card shadow-xl hover:shadow-2xl transition-all">
          <div class="card-body">
            <p class="text-lg leading-relaxed">
              I'm a <span class="font-black gradient-text">BSc Computer Science & IT student</span> at The Independent Institute of Education in Pretoria, South Africa, passionate about building robust, data-driven applications.
            </p>
          </div>
        </div>
        <div class="card glass-card shadow-xl hover:shadow-2xl transition-all">
          <div class="card-body">
            <p class="text-lg leading-relaxed">
              My focus is on backend development with <span class="badge badge-primary">ASP.NET Core</span>, cloud integration via <span class="badge badge-secondary">Azure</span>, and mobile apps with <span class="badge badge-accent">Kotlin</span> and <span class="badge badge-info">React Native</span>.
            </p>
          </div>
        </div>
        <div class="alert alert-info shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span class="font-bold">Clean code, secure authentication, and automated workflows are my passion!</span>
        </div>
      </div>
      <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
        <div class="card bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-xl hover-lift cursor-pointer">
          <div class="card-body items-center text-center">
            <div class="text-5xl mb-3">💻</div>
            <h3 class="card-title text-xl">Full-Stack</h3>
            <p class="text-sm opacity-90">ASP.NET Core<br/>Razor Pages<br/>MVC</p>
          </div>
        </div>
        <div class="card bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-xl hover-lift cursor-pointer">
          <div class="card-body items-center text-center">
            <div class="text-5xl mb-3">☁️</div>
            <h3 class="card-title text-xl">Cloud</h3>
            <p class="text-sm opacity-90">Azure<br/>Supabase<br/>Serverless</p>
          </div>
        </div>
        <div class="card bg-gradient-to-br from-pink-500 to-rose-600 text-white shadow-xl hover-lift cursor-pointer">
          <div class="card-body items-center text-center">
            <div class="text-5xl mb-3">📱</div>
            <h3 class="card-title text-xl">Mobile</h3>
            <p class="text-sm opacity-90">Kotlin<br/>Jetpack Compose<br/>React Native</p>
          </div>
        </div>
        <div class="card bg-gradient-to-br from-orange-500 to-amber-600 text-white shadow-xl hover-lift cursor-pointer">
          <div class="card-body items-center text-center">
            <div class="text-5xl mb-3">🔧</div>
            <h3 class="card-title text-xl">DevOps</h3>
            <p class="text-sm opacity-90">CI/CD<br/>GitHub Actions<br/>Security</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

export const projects = `
<div class="py-20 bg-base-200 relative overflow-hidden">
  <div class="container mx-auto px-4 max-w-7xl">
    <div class="text-center mb-16">
      <h2 class="text-5xl font-bold mb-4 gradient-text" data-aos="fade-up">Featured Projects</h2>
      <p class="text-lg text-base-content/70" data-aos="fade-up" data-aos-delay="100">
        A selection of full-stack web and mobile applications
      </p>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${[
        { title: 'Proofly', desc: 'Multi-tenant OCR receipt scanner with company-scoped data, OpenAI parsing, and fullscreen draft view.', tech: ['Kotlin', 'Jetpack Compose', 'Supabase', 'ML Kit'], img: 'project-2.png', delay: 100 },
        { title: 'RiseCoaching Forms', desc: 'Multi-form intake system with Apps Script routing and automated Sheets functions.', tech: ['Apps Script', 'Google Sheets', 'Tally'], img: 'project-3.png', delay: 200 },
        { title: 'EventEase', desc: 'Azure-backed venue booking system with ASP.NET Razor Pages, Azure SQL, Blob Storage, and Entra ID.', tech: ['ASP.NET', 'Azure', 'Entra ID'], img: 'project-1.png', delay: 300 },
        { title: 'TrailGuide', desc: 'Android hiking companion with Kotlin, Jetpack Compose, Supabase backend, and offline-first architecture.', tech: ['Kotlin', 'Supabase', 'Offline-first'], img: 'project-4.png', delay: 400 },
        { title: 'SkillSync', desc: 'Skills and goals tracker built with React Native/Expo, Supabase backend, and Tally integration.', tech: ['React Native', 'Expo', 'Supabase'], img: 'project-3.png', delay: 500 },
        { title: 'CMCS', desc: 'Contract Monthly Claim System - ASP.NET Core MVC app for lecturer claims and manager approvals.', tech: ['ASP.NET MVC', 'EF Core', 'Role-based'], img: 'project-5.png', delay: 600 }
      ].map(p => `
        <div class="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="${p.delay}">
          <figure class="relative overflow-hidden" style="height: 200px;">
            <img src="/assets/img/${p.img}" alt="${p.title}" class="object-cover w-full h-full hover:scale-110 transition-transform duration-500" loading="lazy" />
          </figure>
          <div class="card-body">
            <h3 class="card-title">${p.title}</h3>
            <p class="text-sm">${p.desc}</p>
            <div class="flex flex-wrap gap-2 mt-2">
              ${p.tech.map(t => `<span class="badge badge-outline badge-sm" style="border-color: rgba(106, 0, 255, 0.3); color: var(--brand-purple);">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</div>
`;

export const tech = `
<div class="py-20 bg-base-100 relative">
  <div class="container mx-auto px-4 max-w-6xl">
    <div class="text-center mb-16">
      <h2 class="text-5xl font-bold mb-4 gradient-text" data-aos="fade-up">Tech Stack</h2>
      <p class="text-lg text-base-content/70" data-aos="fade-up" data-aos-delay="100">
        Technologies I work with daily
      </p>
    </div>
    <div class="space-y-8">
      ${[
        { title: 'Languages', items: ['C#', 'Kotlin', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'], color: 'primary', delay: 100 },
        { title: 'Frameworks & Libraries', items: ['ASP.NET Core', 'Razor Pages', 'MVC', 'Jetpack Compose', 'React Native', 'Expo', 'EF Core', 'Tailwind CSS', 'DaisyUI'], color: 'secondary', delay: 200 },
        { title: 'Cloud & Databases', items: ['Azure (Blob, Table, Queue, Files)', 'Azure Functions', 'Entra ID', 'SQL Server', 'Supabase', 'RoomDB', 'Google Sheets'], color: 'accent', delay: 300 },
        { title: 'DevOps & Tools', items: ['GitHub Actions', 'CircleCI', 'SonarCloud', 'Git', 'VS Code', 'Android Studio', 'Visual Studio', 'Postman'], color: 'neutral', delay: 400 },
        { title: 'Data & Productivity', items: ['Office 365', 'Excel', 'Word', 'PowerPoint', 'Apps Script'], color: 'info', delay: 500 }
      ].map(cat => `
        <div data-aos="fade-up" data-aos-delay="${cat.delay}">
          <h3 class="text-2xl font-bold mb-4">${cat.title}</h3>
          <div class="flex flex-wrap gap-3">
            ${cat.items.map(item => `<span class="badge badge-lg badge-${cat.color}">${item}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</div>
`;

export const resume = `
<div class="py-20 bg-base-200 relative overflow-hidden">
  <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(106, 0, 255, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%); pointer-events: none;"></div>
  <div class="container mx-auto px-4 max-w-5xl relative z-10">
    <div class="text-center mb-12">
      <div class="avatar mb-6" data-aos="zoom-in">
        <div class="w-32 rounded-full ring ring-primary ring-offset-base-200 ring-offset-2">
          <img src="/assets/img/avatar.png" alt="Shawn du Preez" loading="lazy" />
        </div>
      </div>
      <h2 class="text-5xl font-bold mb-2 gradient-text resume-name" data-aos="fade-up">Shawn du Preez</h2>
      <p class="text-xl text-base-content/70 resume-subtitle" data-aos="fade-up" data-aos-delay="100">
        Full-Stack Developer | Pretoria, South Africa
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-6 mb-12">
      ${[
        { title: 'Backend', color: 'primary', items: ['ASP.NET Core (MVC, Razor Pages)', 'Entity Framework Core', 'Azure Services Integration', 'RESTful API Design', 'Authentication & Authorization'], delay: 100 },
        { title: 'Mobile', color: 'secondary', items: ['Kotlin & Jetpack Compose', 'React Native & Expo', 'Offline-First Architecture', 'ML Kit & OCR', 'Local & Cloud Storage'], delay: 200 },
        { title: 'Cloud/DevOps', color: 'accent', items: ['Azure (Blob, Table, Queue, Functions)', 'CI/CD (GitHub Actions, CircleCI)', 'SonarCloud Quality Gates', 'Supabase Backend', 'Security Best Practices'], delay: 300 }
      ].map(cat => `
        <div class="card bg-base-100 shadow-xl" data-aos="fade-up" data-aos-delay="${cat.delay}">
          <div class="card-body">
            <h3 class="card-title text-${cat.color}">${cat.title}</h3>
            <ul class="list-disc list-inside space-y-2 text-sm">
              ${cat.items.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="text-center" data-aos="fade-up" data-aos-delay="400">
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
        Download Full Resume
      </a>
    </div>
  </div>
</div>
`;

export const contact = `
<div class="py-20 bg-base-100 relative">
  <div class="container mx-auto px-4 max-w-4xl">
    <div class="text-center mb-12">
      <h2 class="text-5xl font-bold mb-4 gradient-text" data-aos="fade-up">Get In Touch</h2>
      <p class="text-lg text-base-content/70" data-aos="fade-up" data-aos-delay="100">
        Let's build something amazing together
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap" data-aos="fade-up" data-aos-delay="200">
      <button id="copy-email" class="btn btn-outline btn-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        Copy Email
      </button>
      <a href="https://github.com/ShawnDuPreez" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/shawn-du-preez-6228a9284" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-lg">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        LinkedIn
      </a>
    </div>
  </div>
</div>
`;

export const footer = `
<div class="py-8 bg-base-200 text-center relative overflow-hidden">
  <div style="position: absolute; inset: 0; background: linear-gradient(135deg, rgba(106, 0, 255, 0.05) 0%, rgba(0, 212, 255, 0.05) 100%); pointer-events: none;"></div>
  <div class="relative z-10">
    <p class="text-base-content/70 mb-2">
      Built with ❤️ using Vite, Tailwind CSS, DaisyUI & AOS
    </p>
    <p class="text-base-content/50">
      © <span id="year">2025</span> Shawn du Preez. All rights reserved.
    </p>
  </div>
</div>
`;

