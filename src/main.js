import './styles/tailwind.css';
import './styles/brand.css';
import { initAOS } from './aos';
import { initThemeToggle } from './theme';
import * as components from './components';

// Inject components directly
function loadComponents() {
  document.querySelector('#nav').innerHTML = components.navbar;
  document.querySelector('#hero').innerHTML = components.hero;
  document.querySelector('#about').innerHTML = components.about;
  document.querySelector('#projects').innerHTML = components.projects;
  document.querySelector('#tech').innerHTML = components.tech;
  document.querySelector('#resume').innerHTML = components.resume;
  document.querySelector('#contact').innerHTML = components.contact;
  document.querySelector('#footer').innerHTML = components.footer;
}

// Bootstrap the app
function boot() {
  // Load all components
  loadComponents();
  
  // Initialize interactive features
  initThemeToggle();
  initAOS();
  
  // Copy email functionality
  const copyEmailBtn = document.getElementById('copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'Shawn345dp@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        copyEmailBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11l3 3L22 4l-2-2-8 8-3-3-8 8L3 22l6-6z"/></svg> Copied!';
        copyEmailBtn.classList.add('btn-success');
        copyEmailBtn.classList.remove('btn-outline');
        setTimeout(() => {
          copyEmailBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>Copy Email';
          copyEmailBtn.classList.remove('btn-success');
          copyEmailBtn.classList.add('btn-outline');
        }, 2000);
      }).catch(err => console.error('Could not copy email:', err));
    });
  }
  
  // Mobile menu toggle
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (mobileMenu) mobileMenu.classList.add('hidden');
        }
      }
    });
  });
  
  // Scroll progress indicator
  const progressBar = document.createElement('div');
  progressBar.style.cssText = 'position: fixed; top: 0; left: 0; height: 3px; background: linear-gradient(90deg, #6a00ff 0%, #00d4ff 100%); z-index: 9999; transition: width 0.1s ease;';
  document.body.appendChild(progressBar);
  
  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
  
  // Dynamic year in footer
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  
  // Create floating particles in hero
  createParticles();
}

// Particle animation for hero
function createParticles() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  
  const particlesContainer = document.createElement('div');
  particlesContainer.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1;';
  
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 20 + 15;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%);
      border-radius: 50%;
      left: ${left}%;
      bottom: -10px;
      animation: floatUp ${duration}s ease-in-out ${delay}s infinite;
      opacity: 0;
    `;
    
    particlesContainer.appendChild(particle);
  }
  
  hero.appendChild(particlesContainer);
  
  // Add animation keyframes
  if (!document.getElementById('particle-animations')) {
    const style = document.createElement('style');
    style.id = 'particle-animations';
    style.textContent = `
      @keyframes floatUp {
        0% {
          transform: translateY(0) translateX(0);
          opacity: 0;
        }
        10% {
          opacity: 0.5;
        }
        90% {
          opacity: 0.5;
        }
        100% {
          transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

// Start the app
boot();
