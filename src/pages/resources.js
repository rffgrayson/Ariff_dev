import { resourcesData } from './resourcesData.js';

function getAllTags() {
  const tags = new Set();
  resourcesData.courses.forEach((item) => {
    if (item.tags) {
      item.tags.forEach((tag) => tags.add(tag));
    }
  });
  return Array.from(tags).sort();
}

function filterByTag(tag) {
  if (tag === 'all') {
    return resourcesData.courses;
  }
  return resourcesData.courses.filter((item) => item.tags?.includes(tag));
}

function isCompleted(item) {
  return item.status === 'completed';
}

function renderOngoingResource(resource) {
  const progressHTML = resource.progress
    ? `
    <div class="progress-container">
      <div class="progress-label">${resource.progress.label}</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${resource.progress.percentage}%; background-color: var(--yellow);"></div>
      </div>
    </div>
  `
    : '';

  const docsHTML = resource.documentation
    ? `
    <div class="sub-resources">
      <div class="sub-header">documentation & resources:</div>
      <div class="sub-list">
        ${resource.documentation
          .map(
            (doc) =>
              `<a href="${doc.url}" target="_blank" class="sub-link" title="${doc.description}">${doc.title}</a>`
          )
          .join('')}
      </div>
    </div>
  `
    : '';

  const modulesHTML = resource.modules
    ? `
    <div class="course-list">
      ${resource.modules
        .map((module) => {
          let statusDisplay = '';
          if (module.status === 'completed') {
            statusDisplay = `<span class="course-status completed">✓ completed ${module.completedDate || ''}</span>`;
          } else if (module.status === 'in-progress') {
            statusDisplay = `<span class="course-status current">→ ${module.progress || 'in progress'}</span>`;
          } else if (module.status === 'pending') {
            statusDisplay = `<span class="course-status pending">⋯ pending</span>`;
          }

          return `
          <div class="course-item">
            <div class="course-header">
              ${module.code ? `<span class="course-number">${module.code}</span>` : ''}
              <span class="course-title">${module.title}</span>
              ${statusDisplay}
            </div>
            ${module.duration ? `<p class="course-time">${module.duration}</p>` : ''}
          </div>
        `;
        })
        .join('')}
    </div>
  `
    : '';

  const titleHTML = resource.url
    ? `<a href="${resource.url}" target="_blank" class="resource-link">${resource.title}</a>`
    : `<span class="resource-link">${resource.title}</span>`;

  const dateHTML = resource.startDate
    ? `<span class="item-date">started: ${resource.startDate}</span>`
    : '';

  return `
    <div class="learning-item ongoing-item" data-tags="${(resource.tags || []).join(',')}">
      <div class="learning-header">
        ${titleHTML}
        <span class="status-badge in-progress">in progress</span>
      </div>
      <p class="learning-desc">${resource.description || ''}</p>
      ${dateHTML ? `<p class="learning-date">${dateHTML}</p>` : ''}
      ${progressHTML}
      ${modulesHTML}
      ${docsHTML}
    </div>
  `;
}

function renderFinishedResource(resource) {
  // Generate thumbnail URL
  let thumbnailUrl = '';
  if (resource.url) {
    thumbnailUrl = `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(resource.url)}&dimension=300x200`;
  } else if (resource.link) {
    thumbnailUrl = `https://api.screenshotmachine.com/?key=demo&url=${encodeURIComponent(resource.link)}&dimension=300x200`;
  }

  // Handle module-based courses
  const displayTitle =
    resource.modules && resource.modules[0] ? resource.modules[0].title : resource.title;

  const displayUrl =
    resource.modules && resource.modules[0]
      ? resource.modules[0].link
      : resource.link || resource.url;

  const displayAuthor =
    resource.modules && resource.modules[0] ? resource.modules[0].author : resource.author;

  const displayCredential =
    resource.modules && resource.modules[0] ? resource.modules[0].credential : resource.credential;

  const displayDate =
    resource.modules && resource.modules[0]
      ? resource.modules[0].completedDate
      : resource.completedDate;

  return `
    <div class="finished-resource-card" data-tags="${(resource.tags || []).join(',')}">
      <div class="finished-thumbnail faded">
        ${
          thumbnailUrl
            ? `
          <img src="${thumbnailUrl}" alt="${displayTitle}" 
               onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22300%22 height=%22200%22%3E%3Crect fill=%22%23282a36%22 width=%22300%22 height=%22200%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%236272a4%22 font-size=%2216%22%3E${displayTitle.substring(0, 20)}%3C/text%3E%3C/svg%3E'">
        `
            : `
          <div class="thumbnail-placeholder">
            <span>${displayTitle.substring(0, 2).toUpperCase()}</span>
          </div>
        `
        }
        <div class="completed-overlay">✓</div>
      </div>
      
      <div class="finished-content">
        <h3 class="finished-title">
          ${displayUrl ? `<a href="${displayUrl}" target="_blank">${displayTitle}</a>` : displayTitle}
        </h3>
        <div class="completed-details-section">
          <div class="first-details">
                  ${displayAuthor ? `<div class="finished-author">by ${displayAuthor}</div>` : ''}
        <div class="finished-meta">
          <span class="finished-date">✓ Date: ${displayDate}</span>
        </div>
          </div>
          ${
            displayCredential
              ? `
          <a href="${displayCredential}" target="_blank" class="credential-badge">
            View Credential →
          </a>
        `
              : ''
          }
        </div>

        
      </div>
    </div>
  `;
}

export function renderResources(selectedTag = 'all') {
  const allTags = getAllTags();
  const filteredCourses = filterByTag(selectedTag);

  const ongoing = filteredCourses.filter((r) => !isCompleted(r));
  const finished = filteredCourses.filter((r) => isCompleted(r)).reverse();

  // Get currently reading from ongoing courses

  return `

    <div class="resources-filters">
      <button class="filter-tag ${selectedTag === 'all' ? 'active' : ''}" data-tag="all">all</button>
      ${allTags
        .map(
          (tag) => `
        <button class="filter-tag ${selectedTag === tag ? 'active' : ''}" data-tag="${tag}">
          ${tag.replace('-', ' & ')}
        </button>
      `
        )
        .join('')}
    </div>

    <div class="resources-container">
      ${
        ongoing.length > 0
          ? `
        <section class="section-block">
          <h2 style="color: var(--yellow); margin-bottom: 20px;">
            → ongoing
            <span style="color: var(--comment); font-size: 1rem; margin-left: 10px;">(${ongoing.length})</span>
          </h2>
          ${ongoing.map((r) => renderOngoingResource(r)).join('')}
        </section>
      `
          : ''
      }

      ${
        finished.length > 0
          ? `
        <section class="section-block">
          <h2 style="color: var(--green); margin-bottom: 20px; margin-top: 50px;">
            ✓ finished
            <span style="color: var(--comment); font-size: 1rem; margin-left: 10px;">(${finished.length})</span>
          </h2>
          <div class="finished-stack">
            ${finished.map((r) => renderFinishedResource(r)).join('')}
          </div>
        </section>
      `
          : ''
      }

      ${
        ongoing.length === 0 && finished.length === 0
          ? `
        <p style="color: var(--comment); text-align: center; padding: 40px;">
          No resources found for this tag.
        </p>
      `
          : ''
      }
    </div>
  `;
}

export function initResources() {
  const filterButtons = document.querySelectorAll('.filter-tag');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedTag = e.target.dataset.tag;
      const container = document.querySelector('#app-content');
      container.innerHTML = renderResources(selectedTag);
      initResources();
    });
  });
}
