export function renderCat() {
  return `
    <div class="page-header">
      <h1 style="color: var(--cyan);">cats</h1>
      <p style="color: var(--comment); margin-top: 10px;">meet miki & miko</p>
    </div>

    <div class="gallery-filters">
      <button class="filter-btn active" data-filter="all">all</button>
      <button class="filter-btn" data-filter="miki">miki</button>
      <button class="filter-btn" data-filter="miko">miko</button>
    </div>

    <div class="cats-gallery" id="cats-gallery">
      <div class="gallery-placeholder">
        <p style="color: var(--comment);">
          No photos loaded yet!
        </p>
      </div>
    </div>

    <div class="lightbox" id="lightbox">
      <div class="lightbox-content">
        <button class="lightbox-close">&times;</button>
        <button class="lightbox-nav prev">‹</button>
        <img id="lightbox-img" src="" alt="">
        <div class="lightbox-info">
          <span id="lightbox-cat-name"></span>
          <span id="lightbox-counter"></span>
        </div>
        <button class="lightbox-nav next">›</button>
      </div>
    </div>
  `;
}

export function initCat() {
  let photos = [];
  let currentFilter = 'all';
  let currentLightboxIndex = 0;

  const gallery = document.getElementById('cats-gallery');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCatName = document.getElementById('lightbox-cat-name');
  const lightboxCounter = document.getElementById('lightbox-counter');
  const lightboxClose = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-nav.prev');
  const nextBtn = document.querySelector('.lightbox-nav.next');

  // Load photos from storage
  async function loadPhotos() {
    try {
      const stored = await window.storage?.get('cat-photos');
      if (stored && stored.value) {
        photos = JSON.parse(stored.value);
        renderGallery();
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      // No photos stored yet
    }
  }

  // Render gallery
  function renderGallery() {
    const filteredPhotos =
      currentFilter === 'all' ? photos : photos.filter((p) => p.cat === currentFilter);

    if (filteredPhotos.length === 0) {
      gallery.innerHTML = `
        <div class="gallery-placeholder">
          <p style="color: var(--comment);">
            ${
              currentFilter === 'all'
                ? 'No photos loaded yet!'
                : `No photos of ${currentFilter} yet.`
            }
          </p>
        </div>
      `;
      return;
    }

    gallery.innerHTML = filteredPhotos
      .map(
        (photo) => `
        <div class="gallery-item" data-index="${photos.indexOf(photo)}">
          <img src="${photo.url}" alt="${photo.cat}">
          <div class="gallery-item-overlay">
            <span class="gallery-item-cat">${photo.cat}</span>
          </div>
        </div>
      `
      )
      .join('');

    // Add click handlers
    const galleryItems = gallery.querySelectorAll('.gallery-item');
    galleryItems.forEach((item) => {
      item.addEventListener('click', () => {
        const index = parseInt(item.dataset.index);
        openLightbox(index);
      });
    });
  }

  // Filter handlers
  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderGallery();
    });
  });

  // Lightbox functionality
  function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
  }

  function updateLightbox() {
    const photo = photos[currentLightboxIndex];
    if (!photo) return;

    lightboxImg.src = photo.url;
    lightboxCatName.textContent = photo.cat;
    lightboxCounter.textContent = `${currentLightboxIndex + 1} / ${photos.length}`;
  }

  function nextPhoto() {
    currentLightboxIndex = (currentLightboxIndex + 1) % photos.length;
    updateLightbox();
  }

  function prevPhoto() {
    currentLightboxIndex = (currentLightboxIndex - 1 + photos.length) % photos.length;
    updateLightbox();
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    prevPhoto();
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    nextPhoto();
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'ArrowRight') nextPhoto();
    }
  });

  // Initialize
  loadPhotos();
}
