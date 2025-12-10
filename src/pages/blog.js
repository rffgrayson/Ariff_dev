import { blogPosts } from './blogData.js';

function renderBlogPost(post) {
  return `
    <div class="blog-post">
      <div class="post-header">
        <h2 style="color: var(--yellow);">${post.title}</h2>
        <div class="post-meta">
          <span class="post-date">${post.date}</span>
          <span class="post-separator">•</span>
          <span class="post-tags">
            ${post.tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
          </span>
        </div>
      </div>
      <div class="post-content">
        ${post.content}
      </div>
      <a href="#" class="read-more" data-post-id="${post.id}">read more →</a>
    </div>
  `;
}

function getAllTags() {
  const tags = new Set();
  blogPosts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function renderBlog() {
  const allTags = getAllTags();
  const postsHTML =
    blogPosts.length > 0
      ? blogPosts.map((post) => renderBlogPost(post)).join('')
      : '<div class="blog-empty-state"><p style="color: var(--comment);">No posts yet. Check back soon!</p></div>';

  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">blog</h1>
      <p style="color: var(--comment); margin-top: 10px;">thoughts, notes, and random stuff</p>
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
      if (postTags.includes(tag)) {
        post.style.display = 'block';
      } else {
        post.style.display = 'none';
      }
    }
  });
}

export function initBlog() {
  // Handle tag filtering
  const filterButtons = document.querySelectorAll('.filter-tag');
  filterButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove('active'));
      // Add active class to clicked button
      e.target.classList.add('active');

      const selectedTag = e.target.dataset.tag;
      filterPostsByTag(selectedTag);
    });
  });

  // Handle read more links
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const postId = parseInt(e.target.dataset.postId);
      const post = blogPosts.find((p) => p.id === postId);
      // eslint-disable-next-line no-console
      console.log('Opening post:', post);
      // Add your logic to open full post view
    });
  });
}
