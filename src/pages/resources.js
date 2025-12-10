import { resourcesData } from './resourcesData.js';

function getAllTags() {
  const tags = new Set();

  // Collect tags from all resource types
  [
    ...resourcesData.courses,
    ...resourcesData.certifications,
    ...resourcesData.books,
    ...resourcesData.videos,
  ].forEach((item) => {
    if (item.tags) {
      item.tags.forEach((tag) => tags.add(tag));
    }
  });

  return Array.from(tags).sort();
}

function filterByTag(tag) {
  if (tag === 'all') {
    return resourcesData;
  }

  return {
    courses: resourcesData.courses.filter((item) => item.tags?.includes(tag)),
    certifications: resourcesData.certifications.filter((item) => item.tags?.includes(tag)),
    books: resourcesData.books.filter((item) => item.tags?.includes(tag)),
    videos: resourcesData.videos.filter((item) => item.tags?.includes(tag)),
  };
}

function renderCourse(course) {
  const statusClass = course.status.replace('-', '');

  let progressHTML = '';
  if (course.progress) {
    progressHTML = `
      <div class="progress-container">
        <div class="progress-label">${course.progress.label}</div>
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${course.progress.percentage}%; background-color: var(--yellow);"></div>
        </div>
      </div>
    `;
  }

  let docsHTML = '';
  if (course.documentation) {
    docsHTML = `
      <div class="sub-resources">
        <div class="sub-header">documentation & resources:</div>
        <div class="sub-list">
          ${course.documentation
            .map(
              (doc) =>
                `<a href="${doc.url}" target="_blank" class="sub-link" title="${doc.description}">${doc.title}</a>`
            )
            .join('')}
        </div>
      </div>
    `;
  }

  let modulesHTML = '';
  if (course.modules) {
    modulesHTML = `
      <div class="course-list">
        ${course.modules
          .map((module) => {
            let statusDisplay = '';
            if (module.status === 'completed') {
              statusDisplay = `<span class="course-status completed">✓ completed ${module.completedDate || ''}</span>`;
            } else if (module.status === 'in-progress') {
              statusDisplay = `<span class="course-status current">→ ${module.progress || 'in progress'}</span>`;
            } else if (module.status === 'pending') {
              statusDisplay = `<span class="course-status pending">⋯ ${module.progress || 'pending'}</span>`;
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
    `;
  }

  const titleHTML = course.url
    ? `<a href="${course.url}" target="_blank" class="resource-link">${course.title}</a>`
    : `<span class="resource-link">${course.title}</span>`;

  const dateHTML = course.completedDate
    ? `<span class="item-date">${course.completedDate}</span>`
    : course.startDate
      ? `<span class="item-date">started: ${course.startDate}</span>`
      : '';

  return `
    <div class="learning-item" data-tags="${(course.tags || []).join(',')}">
      <div class="learning-header">
        ${titleHTML}
        <span class="status-badge ${statusClass}">${course.status.replace('-', ' ')}</span>
      </div>
      <p class="learning-desc">${course.description}</p>
      ${dateHTML ? `<p class="learning-date">${dateHTML}</p>` : ''}
      ${progressHTML}
      ${modulesHTML}
      ${docsHTML}
    </div>
  `;
}

function renderBook(book) {
  return `
    <div class="book-item learning-item" data-tags="${(book.tags || []).join(',')}">
      <div class="book-cover">
        <img src="${book.coverImage}" alt="${book.title}" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22180%22%3E%3Crect fill=%22%23282a36%22 width=%22120%22 height=%22180%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22%236272a4%22 font-size=%2214%22%3ENo Image%3C/text%3E%3C/svg%3E'">
      </div>
      <div class="book-info">
        <h3 class="book-title">
          ${book.url ? `<a href="${book.url}" target="_blank">${book.title}</a>` : book.title}
        </h3>
        <p class="book-author">${book.author}</p>
        <span class="book-status status-${book.status}">${book.status}</span>
      </div>
    </div>
  `;
}

function renderVideo(video) {
  return `
    <div class="video-item learning-item" data-tags="${(video.tags || []).join(',')}">
      <div class="video-thumbnail">
        <a href="${video.url}" target="_blank">
          <img src="${video.thumbnail}" alt="${video.title}">
          <div class="play-overlay">▶</div>
        </a>
      </div>
      <div class="video-info">
        <h3 class="video-title">
          <a href="${video.url}" target="_blank">${video.title}</a>
        </h3>
        <p class="video-channel">${video.channel}</p>
        ${video.description ? `<p class="video-desc">${video.description}</p>` : ''}
        <span class="video-date">${video.date}</span>
      </div>
    </div>
  `;
}

export function renderResources(selectedTag = 'all') {
  const allTags = getAllTags();
  const filteredData = filterByTag(selectedTag);
  const sections = [];

  // Courses Section
  if (filteredData.courses.length > 0) {
    sections.push(`
      <h2 style="color: var(--yellow); margin-top: 30px;">courses</h2>
      ${filteredData.courses.map((course) => renderCourse(course)).join('')}
    `);
  }

  // Certifications Section
  if (filteredData.certifications.length > 0) {
    sections.push(`
      <h2 style="color: var(--yellow); margin-top: 40px;">certifications</h2>
      ${filteredData.certifications.map((cert) => renderCourse(cert)).join('')}
    `);
  }

  // Books Section
  if (filteredData.books.length > 0) {
    sections.push(`
      <h2 style="color: var(--yellow); margin-top: 40px;">books</h2>
      <div class="books-grid">
        ${filteredData.books.map((book) => renderBook(book)).join('')}
      </div>
    `);
  }

  // Videos Section
  if (filteredData.videos.length > 0) {
    sections.push(`
      <h2 style="color: var(--yellow); margin-top: 40px;">videos</h2>
      <div class="videos-grid">
        ${filteredData.videos.map((video) => renderVideo(video)).join('')}
      </div>
    `);
  }

  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">resources</h1>
      <p style="color: var(--comment); margin-top: 10px;">learning paths & tools</p>
    </div>

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

    <div class="resources-section">
      ${sections.length > 0 ? sections.join('') : '<p style="color: var(--comment); text-align: center; padding: 40px;">No resources found for this tag.</p>'}
    </div>
  `;
}

export function initResources() {
  const filterButtons = document.querySelectorAll('.filter-tag');

  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const selectedTag = e.target.dataset.tag;

      // Re-render resources with selected tag
      const container = document.querySelector('#app-content');
      container.innerHTML = renderResources(selectedTag);

      // Re-initialize event listeners after re-render
      initResources();
    });
  });
}
