// eslint-disable-next-line no-unused-vars
import { workData, getWorkByType } from './workData.js';

export function renderWork() {
  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">work</h1>
      <p style="color: var(--comment); margin-top: 10px;">things i've made</p>
    </div>

    <div class="work-filters">
      <button class="filter-btn active" data-filter="all">all</button>
      <button class="filter-btn" data-filter="project">projects</button>
      <button class="filter-btn" data-filter="video">videos</button>
    </div>

    <div class="work-grid" id="work-grid">
      <!-- Work items will be rendered here -->
    </div>

    <!-- Lightbox for previews -->
    <div class="work-lightbox" id="work-lightbox">
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <img id="lightbox-preview" src="" alt="">
      </div>
    </div>
  `;
}

export function initWork() {
  let currentFilter = 'all';

  const workGrid = document.getElementById('work-grid');
  const filterButtons = document.querySelectorAll('.work-filters .filter-btn');
  const lightbox = document.getElementById('work-lightbox');
  const lightboxPreview = document.getElementById('lightbox-preview');
  const lightboxClose = document.querySelector('.work-lightbox .lightbox-close');

  function renderWorkItems() {
    const items = getWorkByType(currentFilter);

    if (items.length === 0) {
      workGrid.innerHTML = `
        <div class="work-empty">
          <p style="color: var(--comment);">No ${currentFilter} items yet.</p>
        </div>
      `;
      return;
    }

    workGrid.innerHTML = items
      .map((item) => {
        if (item.type === 'project') {
          return renderProjectCard(item);
        } else if (item.type === 'video') {
          return renderVideoCard(item);
        }
      })
      .join('');

    attachPreviewHandlers();
  }

  function renderProjectCard(project) {
    return `
      <div class="work-card project-card">
        ${
          project.preview
            ? `
          <div class="work-preview" data-preview="${project.preview}">
            <img src="${project.preview}" alt="${project.title}">
            <div class="preview-overlay">
              <span>👁️ view</span>
            </div>
          </div>
        `
            : ''
        }
        <div class="work-content">
          <div class="work-header">
            <h3 style="color: var(--yellow);">${project.title}</h3>
            <span class="work-status ${project.status}">${project.status}</span>
          </div>
          <p class="work-description">${project.description}</p>
          <div class="work-tech">
            ${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join('')}
          </div>
          <div class="work-links">
            ${project.link ? `<a href="${project.link}" class="work-link">view →</a>` : ''}
            ${project.github ? `<a href="${project.github}" class="work-link" target="_blank">github →</a>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  function renderVideoCard(video) {
    return `
      <div class="work-card video-card">
        ${
          video.preview
            ? `
          <div class="work-preview" data-preview="${video.preview}">
            <img src="${video.preview}" alt="${video.title}">
            <div class="preview-overlay">
              <span>▶️ watch</span>
            </div>
            ${video.duration ? `<div class="video-duration">${video.duration}</div>` : ''}
          </div>
        `
            : ''
        }
        <div class="work-content">
          <div class="work-header">
            <h3 style="color: var(--yellow);">${video.title}</h3>
            <span class="work-badge">${video.platform}</span>
          </div>
          <p class="work-description">${video.description}</p>
          <div class="work-links">
            <a href="${video.link}" class="work-link" target="_blank">watch →</a>
          </div>
        </div>
      </div>
    `;
  }

  function attachPreviewHandlers() {
    const previews = document.querySelectorAll('.work-preview');
    previews.forEach((preview) => {
      preview.addEventListener('click', (e) => {
        e.preventDefault();
        const previewSrc = preview.dataset.preview;
        openLightbox(previewSrc);
      });
    });
  }

  function openLightbox(src) {
    lightboxPreview.src = src;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderWorkItems();
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex' && e.key === 'Escape') {
      closeLightbox();
    }
  });

  renderWorkItems();
}
