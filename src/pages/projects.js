export function renderProjects() {
  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">projects</h1>
      <p style="color: var(--comment); margin-top: 10px;">things i've built and breaking</p>
    </div>

    <div class="projects-grid">
      <div class="project-card">
        <div class="project-header">
          <h3 style="color: var(--yellow);">WebKaiser</h3>
          <span class="project-status">active</span>
        </div>
        <p class="project-description">
          B2B platform for managing client relationships and project workflows
        </p>
        <div class="project-tech">
          <span class="tech-tag">TypeScript</span>
          <span class="tech-tag">React</span>
          <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">view →</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <h3 style="color: var(--yellow);">Portfolio</h3>
          <span class="project-status">active</span>
        </div>
        <p class="project-description">
          Personal portfolio with real-time GitHub stats and activity tracking
        </p>
        <div class="project-tech">
          <span class="tech-tag">JavaScript</span>
          <span class="tech-tag">Webpack</span>
          <span class="tech-tag">APIs</span>
        </div>
        <div class="project-links">
          <a href="https://github.com/rffgrayson/Ariff_dev" class="project-link" target="_blank">github →</a>
        </div>
      </div>

      <div class="project-card">
        <div class="project-header">
          <h3 style="color: var(--yellow);">[Project Name]</h3>
          <span class="project-status archived">archived</span>
        </div>
        <p class="project-description">
          Description of your project goes here
        </p>
        <div class="project-tech">
          <span class="tech-tag">Python</span>
          <span class="tech-tag">Django</span>
        </div>
        <div class="project-links">
          <a href="#" class="project-link">view →</a>
        </div>
      </div>
    </div>
  `;
}
