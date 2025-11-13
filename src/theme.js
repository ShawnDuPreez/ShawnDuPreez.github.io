// Theme Toggle with DaisyUI + localStorage

const AVAILABLE_THEMES = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
  'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business',
  'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
];

export function initThemeToggle() {
  const btn = document.querySelector('[data-theme-toggle]');
  const widget = document.getElementById('theme-widget');
  const closeBtn = document.getElementById('close-theme-widget');
  const themeSelector = document.getElementById('theme-selector');
  const root = document.documentElement;
  
  // Apply saved theme or default
  const saved = localStorage.getItem('theme') || 'winter';
  root.setAttribute('data-theme', saved);
  
  // Build theme tiles dynamically
  if (themeSelector) {
    themeSelector.innerHTML = AVAILABLE_THEMES.map(name => `
      <button class="theme-tile outline outline-2 outline-base-content/20 hover:outline-primary overflow-hidden rounded-xl text-left transition-all hover:scale-[1.02] hover:shadow-lg"
              data-set-theme="${name}" aria-pressed="${name === saved}">
        <div data-theme="${name}" class="bg-base-100 text-base-content w-full cursor-pointer font-sans">
          <div class="flex flex-col gap-3 p-4">
            <div class="flex items-center justify-between gap-2">
              <div class="text-base font-bold capitalize">${name}</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                   viewBox="0 0 24 24" fill="currentColor" class="${name === saved ? '' : 'invisible'} h-5 w-5 shrink-0 text-success">
                <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path>
              </svg>
            </div>
            <div class="flex gap-2 h-10">
              <div class="bg-primary flex-1 rounded-lg"></div>
              <div class="bg-secondary flex-1 rounded-lg"></div>
              <div class="bg-accent flex-1 rounded-lg"></div>
              <div class="bg-neutral flex-1 rounded-lg"></div>
            </div>
          </div>
        </div>
      </button>
    `).join('');
  }
  
  // Set theme function
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update checkmarks
    document.querySelectorAll('[data-set-theme]').forEach(b => {
      const svg = b.querySelector('svg');
      const isActive = b.getAttribute('data-set-theme') === theme;
      if (svg) {
        svg.classList.toggle('invisible', !isActive);
      }
      b.setAttribute('aria-pressed', String(isActive));
    });
  }
  
  // Open/close widget
  if (btn && widget) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      widget.classList.toggle('hidden');
    });
    
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        widget.classList.add('hidden');
      });
    }
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!widget.contains(e.target) && e.target !== btn) {
        widget.classList.add('hidden');
      }
    });
    
    // Prevent widget clicks from closing
    widget.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }
  
  // Theme selection
  document.querySelectorAll('[data-set-theme]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const theme = btn.getAttribute('data-set-theme');
      setTheme(theme);
      if (widget) {
        widget.classList.add('hidden');
      }
    });
  });
}

