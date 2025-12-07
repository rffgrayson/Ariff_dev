import './styles.css';

// Stats tracking
const stats = {
  clicks: 0,
  distance: 0,
  scrolls: 0,
  keypresses: 0,
  lastX: 0,
  lastY: 0,
};

// Update displays
function updateStats() {
  document.getElementById('clicks').textContent = stats.clicks;
  document.getElementById('distance').textContent = (stats.distance / 1000).toFixed(1) + 'm';
  document.getElementById('scrolls').textContent = stats.scrolls;
  document.getElementById('keypresses').textContent = stats.keypresses;
}

// Track clicks
document.addEventListener('click', () => {
  stats.clicks++;
  updateStats();
});

// Track mouse movement
document.addEventListener('mousemove', (e) => {
  if (stats.lastX !== 0 || stats.lastY !== 0) {
    const dx = e.clientX - stats.lastX;
    const dy = e.clientY - stats.lastY;
    stats.distance += Math.sqrt(dx * dx + dy * dy);
    updateStats();
  }
  stats.lastX = e.clientX;
  stats.lastY = e.clientY;
});

// Track scrolling
document.addEventListener('wheel', () => {
  stats.scrolls++;
  updateStats();
});

// Track keypresses
document.addEventListener('keydown', () => {
  stats.keypresses++;
  updateStats();
});

// Status messages
const onlineStatuses = [
  'online',
  'coding',
  'building stuff',
  'fixing legacy code',
  'reviewing PRs',
  'deploying',
  'reading docs',
  'debugging',
  'writing tests',
  'refactoring',
];

const offlineStatuses = [
  'offline',
  'sleeping',
  'touching grass',
  'away from keyboard',
  'taking a break',
  'out in the world',
  'living life',
  'probably sleeping',
];

let isOnline = false;
let statusIndex = 0;
let statusRotationInterval = null;

const statusSpan = document.getElementById('status-text');
const statusDot = document.querySelector('.status-dot');

// Rotate status messages
function rotateStatus() {
  const currentStatuses = isOnline ? onlineStatuses : offlineStatuses;

  statusSpan.style.opacity = 0;

  setTimeout(() => {
    statusIndex = (statusIndex + 1) % currentStatuses.length;
    statusSpan.textContent = currentStatuses[statusIndex];
    statusSpan.style.opacity = 1;
  }, 250);
}

// Start status rotation
function startStatusRotation() {
  if (statusRotationInterval) {
    clearInterval(statusRotationInterval);
  }
  statusIndex = 0;
  statusSpan.textContent = isOnline ? onlineStatuses[0] : offlineStatuses[0];
  statusRotationInterval = setInterval(rotateStatus, 2500);
}

// GitHub Status Tracking
async function fetchGitHubStatus() {
  try {
    const response = await fetch(`https://api.github.com/users/rffgrayson/events/public`);

    if (!response.ok) {
      throw new Error('GitHub API request failed');
    }

    const events = await response.json();

    if (events.length === 0) {
      updateOnlineStatus(false);
      return;
    }

    // Get the most recent event
    const latestEvent = events[0];
    const eventDate = new Date(latestEvent.created_at);
    const now = new Date();
    const hoursSince = Math.floor((now - eventDate) / (1000 * 60 * 60));

    // Determine status based on recency
    if (hoursSince < 24) {
      updateOnlineStatus(true);
    } else {
      updateOnlineStatus(false);
    }
  } catch (error) {
    console.error('Error fetching GitHub status:', error);
    updateOnlineStatus(false);
    statusDot.style.backgroundColor = 'var(--red)';
  }
}

// Update online status
function updateOnlineStatus(online) {
  const wasOnline = isOnline;
  isOnline = online;

  // Update dot color
  if (isOnline) {
    statusDot.style.backgroundColor = 'var(--green)';
  } else {
    statusDot.style.backgroundColor = 'var(--comment)';
  }

  // Restart rotation if status changed
  if (wasOnline !== isOnline) {
    startStatusRotation();
  }
}

// Initialize
fetchGitHubStatus();
startStatusRotation();

// Refresh status every 5 minutes
setInterval(fetchGitHubStatus, 5 * 60 * 1000);
