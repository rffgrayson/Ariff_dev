import { getFeaturedWork } from './workData.js';

export function renderHome() {
  return `
        <div class="quote-section">
        <div class="quote-text" id="quote">"Until death, all defeats are psychological."</div>
      </div>
      <div class="profile-section">        
        <div class="profile-details">
          <h1>mars.</h1>
          <div class="subtitle">swe @ Deloitte</div>
          <div class="bio">computer scientist, math grad</div>
          <div class="status">
              <span class="status-dot"></span>
              <span id="status-text">checking status...</span>
          </div>
          <div class="reading">
            currently studying:
                <a href="https://www.theodinproject.com" class="studying-link" target="_blank">
                The Odin Project
                </a>
          </div>

        </div>
        <pre id="ascii-art">
        
                                                                            !!~~~~!!!
                                                                         ^:::::::::::::::^
                                                                       ^^:::::.......::::........^
                                                                 ^^:.............................::^^
                                                            ~^..................................::...:^
                                                        ~^:........................:^.....:.::.^^^:....^
                                                      ^^::................::.~^.^^:..^7: ...:^:^^~::^::...^
                                                     :..........:....~^.:^:.:^^::^^^:.:~^. ....^!:::..^!:..:
                                                    : .   ...:.~~:..:^!!^^:..^~..!:::.:........::.....::...
                                                    ~        .:~:::..:.~~.:^........::.....................:
                                                    .          :. ..........:. ... ....... .........  ..  ...:
                                                    .            .. ...  ....     .   .....    .             ....::^
                                                   .                  .    ...          ....                  .^^^^
                                                   .                                       .                   .
                                                    ^                                                            .
                                                  ~^                                                            . ^
                                                    ~~                                                          .:^
                                                   ^^.       !:                                    :~.          .!
                                                     ^:       ..                                   7P!          ^!
                                                      :       G@&::!   .  ^.   ^~            7~    Y#J         :!
                                                      ^       &@@5 ?. .~? 5@#Y^.Y.   .:..J5:.BB7  .JP~         ~
                                                       .^.    ^!J^:#~?G:J:^#&&&B7.?5^#&#5BBP^GGB:.J7.        ...
                                                         ^^. :^^5J?##@@#57777??JJJ&@&@@&BGGGGGGG?55.         .~^^
                                                           ^.:~~YYP@@@@@@&#&&&&@@@@@@@@&GGGGGGGJPPG7          .!
                                                            ^~~~^7&@@@&&@@@@@@@@@@&@@@@#GGGGGGJ7BGGBY.         .
                                                                ^JGBBGPB&&&&&&&&@@@@@@@BGGGGGP~!GGGGGP7^      . 
                                                                  ^!55B&@@@@@@@&&&@&&@&GGGGPJ!!^GGGB#GBB^     ^^
                                                                    75JJJYPGBGB#&&@@@@#GPY?!7~!~PGG&&GGY.    :J
                                                                     7555PGGBB&@@@@@&B5?~777!~~~PB&@&G5:     ^&P!~
                                                                      ?GB&&&&@@@@&#PJ!77:7!!!^~!#@@@&5~      ~&&#?
                                                                      ^5&@@@@@&&BY7~!~?!:^~~7^^Y@@@@B!       5@@@&&@&GY
                                                                       !G####GY7!!!~~~!~::!!7~^#@@@#?.   ...:@@@@@&@@@@&GY
                                                                         777~7Y!7!!!.^!!::!7P~Y@@@#?........P@@@@@&@@@@@@@#G
                                                                            ?#&G!!!!::~!^:?PGY&@@#J........~@@@@@&&@@@@@@@@@@#PJ
                                                                        7J7Y&&&5..^!~^:7J?GGG&@&BJ........:&@@@@@#&@@@@@@@@@@@@@BY
                                                                   7?YPB#GG&#&?   .7~^:7JB&B#@&B7.........5@@@@@@B@@@@@@@@@@@@@@@@&
                                                             7?YGBB##&&#PB&#&!    ?5J~75#&@&@&G!.........^@@@@@@@#@@@@@@@@@@@@@@@@@@@&
                                                        7?5B&@@@@@@####PB###!    ~JGG?G&@@&@&P~..........#@@@@@@#&@@@@@@@@@@@@@@@@@@@@@@G
                                                       #&@@@@@@@@@@@##5B##&!    .JPGG5#@@@@&5^..........?@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@&
                                                    &@@@@@@@@@@@@@@@@PB##&?     ?5GGPB@@&#P5^..........:&@@@@@@&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@G
                                                  @@@@@@@@@@@@@@@@@@B&@&&J     !^!PGB&#BGYY:...........5@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#
                                                @@@@@@@@@@@@@@@@@@@#&@@@G.    :JJ^^PPJ7!7J:...........^@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&
                                              @@@@@@@@@@@@@@@@@@@@#&@@@#:... .?YBG~:~?YY?.............P@@@@@@@#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&5!
                                            @@@@@@@@@@@@@@@@@@@@@&#@@@&:.....?YGGGGPGP5!.............^@@@@@@@@G@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&&@@&
                                           @@@@@@@@@@@@@@@@@@@@@@B@@@&^.:...~55GGGGG5Y^..............P@@@@@@@&B@@@@&@@@@@@@@@@@@@@@@@@@@@@@@&&&&@@@@@@
                                       GG&&@@@@@@@@@@@@@@@@@@@@@B@@@@!.::::.JJPPPP5Y?...............^@@@@@@@@#&@@@@#@@@@@@@@@@@@@@@@@@@@@@&#&@@@@@@@@@
                                     &@@@@G@@@@@@@@@@@@@@@@@@@&#G&&&#B#######&&&&#P!.......... .....P@@@@@@@@G@@@@@#@@@@@@@@@@@@@@@@@@@@@#&@@@@@@@@@@@
                                   &@@@@@BB@@@@@@@@@@@@@@@@&##&&@&&&&&&&&&&&&###G5^......... ......^@@@@@@@@&#@@@@@#@@@@@@@@@@@@@@@@@@@&#@@@@@@@@@@@@@
                                  @@@&@@&?&@@@@@@@@@@@@&&##&&&&#BBGGGGGGGPPPPP5Y7.......... .......P@@@@@@@@B&@@@@&&@@@@@@@@@@@@@@@@@@#&@@@@@@@@@@@@@@
                                 @@@&#@&#~@@@@@@@@@@&&##&&@&#GGPPPPPPPGGPPGGP5Y~.........  .......:@@@@@@@@@G@@@@@&&@@@@@@@@@@@@@@@@@B&@@@@@@@@@@@@@@@
                                @@@&#G&#G7@@@@@@&&##&&@@&&BGGGGPPPGGGGPPPGG5Y?.........  .........?&@@@@@@@@B@@@@@&&@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@
                               @@@&##P##55@@@&##&&&@@@&#BGPGGGGPGGPPPGGGGP55~ ........  ..........B#@@@@@@@#&@@@@@#&@@@@@@@@@@@@@@@G@@@@@@@@@@@@@@@@@@
                         G@@&&&@@&###BP&J5###&&@@@@&&BGGGGGP555P7:....::~5?. .......  ...........!&##@@@@@@B@@@@@@#&@@@@@@@@@@@@@@B&@@@@@@@@@@@@@@@@@@
                        @@@@@@&&BGB##BYBB&&@@@&&&#BGGGGGGG5YG&&#.       ^~  .......  ............P###&@@@@@G@@@@@@#&@@@@@@@@@@@@@B&@@@@@@@@@@@@@@@@@@@
                       &&&&&&GPBP5JG#&&&@&&##BBGGPGGGGGPPYB@@@@!            .....   ............:#####@@@@&#@@@@@@##@@@@@@@@@@@@##@@@@@@@@@@@@@@@@@@@@
               &&@@@&&B&@@@@PPGG#&&&&&#BGGGPPPGGGGGGGPP#&#@@&#P            .....  ..............?&#####@@@#&@@@@@@#B@@@@@@@@@@@&B@@@@@@@@@@@@@@@@@@@@@
            @@@@@@@@@@@@@&#JYPB&&&#GGPPPGPGGGGGGGGPPG&@@#&&###:            ....  ...............B######&@@G@@@@@@@#G&@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@
          B&&#####&&@@&###JPGG#BGPPPPPPPPPPGGGGPPPB&@@@&G###&J            ...  ................~########&@B@@@@@@@&G&@@@@@@@@@B&@@@@@@&@@@@@@@@@@@@@@@
         Y##&&&@@@@@&####PYGPGGPPPPPPPPPPGGGGP5G#@@@@@#5####B.            ..  .................Y#########B#@@@@@@@&G#@@@@@@@@#B@@@@@@&&@@@@@@@@@@@@@@@
        G&@@@@@@@@&#####BJGGPPPPPP5PPPPPPGGP5G&@@@@@##PG###&7            .   ..................B#########5#@@@@@@@&P#&@@@@@@&P&@@@@@&#@@@@@@@@@@@@@@@@
      B@@@@@@@@@@&######JPGPPPPP5Y5PPPPPGPYG&@@@@@&###5####G               .................  ~##########JB&@@@@@@@P##@@@@&&PB@@@@@##&@@@@@@@@@@@@@@@@
     @@@@@@@@@@@&######PYGPPPP55PPPPPPPP55J@@@@@&####PG####~              ................    5#########BJ##&@@@@@@P##&@@@BGG#@@@@BP#@@@@@@@@@@@@@@@@@
   #@@@@@@@@@@@&######B?GGP5JYPPPPPPPP5J5&5#@@&######5####G              ...............     .##########BJ###&@@@@@PB##@@&YP##@@@B5#&@@@@@@@@@@@@@@@@@
  #@@@@@@@@@@@&#######JPGY!~!PPPPPPP5YGB5#5B&&######5G####!              .............       7##########GY###B&@@@@PG#B&@G7#B#@@BYB#@@@@@@@@@@@@@@@@@@
  @@&################G?Y~^!JPPPPPPPYP##BY#5B#######BY####B               ............        P###BBBBBB#P5#B#BB&@@@BP#B#@5GBB#@#YGB&@@@@@@@@@@@@@@@@@@
  @&B################P777YPPPPPPP55B###BJ#YB#######5G####7               ..........         .##BBBBBBBB#5P#BBBBB#@@&5#BB&YBJB##YP#B&@@@@@@@@@@@@@@@@@@
  &&#################B?PPPPPPP5YYG#####BJ#JB######BY####B.               .... ...           7#BBBBBBBBB#55#BBBBBB#@@JBBBG?PJBBPYBB#@@@@@@@@@@@@@@@@@@@
  B&B#################Y5PPP555PG#######BJBJ#######5G####J                 .   ..            P#BBBBBBBBB#Y5#BBBBBBB#@YGBBG?YPBB?BBB&@@@@@@@@@@@@@@@@&&&
  ?&##################B?5Y5PGB#########BJG5######BY#####.                 .  .             .BBBBBBBBBBBBY5BBBBBBBBB#B5BBPJJGBY5BB#@@@@@@@@@@@@@&&&&&&&
   P##BBBBB##BBBB##BB##YJB####B#####BB#B?YG##B###5P####5      .~.         ...              ~#BBBBBBBBBBB55BBBBBBBBBBBJBB5??BGJBBB&@@@@@@@&&&&&&&&&&&&&
        </pre>
      </div>
     
      <div class="section">
        <h2>work</h2>

        <div class="item">

        <div class="item">
          <div class="item-header">
            <div>
              <a href="https://www.deloitte.com" class="company">Deloitte</a>
              <span class="role"> - swe</span>
            </div>
            <span class="dates">(oct '24 - present)</span>
          </div>
          <div class="description">maintaining legacy code, did not break prod.</div>
        </div>

        <div class="item">
          <div class="item-header">
            <div>
              <span class="company acquired">[startup]</span>
              <span class="role"> - swe</span>
            </div>
            <span class="dates">(jul '23 - aug '24)</span>
          </div>
          <div class="description">
            centering the div mainly. improve the ux experience of a b2b company.
          </div>
        </div>
      </div>

      <div class="coding-stats-section">
    <h2 class="section-title">
      coding stats 
      <span class="week-label">(this week)</span>
    </h2>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">time coding</div>
        <div class="stat-value" id="time-coding">--</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">main project</div>
        <div class="stat-value" id="main-project">--</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">main editor</div>
        <div class="stat-value" id="main-editor">--</div>
      </div>
      <div class="stat-card">
        <div class="stat-label">daily average</div>
        <div class="stat-value" id="daily-average">--</div>
      </div>
    </div>

    <div class="language-breakdown">
      <div class="breakdown-header"> > language breakdown</div>
      <div id="languages-list" class="loading">Loading coding stats...</div>
          <div class="section">
        <div class="project-header"> > projects</div>
        
  <div class="section">
    <h2>featured work</h2>
    <div class="featured-work-grid">
      ${getFeaturedWork()
        .map(
          (item) => `
        <div class="featured-work-item">
          ${
            item.preview
              ? `
            <div class="featured-preview">
              <img src="${item.preview}" alt="${item.title}">
            </div>
          `
              : ''
          }
          <div class="featured-content">
            <h3 style="color: var(--yellow);">${item.title}</h3>
            <p style="color: var(--comment); font-size: 0.9rem; margin: 8px 0;">
              ${item.description}
            </p>
            <div style="display: flex; gap: 8px; margin-top: 10px;">
              ${
                item.type === 'project'
                  ? item.tech
                      .slice(0, 3)
                      .map(
                        (tech) =>
                          `<span style="font-size: 11px; padding: 3px 8px; background: var(--background); color: var(--cyan); border-radius: 3px;">${tech}</span>`
                      )
                      .join('')
                  : `<span style="font-size: 11px; padding: 3px 8px; background: var(--current-line); color: var(--purple); border-radius: 3px;">${item.type}</span>`
              }
            </div>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
    <div style="text-align: center; margin-top: 20px;">
      <a href="#work" style="color: var(--cyan); text-decoration: none; font-weight: 500;">
        view all work →
      </a>
    </div>
  </div>

      </div>
    </div>

  </div>

      <div class="section">
        <h2>silly stats</h2>
        <div class="stats">
          <div class="stat-item">
            <span class="stat-label">mouse clicks</span>
            <span class="stat-value" id="clicks">0</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">mouse travel</span>
            <span class="stat-value" id="distance">0m</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">mouse scrolls</span>
            <span class="stat-value" id="scrolls">0</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">keypresses</span>
            <span class="stat-value" id="keypresses">0</span>
          </div>
        </div>
      </div>
    </div>`;
}

export function initHome() {
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
    const clicksEl = document.getElementById('clicks');
    const distanceEl = document.getElementById('distance');
    const scrollsEl = document.getElementById('scrolls');
    const keypressesEl = document.getElementById('keypresses');

    if (clicksEl) clicksEl.textContent = stats.clicks;
    if (distanceEl) distanceEl.textContent = (stats.distance / 1000).toFixed(1) + 'm';
    if (scrollsEl) scrollsEl.textContent = stats.scrolls;
    if (keypressesEl) keypressesEl.textContent = stats.keypresses;
  }

  // Track clicks
  const clickHandler = () => {
    stats.clicks++;
    updateStats();
  };
  document.addEventListener('click', clickHandler);

  // Track mouse movement
  const mouseMoveHandler = (e) => {
    if (stats.lastX !== 0 || stats.lastY !== 0) {
      const dx = e.clientX - stats.lastX;
      const dy = e.clientY - stats.lastY;
      stats.distance += Math.sqrt(dx * dx + dy * dy);
      updateStats();
    }
    stats.lastX = e.clientX;
    stats.lastY = e.clientY;
  };
  document.addEventListener('mousemove', mouseMoveHandler);

  // Track scrolling
  const scrollHandler = () => {
    stats.scrolls++;
    updateStats();
  };
  document.addEventListener('wheel', scrollHandler);

  // Track keypresses
  const keydownHandler = () => {
    stats.keypresses++;
    updateStats();
  };
  document.addEventListener('keydown', keydownHandler);

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

    if (statusSpan) {
      statusSpan.style.opacity = 0;

      setTimeout(() => {
        statusIndex = (statusIndex + 1) % currentStatuses.length;
        statusSpan.textContent = currentStatuses[statusIndex];
        statusSpan.style.opacity = 1;
      }, 250);
    }
  }

  // Start status rotation
  function startStatusRotation() {
    if (statusRotationInterval) {
      clearInterval(statusRotationInterval);
    }
    statusIndex = 0;
    if (statusSpan) {
      statusSpan.textContent = isOnline ? onlineStatuses[0] : offlineStatuses[0];
    }
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
      if (hoursSince < 1) {
        updateOnlineStatus(true);
      } else {
        updateOnlineStatus(false);
      }
    } catch (error) {
      console.error('Error fetching GitHub status:', error);
      updateOnlineStatus(false);
      if (statusDot) {
        statusDot.style.backgroundColor = 'var(--red)';
      }
    }
  }

  // Update online status
  function updateOnlineStatus(online) {
    const wasOnline = isOnline;
    isOnline = online;

    // Update dot color
    if (statusDot) {
      if (isOnline) {
        statusDot.style.backgroundColor = 'var(--green)';
      } else {
        statusDot.style.backgroundColor = 'var(--comment)';
      }
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
  const githubInterval = setInterval(fetchGitHubStatus, 5 * 60 * 1000);

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
    const username = 'rffgrayson';

    try {
      const response = await fetch(
        `https://wakatime.com/api/v1/users/${username}/stats/last_7_days`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch stats');
      }

      const data = await response.json();

      // Update summary stats
      const timeCoding = document.getElementById('time-coding');
      const mainProject = document.getElementById('main-project');
      const mainEditor = document.getElementById('main-editor');
      const dailyAverage = document.getElementById('daily-average');

      if (timeCoding) timeCoding.textContent = data.data.human_readable_total || '0h 0m';
      if (mainProject) mainProject.textContent = data.data.projects[0]?.name || 'N/A';
      if (mainEditor) mainEditor.textContent = data.data.editors[0]?.name || 'N/A';
      if (dailyAverage)
        dailyAverage.textContent = data.data.human_readable_daily_average || '0h 0m';

      // Update language breakdown
      const languagesList = document.getElementById('languages-list');

      if (languagesList) {
        if (data.data.languages && data.data.languages.length > 0) {
          languagesList.innerHTML = data.data.languages
            .slice(0, 5)
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
      }
    } catch (error) {
      console.error('Error fetching WakaTime stats:', error);

      // Fallback data
      const timeCoding = document.getElementById('time-coding');
      const mainProject = document.getElementById('main-project');
      const mainEditor = document.getElementById('main-editor');
      const dailyAverage = document.getElementById('daily-average');
      const languagesList = document.getElementById('languages-list');

      if (timeCoding) timeCoding.textContent = '5h 12m';
      if (mainProject) mainProject.textContent = 'WebKaiser';
      if (mainEditor) mainEditor.textContent = 'VS Code';
      if (dailyAverage) dailyAverage.textContent = '1h 05m';

      if (languagesList) {
        languagesList.innerHTML = `
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
  }

  // Fetch stats on load
  fetchWakaTimeStats();

  // Refresh every 5 minutes
  const wakatimeInterval = setInterval(fetchWakaTimeStats, 5 * 60 * 1000);

  // Toggle language breakdown
  const breakdownHeader = document.querySelector('.breakdown-header');
  if (breakdownHeader) {
    breakdownHeader.addEventListener('click', function () {
      const list = document.getElementById('languages-list');
      if (list) {
        if (list.style.display === 'none') {
          list.style.display = 'block';
          this.textContent = '› language breakdown';
        } else {
          list.style.display = 'none';
          this.textContent = '˅ language breakdown';
        }
      }
    });
  }

  // Cleanup function - call this when navigating away from home
  return function cleanup() {
    document.removeEventListener('click', clickHandler);
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('wheel', scrollHandler);
    document.removeEventListener('keydown', keydownHandler);

    if (statusRotationInterval) clearInterval(statusRotationInterval);
    if (githubInterval) clearInterval(githubInterval);
    if (wakatimeInterval) clearInterval(wakatimeInterval);
  };
}
