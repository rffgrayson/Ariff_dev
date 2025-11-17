 // Stats tracking
        let stats = {
            clicks: 0,
            distance: 0,
            scrolls: 0,
            keypresses: 0,
            lastX: 0,
            lastY: 0
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

        // Status animation
        const statusElement = document.querySelector('.status');
        const statuses = ['online...', 'coding...', 'thinking...', 'building...'];
        let statusIndex = 0;
        
        setInterval(() => {
            statusIndex = (statusIndex + 1) % statuses.length;
            statusElement.textContent = statuses[statusIndex];
        }, 3000);