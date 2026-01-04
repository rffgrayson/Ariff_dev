import { blogPosts, getAllTags } from './blogData.js';

// Helper function to convert URLs to clickable links
function linkifyText(text) {
  // Match URLs (http, https, and www)
  const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
  return text.replace(urlRegex, (url) => {
    const href = url.startsWith('www.') ? `https://${url}` : url;
    return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>`;
  });
}

// Render individual content blocks based on type
function renderContentBlock(block) {
  switch (block.type) {
    case 'text': {
      const textContent = linkifyText(block.content);
      return `<p class="blog-text">${textContent.replace(/\n\n/g, '</p><p class="blog-text">')}</p>`;
    }

    case 'heading':
      return `<h${block.level} class="blog-heading">${block.content}</h${block.level}>`;

    case 'image':
      return `
        <figure class="blog-image">
          <img src="${block.src}" alt="${block.alt}" loading="lazy">
          ${block.caption ? `<figcaption>${block.caption}</figcaption>` : ''}
        </figure>
      `;

    case 'quote':
      return `
        <blockquote class="blog-quote">
          <p>${block.content}</p>
          ${block.author ? `<cite>— ${block.author}</cite>` : ''}
        </blockquote>
      `;

    case 'callout': {
      const calloutContent = linkifyText(block.content);
      return `
        <div class="blog-callout callout-${block.style || 'info'}">
          ${calloutContent}
        </div>
      `;
    }

    case 'code':
      return `
        <pre class="blog-code"><code class="language-${block.language || 'javascript'}">${escapeHtml(block.content)}</code></pre>
      `;

    case 'embed':
      return renderEmbed(block);

    case 'stats':
      return `
        <div class="blog-stats">
          ${block.data
            .map(
              (stat) => `
            <div class="stat-block">
              <div class="stat-label">${stat.label}</div>
              <div class="stat-value">${stat.value}</div>
            </div>
          `
            )
            .join('')}
        </div>
      `;

    default:
      return `<p>${block.content || ''}</p>`;
  }
}

function renderEmbed(block) {
  switch (block.platform) {
    case 'youtube':
      return `
        <div class="blog-embed">
          <iframe 
            src="https://www.youtube.com/embed/${block.id}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
          ${block.caption ? `<p class="embed-caption">${block.caption}</p>` : ''}
        </div>
      `;

    case 'twitter':
      return `
        <div class="blog-embed twitter-embed">
          <blockquote class="twitter-tweet">
            <a href="https://twitter.com/x/status/${block.id}"></a>
          </blockquote>
          <script async src="https://platform.twitter.com/widgets.js"></script>
        </div>
      `;

    case 'codepen':
      return `
        <div class="blog-embed">
          <iframe 
            height="400" 
            style="width: 100%;" 
            scrolling="no" 
            src="https://codepen.io/${block.user}/embed/${block.id}?default-tab=result" 
            frameborder="no" 
            allowtransparency="true" 
            allowfullscreen="true">
          </iframe>
        </div>
      `;

    default:
      return '';
  }
}

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

function renderBlogPost(post) {
  const previewContent = Array.isArray(post.content)
    ? post.excerpt
    : post.content.slice(0, 200) + '...';

  return `
    <article class="blog-post" data-post-id="${post.id}">
      <div class="post-header">
        <h2>${post.title}</h2>
        <div class="post-meta">
          <span class="post-date">${post.date}</span>
          <span class="post-separator">•</span>
          <div class="post-tags">
            ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </div>
      <div class="post-excerpt">
        ${previewContent}
      </div>
      <a href="#" class="read-more" data-post-id="${post.id}">read more →</a>
    </article>
  `;
}

function renderFullPost(post) {
  // Render content blocks if using new structure
  const contentHTML = Array.isArray(post.content)
    ? post.content.map((block) => renderContentBlock(block)).join('')
    : `<div class="blog-text">${post.content.replace(/\n\n/g, '</p><p class="blog-text">')}</div>`;

  return `
    <article class="full-post">
      <button class="back-button">
        ← back to blog
      </button>
      
      <header class="post-full-header">
        <h1>${post.title}</h1>
        <div class="post-meta">
          <span class="post-date">${post.date}</span>
          <span class="post-separator">•</span>
          <div class="post-tags">
            ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      </header>
      
      <div class="post-full-content">
        ${contentHTML}
      </div>
    </article>
  `;
}

export function renderBlog() {
  const allTags = getAllTags();
  const postsHTML =
    blogPosts.length > 0
      ? blogPosts.map((post) => renderBlogPost(post)).join('')
      : '<div class="blog-empty-state"><p>No posts yet. Check back soon!</p></div>';

  return `
    <div class="page-header">
      <h1>blog</h1>
      <p class="page-subtitle">thoughts, notes, and random stuff</p>
    </div>

    <div class="blog-filters">
      <button class="filter-tag active" data-tag="all">all</button>
      ${allTags.map((tag) => `<button class="filter-tag" data-tag="${tag}">${tag}</button>`).join('')}
    </div>

    <div class="blog-container">
      ${postsHTML}
    </div>
  `;
}

function filterPostsByTag(tag) {
  const posts = document.querySelectorAll('.blog-post');

  posts.forEach((post) => {
    if (tag === 'all') {
      post.style.display = 'block';
    } else {
      const postTags = Array.from(post.querySelectorAll('.tag')).map((t) => t.textContent);
      post.style.display = postTags.includes(tag) ? 'block' : 'none';
    }
  });
}

function showFullPost(postId) {
  const post = blogPosts.find((p) => p.id === postId);
  if (!post) return;

  const appContent = document.getElementById('app-content');
  appContent.innerHTML = renderFullPost(post);

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Handle back button
  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', () => {
    appContent.innerHTML = renderBlog();
    initBlog();
  });
}

export function initBlog() {
  // Tag filtering
  const filterButtons = document.querySelectorAll('.filter-tag');
  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      e.target.classList.add('active');
      filterPostsByTag(e.target.dataset.tag);
    });
  });

  // Read more links
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const postId = parseInt(e.target.dataset.postId);
      showFullPost(postId);
    });
  });

  // Return cleanup function
  return () => {
    // Cleanup any event listeners if needed
  };
}
