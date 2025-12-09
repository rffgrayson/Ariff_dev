export function renderBlog() {
  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">blog</h1>
      <p style="color: var(--comment); margin-top: 10px;">thoughts, notes, and random stuff</p>
    </div>

    <div class="blog-container">
      <div class="blog-post">
        <div class="post-header">
          <h2 style="color: var(--yellow);">Building a Portfolio Site</h2>
          <div class="post-meta">
            <span class="post-date">Dec 09, 2025</span>
            <span class="post-separator">•</span>
            <span class="post-tags">
              <span class="tag">webdev</span>
              <span class="tag">javascript</span>
            </span>
          </div>
        </div>
        <div class="post-content">
          <p>Started building this portfolio site from scratch using vanilla JavaScript and Webpack. The goal was to keep it minimal but functional.</p>
          <p>Key features I implemented:</p>
          <ul>
            <li>Client-side routing without page reloads</li>
            <li>GitHub API integration for real-time activity status</li>
            <li>WakaTime API for coding stats</li>
            <li>Mouse tracking for silly stats (because why not)</li>
          </ul>
          <p>The hardest part? Making the ASCII art look good across different screen sizes. Still working on that...</p>
        </div>
        <a href="#" class="read-more">read more →</a>
      </div>

      <div class="blog-post">
        <div class="post-header">
          <h2 style="color: var(--yellow);">Learning The Odin Project</h2>
          <div class="post-meta">
            <span class="post-date">Nov 28, 2025</span>
            <span class="post-separator">•</span>
            <span class="post-tags">
              <span class="tag">learning</span>
              <span class="tag">webdev</span>
            </span>
          </div>
        </div>
        <div class="post-content">
          <p>Been going through The Odin Project curriculum. It's been a great structured path for learning full-stack development.</p>
          <p>What I appreciate most is the emphasis on understanding fundamentals rather than just following tutorials. The projects force you to actually think and problem-solve.</p>
        </div>
        <a href="#" class="read-more">read more →</a>
      </div>

      <div class="blog-post">
        <div class="post-header">
          <h2 style="color: var(--yellow);">First Week at Deloitte</h2>
          <div class="post-meta">
            <span class="post-date">Oct 15, 2024</span>
            <span class="post-separator">•</span>
            <span class="post-tags">
              <span class="tag">work</span>
              <span class="tag">career</span>
            </span>
          </div>
        </div>
        <div class="post-content">
          <p>Started as a software engineer at Deloitte. Mostly working with legacy code and trying not to break production.</p>
          <p>The onboarding process has been smooth, and the team is great. Excited to learn from experienced developers and contribute to real-world projects.</p>
        </div>
        <a href="#" class="read-more">read more →</a>
      </div>

      <div class="blog-post">
        <div class="post-header">
          <h2 style="color: var(--yellow);">Thoughts on Clean Code</h2>
          <div class="post-meta">
            <span class="post-date">Sep 22, 2024</span>
            <span class="post-separator">•</span>
            <span class="post-tags">
              <span class="tag">programming</span>
              <span class="tag">best-practices</span>
            </span>
          </div>
        </div>
        <div class="post-content">
          <p>Been reading "Clean Code" by Uncle Bob. Some takeaways:</p>
          <ul>
            <li>Names should reveal intent</li>
            <li>Functions should do one thing and do it well</li>
            <li>Comments are often a sign of bad code</li>
          </ul>
          <p>While I don't agree with everything, the core principles are solid. Writing maintainable code is just as important as making it work.</p>
        </div>
        <a href="#" class="read-more">read more →</a>
      </div>

      <div class="blog-empty-state" style="display: none;">
        <p style="color: var(--comment);">No posts yet. Check back soon!</p>
      </div>
    </div>
  `;
}

export function initBlog() {
  // Add any blog-specific JavaScript functionality here
  // For example, filtering by tags, search functionality, etc.

  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });
}
