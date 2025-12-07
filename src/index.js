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

// GitHub Status Tracking
async function fetchGitHubStatus() {
  const statusElement = document.getElementById('status-text');
  const statusDot = document.querySelector('.status-dot');

  try {
    // Fetch recent events from GitHub API
    const response = await fetch(`https://api.github.com/users/rffgrayson/events/public`);

    if (!response.ok) {
      throw new Error('GitHub API request failed');
    }

    const events = await response.json();

    if (events.length === 0) {
      statusElement.textContent = 'idle on GitHub';
      statusDot.style.backgroundColor = 'var(--comment)';
      return;
    }

    // Get the most recent event
    const latestEvent = events[0];
    const eventDate = new Date(latestEvent.created_at);
    const now = new Date();
    const hoursSince = Math.floor((now - eventDate) / (1000 * 60 * 60));

    // Determine status based on recency
    if (hoursSince < 1) {
      statusElement.textContent = 'active on GitHub';
      statusDot.style.backgroundColor = 'var(--green)';
    } else if (hoursSince < 24) {
      statusElement.textContent = `active ${hoursSince}h ago`;
      statusDot.style.backgroundColor = 'var(--yellow)';
    } else if (hoursSince < 168) {
      // 7 days
      const daysSince = Math.floor(hoursSince / 24);
      statusElement.textContent = `active ${daysSince}d ago`;
      statusDot.style.backgroundColor = 'var(--orange)';
    } else {
      statusElement.textContent = 'idle on GitHub';
      statusDot.style.backgroundColor = 'var(--comment)';
    }
  } catch (error) {
    console.error('Error fetching GitHub status:', error);
    statusElement.textContent = 'status unavailable';
    statusDot.style.backgroundColor = 'var(--red)';
  }
}

// Fetch GitHub status on load
fetchGitHubStatus();

// Refresh status every 5 minutes
setInterval(fetchGitHubStatus, 5 * 60 * 1000);
