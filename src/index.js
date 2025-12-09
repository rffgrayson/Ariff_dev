import './styles.css';
import { renderHome, initHome } from './pages/home.js';
import { renderProjects } from './pages/projects.js';
import { renderResources } from './pages/resources.js';

// Store cleanup function for home page
let homeCleanup = null;

// Router configuration
const routes = {
  home: renderHome,
  projects: renderProjects,
  resources: renderResources,
};

// Navigate to a specific page
function navigateTo(page) {
  const app = document.getElementById('app-content');
  
  // If there's app-content element, we're using the new structure
  if (!app) {
    console.error('app-content element not found. Make sure your HTML has <div id="app-content"></div>');
    return;
  }
  
  // Cleanup previous page (especially home page event listeners)
  if (homeCleanup) {
    homeCleanup();
    homeCleanup = null;
  }
  
  // Get the render function for the page
  const render = routes[page] || routes['home'];
  
  // Render the new page
  app.innerHTML = render();
  
  // Initialize home page scripts if on home
  if (page === 'home') {
    homeCleanup = initHome();
  }
  
  // Scroll to top on page change
  window.scrollTo(0, 0);
  
  // Update active nav link
  updateActiveNavLink(page);
}

// Update active navigation link styling
function updateActiveNavLink(currentPage) {
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href').slice(1); // Remove #
    if (href === currentPage) {
      link.style.color = 'var(--cyan)';
      link.style.fontWeight = 'bold';
    } else {
      link.style.color = 'var(--comment)';
      link.style.fontWeight = 'normal';
    }
  });
}

// Initialize the router when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('nav');
  
  if (!nav) {
    console.error('Navigation element not found');
    return;
  }
  
  // Handle navigation clicks
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      e.preventDefault();
      const page = e.target.getAttribute('href').slice(1); // Remove #
      navigateTo(page);
      
      // Update URL without page reload
      window.history.pushState({ page }, '', `#${page}`);
    }
  });

  // Handle browser back/forward buttons
  window.addEventListener('popstate', (_e) => {
    const page = window.location.hash.slice(1) || 'home';
    navigateTo(page);
  });

  // Initial page load
  const initialPage = window.location.hash.slice(1) || 'home';
  navigateTo(initialPage);
});