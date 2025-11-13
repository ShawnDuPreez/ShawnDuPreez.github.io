// Projects data
const projectsData = [
  {
    title: "EventEase",
    description: "UI/UX & Full-Stack Academic Project – Responsive booking interface with Razor Pages, Azure SQL & Blob Storage. Implemented form validation, user feedback flows and venue management.",
    tags: ["Web", "Design"],
    image: "assets/img/project-1.png",
    github: "#",
    demo: "#"
  },
  {
    title: "Proofly",
    description: "OCR Receipt Scanning App – Mobile UI flows for scanning and processing receipts with ML Kit OCR. Supabase authentication, multi-tenant database structure and responsive expense dashboards.",
    tags: ["Mobile", "Prototypes"],
    image: "assets/img/project-2.png",
    github: "#",
    demo: "#"
  },
  {
    title: "TrailGuide",
    description: "Hiking Companion App – Mobile UI with Jetpack Compose. GPS integration, route planning, offline maps and weather data. Accessible design for real-time outdoor usage.",
    tags: ["Mobile", "Design"],
    image: "assets/img/project-3.png",
    github: "#",
    demo: "#"
  },
  {
    title: "RiseCoaching Dashboard",
    description: "Client Project – User dashboards for personality and career mapping assessments. Clean interface for results, filtering and summaries. Automated data transformation with Google Apps Script & Supabase.",
    tags: ["Automation", "Web"],
    image: "assets/img/project-4.png",
    github: "#",
    demo: "#"
  },
  {
    title: "Portfolio Website",
    description: "UI/UX & Front-End Project – Responsive personal portfolio with component-based layout and modern styling. Converted Figma concepts into functional HTML/CSS/JS with focus on accessibility.",
    tags: ["Design", "Web"],
    image: "assets/img/project-5.png",
    github: "https://github.com/ShawnDuPreez/ShawnDuPreez.github.io",
    demo: "https://shawndupreez.github.io"
  }
];

// Render projects
function renderProjects(filter = 'All') {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(filter));
  
  filteredProjects.forEach((project, index) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100).toString());
    
    card.innerHTML = `
      <div class="aspect-video overflow-hidden">
        <img 
          src="${project.image}" 
          alt="${project.title}"
          class="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div class="p-6">
        <h3 class="text-2xl font-bold mb-3">${project.title}</h3>
        <p class="opacity-70 mb-4">${project.description}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          ${project.tags.map(tag => `
            <span class="badge badge-sm" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none;">
              ${tag}
            </span>
          `).join('')}
        </div>
        <div class="flex gap-3">
          <a href="${project.github}" class="btn btn-sm btn-outline flex-1" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
          <a href="${project.demo}" class="btn btn-sm btn-primary flex-1" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            Demo
          </a>
        </div>
      </div>
    `;
    
    grid.appendChild(card);
  });
  
  // Refresh AOS for new elements
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

// Initialize filter buttons
function initFilters() {
  const buttons = document.querySelectorAll('#projects-filters button');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('btn-active'));
      // Add active class to clicked button
      button.classList.add('btn-active');
      
      // Get filter value and render projects
      const filter = button.getAttribute('data-filter');
      renderProjects(filter);
    });
  });
  
  // Set first button as active
  if (buttons.length > 0) {
    buttons[0].classList.add('btn-active');
  }
}

// Email copy functionality
function initEmailCopy() {
  const copyBtn = document.getElementById('copy-email');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText('Shawn345dp@gmail.com').then(() => {
        const originalText = copyBtn.querySelector('p').textContent;
        copyBtn.querySelector('p').textContent = 'Copied!';
        setTimeout(() => {
          copyBtn.querySelector('p').textContent = originalText;
        }, 2000);
      });
    });
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const mobileMenu = document.querySelector('[data-mobile-menu]');
  
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Set current year in footer
function setYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  initFilters();
  initEmailCopy();
  initMobileMenu();
  setYear();
});

