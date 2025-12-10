import './styles.css';
import { renderBlog, initBlog } from './pages/blog.js';
import { renderCat, initCat } from './pages/cat.js';
import { renderHome, initHome } from './pages/home.js';
import { renderResources } from './pages/resources.js';
import { renderWork, initWork } from './pages/work.js';

// Store cleanup functions
let currentCleanup = null;

// Router
const routes = {
  home: { render: renderHome, init: initHome },
  work: { render: renderWork, init: initWork },  // CHANGED FROM projects
  resources: { render: renderResources, init: null },
  blog: { render: renderBlog, init: initBlog },
  cat: { render: renderCat, init: initCat },
};

function navigateTo(page) {
  const app = document.getElementById('app-content');
  const route = routes[page] || routes['home'];
  
  // Cleanup previous page
  if (currentCleanup) {
    currentCleanup();
    currentCleanup = null;
  }
  
  // Render new page
  app.innerHTML = route.render();
  
  // Initialize page-specific functionality
  if (route.init) {
    const cleanup = route.init();
    if (cleanup && typeof cleanup === 'function') {
      currentCleanup = cleanup;
    }
  }

  // Update active nav link
  updateActiveNav(page);
}

// Update active navigation link
function updateActiveNav(currentPage) {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href').slice(1);
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Navigation event listeners
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const page = e.target.getAttribute('href').slice(1); // Remove #
      navigateTo(page);
      window.history.pushState({}, '', `#${page}`);
    }
  });

  // Handle browser back/forward
  window.addEventListener('popstate', () => {
    const page = window.location.hash.slice(1) || 'home';
    navigateTo(page);
  });

  // Initial load
  const initialPage = window.location.hash.slice(1) || 'home';
  navigateTo(initialPage);
});

const audio = document.getElementById('bgMusic');
const toggle = document.getElementById('musicToggle');
let isPlaying = false;

toggle.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    toggle.classList.remove('playing');
  } else {
    audio.play();
    toggle.classList.add('playing');
  }
  isPlaying = !isPlaying;
});