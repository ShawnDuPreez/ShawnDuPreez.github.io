/*
 * Main JavaScript for Shawn du Preez portfolio.
 *
 * Responsibilities:
 *  - Build the project cards and modals dynamically from a JSON array to
 *    simplify maintenance and avoid clutter in the HTML file.
 *  - Initialise AOS animations with sensible defaults.
 *  - Provide smooth mobile menu toggling and highlight active navigation links
 *    based on scroll position.
 *  - Support copying the contact email address to the clipboard.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  }

  // Dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Copy email to clipboard
  const copyEmailBtn = document.getElementById('copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'Shawn345dp@gmail.com';
      navigator.clipboard
        .writeText(email)
        .then(() => {
          // Visual feedback can be improved later
          copyEmailBtn.classList.add('btn-success');
          copyEmailBtn.classList.remove('btn-outline');
          copyEmailBtn.innerHTML =
            '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4l-2-2-8 8-3-3-8 8L3 22l6-6z"/></svg>';
          setTimeout(() => {
            copyEmailBtn.classList.remove('btn-success');
            copyEmailBtn.classList.add('btn-outline');
            copyEmailBtn.innerHTML =
              '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M2 4h20v16H2V4zm2.4 2v2.72l7.6 5.04 7.6-5.04V6H4.4zm0 10h15.2V9.6l-7.6 5.04L4.4 9.6V16z"/></svg>';
          }, 2000);
        })
        .catch((err) => {
          console.error('Could not copy email: ', err);
        });
    });
  }

  // Define project data. To add or remove projects, edit this array.
  const projects = [
    { id: 'eventease', category: 'Web', title: 'EventEase', description: 'Venue Booking Web App', highlights: ['Dynamic image uploads', 'Double‑booking validation', 'Admin dashboard', 'Role‑based access'], tech: ['Azure Blob/Table/Queue/File', 'ASP.NET Razor Pages', 'EF Core', 'Entra ID'], details: 'Venue booking platform with Azure integration, double‑booking validation, dynamic uploads, admin dashboard and role‑based access.', image: 'assets/img/project-1.png' },
    { id: 'cmcs', category: 'Web', title: 'CMCS', description: 'Contract Monthly Claim System', highlights: ['Lecturer claims', 'Manager approval', 'Validation'], tech: ['ASP.NET MVC', 'EF Core', 'Role‑based access'], details: 'ASP.NET MVC app for lecturer claim submissions and manager approvals with validation, secure workflows and admin dashboards.', image: 'assets/img/project-5.png' },
    { id: 'cmv-framework', category: 'Web', title: 'CMV Framework (Extended)', description: 'Claims framework', highlights: ['Error handling', 'Azure deploy', 'Deletion restrictions'], tech: ['Razor Pages', 'Azure'], details: 'Razor Pages academic claim framework with robust error handling, Azure deployment and safe‑guarded delete rules when bookings exist.', image: 'assets/img/project-1.png' },
    { id: 'agri-energy', category: 'Web', title: 'Agri‑Energy Platform (Prototype)', description: 'Farm ↔ Energy provider concept', highlights: ['UML', 'Mock data', 'Requirements'], tech: ['ASP.NET MVC'], details: 'Conceptual system linking farmers with renewable energy providers. Includes UML, mock data and requirements documentation.', image: 'assets/img/project-1.png' },
    { id: 'proofly', category: 'Mobile', title: 'Proofly – Multi‑Tenant Receipt Scanner', description: 'Receipt OCR with multi‑tenancy', highlights: ['Company isolation', 'ML Kit OCR', 'Analytics dashboards'], tech: ['Kotlin', 'Jetpack Compose', 'Supabase', 'ML Kit'], details: 'Kotlin + Compose app using ML Kit OCR with Supabase backend and company‑isolated multi‑tenancy, dashboards and Google Sheets automations.', image: 'assets/img/project-2.png' },
    { id: 'budgeting', category: 'Mobile', title: 'Budgeting App (Android Kotlin)', description: 'Personal finance with RoomDB', highlights: ['Budget goals', 'Categories', 'Receipt uploads', 'Offline storage'], tech: ['Kotlin', 'Jetpack Compose', 'RoomDB'], details: 'Budgeting app featuring goals, categories and receipt uploads with secure offline storage backed by RoomDB.', image: 'assets/img/project-2.png' },
    { id: 'trailguide', category: 'Mobile', title: 'TrailGuide – Hiking & Trail Companion', description: 'Offline maps + GPS + weather', highlights: ['Offline maps', 'GPS + elevation', 'Weather', 'AI route parsing'], tech: ['Kotlin', 'Jetpack Compose', 'Supabase'], details: 'Android hiking companion with auth, offline maps, GPS/elevation, weather integration and AI‑assisted route parsing.', image: 'assets/img/project-4.png' },
    { id: 'skillsync', category: 'Mobile', title: 'SkillSync – Personal Development Tracker', description: 'Skills, goals and reports', highlights: ['Skills logging', 'Goal tracking', 'Dashboards', 'Progress reports'], tech: ['React Native (Expo)', 'Supabase', 'Tally'], details: 'React Native/Expo app for skill logging and goals with Supabase backend, Tally automations, dashboards and CI/CD.', image: 'assets/img/project-3.png' },
    { id: 'forms-sheets', category: 'Automation', title: 'Google Forms → Sheets Pipelines', description: 'Apps Script data pipelines', highlights: ['JSON parsing', 'Dashboards', 'Summary scoring'], tech: ['Apps Script', 'Google Forms', 'Google Sheets'], details: 'Apps Script pipelines parsing JSON payloads into Sheets with automated dashboards and summary scoring.', image: 'assets/img/project-3.png' },
    { id: 'survey-automation', category: 'Automation', title: 'Survey Automation Framework', description: 'MBTI automation for RiseCoaching', highlights: ['Tally.so forms', 'Validation', 'Respondent tracking'], tech: ['Tally', 'Apps Script', 'Supabase'], details: 'Survey automation using Tally.so and Apps Script with validation, tracking and categorized scoring.', image: 'assets/img/project-3.png' },
    { id: 'receipt-pipeline', category: 'Automation', title: 'Receipt Data Processing Pipeline', description: 'OCR → structured finance data', highlights: ['Supabase', 'Apps Script', 'Sheets'], tech: ['Supabase', 'Apps Script', 'Google Sheets'], details: 'Pipeline converting OCR data into structured transactions for finance teams using Supabase and Google tooling.', image: 'assets/img/project-3.png' },
    { id: 'ml-cybersec', category: 'Research', title: 'Machine Learning in Cybersecurity', description: 'Research & literature review', highlights: ['Anomaly detection', 'Threat detection', 'IEEE style'], tech: ['Python (research)', 'Academic writing'], details: 'Formal literature review on anomaly and threat detection with ML written to IEEE standards.', image: 'assets/img/project-4.png' },
    { id: 'research-cloud', category: 'Research', title: 'Research: Cloud‑Integrated Systems', description: 'Azure + Supabase exploration', highlights: ['Cloud integration', 'Modern architectures'], tech: ['Azure', 'Supabase'], details: 'Academic exploration of Azure and Supabase integration patterns in modern applications.', image: 'assets/img/project-4.png' },
    { id: 'devsecops', category: 'DevOps', title: 'DevSecOps CI/CD Pipeline', description: 'Automated builds, tests and scans', highlights: ['GitHub Actions', 'CircleCI', 'SonarCloud', 'Expo build checks'], tech: ['GitHub Actions', 'CircleCI', 'SonarCloud', 'Node.js'], details: 'CI/CD pipelines with version pinning, static analysis and mobile build validations; HTTPS demo with HSTS and redirects.', image: 'assets/img/project-4.png' },
    { id: 'api-autowake', category: 'DevOps', title: 'API Auto‑Wake System', description: 'Keep‑alive pings for demos', highlights: ['Android pings', 'Render API keep‑alive'], tech: ['Android', 'Render'], details: 'TrailGuide companion feature that periodically wakes a Render‑hosted API to avoid cold starts during demos.', image: 'assets/img/project-4.png' },
    { id: 'portfolio-site', category: 'Design', title: 'Personal Portfolio Website', description: 'Animated single‑page site', highlights: ['Tailwind', 'DaisyUI', 'AOS', 'Purple/black/cyan theme'], tech: ['HTML', 'CSS', 'JavaScript', 'Tailwind', 'DaisyUI', 'AOS'], details: 'This site: modern animations, theme toggle, responsive design and dynamic project rendering.', image: 'assets/img/project-5.png' },
    { id: 'github-readme', category: 'Design', title: 'GitHub Profile README', description: 'Profile branding & summary', highlights: ['Projects overview', 'Tech stack', 'Contact links'], tech: ['Markdown', 'GitHub'], details: 'A polished GitHub README highlighting projects, stack and contact details.', image: 'assets/img/project-5.png' },
    { id: 'canva-cv', category: 'Design', title: 'Canva CV / Resume', description: 'One‑page modern CV', highlights: ['Purple/black/cyan', 'ATS‑friendly'], tech: ['Canva', 'Design'], details: 'Modern one‑pager resume aligned to portfolio branding.', image: 'assets/img/project-5.png' },
    { id: 'mbti-dashboards', category: 'Prototypes', title: 'Thinking Style & MBTI Dashboards', description: 'Automated scoring + breakdowns', highlights: ['Apps Script', 'Automation'], tech: ['Apps Script', 'Sheets'], details: 'Dashboards that compute and visualise MBTI style scoring automatically.', image: 'assets/img/project-5.png' },
    { id: 'forms-career', category: 'Prototypes', title: 'Forms + Career Field Tracker', description: '1→many forms with automations', highlights: ['Linked scripts', 'Data integration'], tech: ['Forms', 'Apps Script', 'Sheets'], details: 'Integrated forms system with linked automation scripts for career field tracking.', image: 'assets/img/project-5.png' },
    { id: 'academic-prototypes', category: 'Prototypes', title: 'Academic System Prototypes', description: 'UML + mock‑data systems', highlights: ['Requirements practice', 'MVC prototypes'], tech: ['ASP.NET MVC'], details: 'Mock data systems used for requirements elicitation and UML practice.', image: 'assets/img/project-5.png' },
  ];

  // Build project cards with filtering
  const grid = document.getElementById('projects-grid');

  function buildCard(proj, index) {
    // Card container with enhanced styling
    const card = document.createElement('div');
    card.className =
      'card bg-base-100 shadow-xl group relative overflow-hidden';
    card.style.cssText = 'border-radius: 1.5rem; border: 1px solid rgba(106, 0, 255, 0.1);';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', index * 100);

    // Image with overlay effect
    const figure = document.createElement('figure');
    figure.className = 'relative overflow-hidden';
    figure.style.height = '200px';
    
    const img = document.createElement('img');
    img.src = proj.image;
    img.alt = `${proj.title} image`;
    img.className = 'object-cover w-full h-full group-hover:scale-110 transition-transform duration-500';
    
    // Gradient overlay
    const overlay = document.createElement('div');
    overlay.className = 'absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300';
    
    figure.appendChild(img);
    figure.appendChild(overlay);
    card.appendChild(figure);

    // Card body
    const body = document.createElement('div');
    body.className = 'card-body';
    const h3 = document.createElement('h3');
    h3.className = 'card-title';
    h3.textContent = proj.title;
    body.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = proj.description;
    body.appendChild(p);

    // Highlights list
    const ul = document.createElement('ul');
    ul.className = 'mt-2 list-disc list-inside text-sm';
    proj.highlights.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });
    body.appendChild(ul);

    // Tech tags
    const tagsDiv = document.createElement('div');
    tagsDiv.className = 'flex flex-wrap gap-2 mt-3';
    proj.tech.forEach((tag) => {
      const span = document.createElement('span');
      span.className = 'badge badge-outline';
      span.style.cssText = 'border-color: rgba(106, 0, 255, 0.3); color: var(--brand-purple);';
      span.textContent = tag;
      tagsDiv.appendChild(span);
    });
    body.appendChild(tagsDiv);

    card.appendChild(body);
    grid.appendChild(card);
  }

  function renderProjects(filter = 'All') {
    grid.innerHTML = '';
    const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
    list.forEach((proj, index) => buildCard(proj, index));
    if (window.AOS) {
      // ensure reflow after DOM injection
      setTimeout(() => (AOS.refreshHard ? AOS.refreshHard() : AOS.refresh()), 0);
    }
  }

  // Initial render
  renderProjects(localStorage.getItem('projectFilter') || 'All');

  // Filter bar listeners
  const filterBar = document.getElementById('projects-filters');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('button[data-filter]');
      if (!btn) return;
      const filter = btn.getAttribute('data-filter');
      localStorage.setItem('projectFilter', filter);
      // update button styles
      filterBar.querySelectorAll('button[data-filter]').forEach((b) => {
        b.classList.remove('btn-primary');
        b.classList.add('btn-outline');
      });
      btn.classList.remove('btn-outline');
      btn.classList.add('btn-primary');
      renderProjects(filter);
    });
    // set initial active button
    const initial = localStorage.getItem('projectFilter') || 'All';
    const initBtn = filterBar.querySelector(`button[data-filter="${initial}"]`);
    if (initBtn) {
      initBtn.classList.remove('btn-outline');
      initBtn.classList.add('btn-primary');
    }
  }

  // Initialise AOS
  if (window.AOS) {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 0,
    });
  }
  
  // Add scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #6a00ff 0%, #00d4ff 100%); z-index: 9999; transition: width 0.1s ease;';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // Nav highlighting based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('header nav a');
  function activateNav() {
    let idx = sections.length;
    while (--idx >= 0 && window.scrollY + 80 < sections[idx].offsetTop) {
      /* intentionally empty */
    }
    navLinks.forEach((link) => link.classList.remove('btn-active'));
    if (navLinks[idx]) {
      navLinks[idx].classList.add('btn-active');
    }
  }
  activateNav();
  window.addEventListener('scroll', activateNav);
});