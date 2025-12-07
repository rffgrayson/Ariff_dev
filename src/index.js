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

const languageColors = {
  TypeScript: '#3178c6',
  JavaScript: '#f7df1e',
  Python: '#3776ab',
  Java: '#007396',
  Go: '#00add8',
  Rust: '#dea584',
  'C++': '#f34b7d',
  C: '#555555',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Qml: '#44a51c',
  Toml: '#9c4221',
  Json: '#292929',
  Ruby: '#cc342d',
  PHP: '#777bb4',
  Swift: '#ffac45',
  Kotlin: '#a97bff',
  Dart: '#2e6d6aff',
  ABAP: '#4d10adff',
};

async function fetchWakaTimeStats() {
  const username = 'rffgrayson'; // Replace with your WakaTime username

  try {
    // This uses WakaTime's public API endpoint
    const response = await fetch(`https://wakatime.com/api/v1/users/${username}/stats/last_7_days`);

    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }

    const data = await response.json();

    // Update summary stats
    document.getElementById('time-coding').textContent = data.data.human_readable_total || '0h 0m';
    document.getElementById('main-project').textContent = data.data.projects[0]?.name || 'N/A';
    document.getElementById('main-editor').textContent = data.data.editors[0]?.name || 'N/A';
    document.getElementById('daily-average').textContent =
      data.data.human_readable_daily_average || '0h 0m';

    // Update language breakdown
    const languagesList = document.getElementById('languages-list');

    if (data.data.languages && data.data.languages.length > 0) {
      languagesList.innerHTML = data.data.languages
        .slice(0, 5) // Top 5 languages
        .map((lang) => {
          const color = languageColors[lang.name] || '#7285b7';
          return `
                <div class="language-item">
                  <div class="language-header">
                    <span class="language-name">${lang.name}</span>
                    <span class="language-stats">${lang.text} (${lang.percent.toFixed(1)}%)</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: ${lang.percent}%; background-color: ${color};"></div>
                  </div>
                </div>
              `;
        })
        .join('');
    } else {
      languagesList.innerHTML = '<div class="loading">No coding activity this week</div>';
    }
  } catch (error) {
    console.error('Error fetching WakaTime stats:', error);

    // Show fallback/demo data
    // Show fallback/demo data
    document.getElementById('time-coding').textContent = '5h 12m'; // realistic daily coding time
    document.getElementById('main-project').textContent = 'WebKaiser'; // your main project currently
    document.getElementById('main-editor').textContent = 'VS Code'; // most used IDE
    document.getElementById('daily-average').textContent = '1h 05m'; // avg per session

    document.getElementById('languages-list').innerHTML = `
  <div class="language-item">
    <div class="language-header">
      <span class="language-name">TypeScript</span>
      <span class="language-stats">2.5h (48%)</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 48%; background-color: #3178c6;"></div>
    </div>
  </div>
  <div class="language-item">
    <div class="language-header">
      <span class="language-name">Go</span>
      <span class="language-stats">1.0h (19%)</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 19%; background-color: #00add8;"></div>
    </div>
  </div>
  <div class="language-item">
    <div class="language-header">
      <span class="language-name">ABAP</span>
      <span class="language-stats">0.8h (15%)</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 15%; background-color: #5e5e5e;"></div>
    </div>
  </div>
  <div class="language-item">
    <div class="language-header">
      <span class="language-name">HTML/CSS</span>
      <span class="language-stats">0.6h (11%)</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 11%; background-color: #e34c26;"></div>
    </div>
  </div>
  <div class="language-item">
    <div class="language-header">
      <span class="language-name">JSON / Config</span>
      <span class="language-stats">0.3h (7%)</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" style="width: 7%; background-color: #292929;"></div>
    </div>
  </div>
`;
  }
}

// Fetch stats on load
fetchWakaTimeStats();

// Refresh every 5 minutes
setInterval(fetchWakaTimeStats, 5 * 60 * 1000);

// Toggle language breakdown
document.querySelector('.breakdown-header').addEventListener('click', function () {
  const list = document.getElementById('languages-list');
  if (list.style.display === 'none') {
    list.style.display = 'block';
    this.textContent = '› language breakdown';
  } else {
    list.style.display = 'none';
    this.textContent = '˅ language breakdown';
  }
});
