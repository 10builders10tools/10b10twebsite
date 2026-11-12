function copyIP(event) {
    const btn = (event && event.currentTarget) || document.querySelector('.copy-btn');

    const flash = (msg) => {
        if (!btn) return;
        const original = btn.dataset.label || btn.textContent;
        btn.dataset.label = original;
        btn.textContent = msg;
        setTimeout(() => { btn.textContent = btn.dataset.label; }, 2000);
    };

    // navigator.clipboard is undefined outside a secure context (e.g. file://)
    if (!navigator.clipboard) {
        flash('Copy failed');
        return;
    }

    navigator.clipboard.writeText('10b10t.com')
        .then(() => flash('Copied!'))
        .catch(() => flash('Copy failed'));
}

const serverMOTDs = [
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">a rubber room with a singular rat</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Im so lonely</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">what did someone steal your sweet roll?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">what rhymes with hug me?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">hen tie or smth</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">ShitBob?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Crazy?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">What are you crying?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">You already know what time it is</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Eat shit asshole, fall of your horse</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Like an abuisive relationship</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #fbbf24;">10B</span> <span style="color: #fbbf24;">An Aternos server</span><br> <span style="color: #60a5fa;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">furry nigga ass</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">What did Osama do wrong?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">A 2b2t Clone</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">FAGGOT!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">/kill yourself (wittawwawy)</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">JOIN. BUILD. SUFFER. LEAVE</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #16a1b5;">Just like 2b2t.</span> <span style="color: #ef4444;">But mentally ill</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">2b2t is dead.</span> <span style="color: #f1f5f9;">10b10t killed it and fucked the corpse.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #f1f5f9;">Your base will burn. Your logs will be read.</span> <span style="color: #ef4444;">Smile for the audit.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Abandon hope, ye who play here.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">blackcatsneaky56 is the owner</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">An SMP server</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">swiftesz is the best player (hes not a swifte)</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">X: -67676 Z: 67676</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">as_s loves you ❤️</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">An LGBT smp</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Fernando exists in a pocket dimension</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">how do i make donkeys fuck again? -BeetenMC</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">real men dont rape? oh shit must have been toast then.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">FORTNITE BALLS IM GAY I LIKE BOYS LIL MOSEY IS WHITE</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">TOAST, HELP! LAZ IS STUCK ON THE ROOF AGAIN!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Severe miscount</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">cell wall simplicity player versus player</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">youtube watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Bart more like Fart</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">wheres the original highway crew</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Aiden is a tranny</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">grief this, bitch!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">The Youngest Anarchy Server, EVER! - fitmc</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">let me get uhhhhhhhhhh</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">soek eats sand</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">i have no idea bruh</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">like 2b2t but just a bit more soft spoken</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">slow children at play</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">ali has a hot sister</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">808 mafia</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">The F students are invetors</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #ef4444;">No /tpa no /sethome just pure gay sex</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">?kit</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">nonprofit weed factory</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">all donations go towards toasted avacodos addiction to marijauana</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">dont feed the griefers</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #8b0000;">Repetition is the father of learning.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Is Fit innocent?</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Stay.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Ye - HH</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Ye - Cousins</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Try the cactus dupe.</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Do Not Fuck The Animals, Thank You!</span><br> <span style="color: #fbbf24;">10T</span>',
    '<span style="color: #60a5fa;">10B</span> <span style="color: #fbbf24;">Dont turn left</span><br> <span style="color: #fbbf24;">10T</span>'
];

function updateHeroMOTD() {
    const randomMOTD = serverMOTDs[Math.floor(Math.random() * serverMOTDs.length)];
    const subtitleEl = document.querySelector('.hero-subtitle');
    if (subtitleEl) {
        subtitleEl.innerHTML = randomMOTD;
    }
}

// The "not found" page picks a death message for the missing page
const DEATH_MESSAGES = [
    'This page fell out of the world',
    'This page was blown up by a creeper',
    'This page tried to swim in lava',
    'This page was slain by a broken link',
    'This page hit the ground too hard',
    'This page was griefed',
    'This page was killed by an end crystal',
    'This page drowned',
    'This page went off with a bang',
    'This page starved to death',
    'This page was pricked to death',
    'This page walked into the void'
];

function updateDeathMessage() {
    const el = document.getElementById('death-message');
    if (el) el.textContent = DEATH_MESSAGES[Math.floor(Math.random() * DEATH_MESSAGES.length)];
}

// Built-in images, then any uploaded from the admin page (listed in
// /uploads/gallery.json, which the admin service maintains on the VPS)
const builtInGallery = [
    'spawn_render.png',
    'portal.png',
    'spawn.png',
    'cave.png',
    'chamber.png',
    'theend.png'
];

let galleryImages = builtInGallery.map(name => ({
    src: `/images/${name}`,
    thumb: `/images/${name}`,
    alt: name.replace('.png', '').replace('_', ' '),
    caption: ''
}));

const UPLOAD_PATH = /^\/uploads\/gallery\/[0-9a-f]{24}(-t)?\.webp$/;

function renderGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;
    container.textContent = '';

    galleryImages.forEach((img, index) => {
        // Still a real link, so ctrl/middle-click can open the file in a tab on purpose
        const item = document.createElement('a');
        item.href = img.src;
        item.className = 'gallery-item';
        item.addEventListener('click', e => {
            if (e.ctrlKey || e.metaKey || e.shiftKey || e.button !== 0) return;
            e.preventDefault();
            openViewer(index, item);
        });

        const image = document.createElement('img');
        image.src = img.thumb;
        image.alt = img.alt;
        image.loading = 'lazy';

        item.appendChild(image);
        container.appendChild(item);
    });
}

async function loadUploadedImages() {
    try {
        const response = await fetch('/uploads/gallery.json', { cache: 'no-cache' });
        if (!response.ok) return;
        const data = await response.json();
        const uploaded = (Array.isArray(data.images) ? data.images : [])
            .filter(img => img && UPLOAD_PATH.test(img.url) && UPLOAD_PATH.test(img.thumb))
            .map(img => {
                const caption = typeof img.caption === 'string' ? img.caption.slice(0, 140) : '';
                return { src: img.url, thumb: img.thumb, alt: caption || 'Gallery image', caption };
            });
        if (!uploaded.length) return;
        galleryImages = galleryImages.concat(uploaded);
        renderGallery();
    } catch (e) {
        /* no uploads list (e.g. local preview): the built-in images are enough */
    }
}

// ---------- News posted from the admin page ----------
// /uploads/news.json is written by the admin service on the VPS. Its posts go
// above the ones built into the page. Plain text only.

const NEWS_ICONS = {
    server: '⚙', protection: '⛨', website: '▦', dupe: '⧉', change: '⧨', rules: '§', general: '✎'
};
const NEWS_MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function newsDate(ymd) {
    // Built from the parts, so a visitor's time zone cannot move the day
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(ymd || '');
    if (!m || Number(m[2]) < 1 || Number(m[2]) > 12) return null;
    return `${NEWS_MONTHS[Number(m[2]) - 1]} ${Number(m[3])}, ${m[1]}`;
}

async function loadNews() {
    const list = document.querySelector('#news .toast-list');
    if (!list) return;
    try {
        const response = await fetch('/uploads/news.json', { cache: 'no-cache' });
        if (!response.ok) return;
        const data = await response.json();
        const posts = (Array.isArray(data.posts) ? data.posts : []).slice(0, 200);
        const fragment = document.createDocumentFragment();
        for (const post of posts) {
            const date = newsDate(post && post.date);
            const glyph = post && NEWS_ICONS[post.icon];
            if (!date || !glyph || typeof post.title !== 'string' || typeof post.body !== 'string') continue;

            const article = document.createElement('article');
            article.className = 'toast';
            const icon = document.createElement('span');
            icon.className = 'toast-icon';
            icon.textContent = glyph;
            const body = document.createElement('div');
            body.className = 'toast-body';
            const title = document.createElement('h3');
            title.textContent = post.title.slice(0, 100);
            const text = document.createElement('p');
            text.className = 'toast-text';
            text.textContent = post.body.slice(0, 2000);
            body.append(title, text);
            const when = document.createElement('span');
            when.className = 'toast-date';
            when.textContent = date;
            article.append(icon, body, when);
            fragment.appendChild(article);
        }
        list.prepend(fragment);
    } catch (e) {
        /* no news file (e.g. local preview): the built-in posts are enough */
    }
}

function initGallery() {
    if (!document.getElementById('gallery-container')) return;
    renderGallery();
    loadUploadedImages();
}

// ---------- Image viewer ----------

let viewer = null;
let viewerIndex = 0;
let viewerReturnFocus = null;

function buildViewer() {
    const el = document.createElement('div');
    el.className = 'viewer';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Image viewer');
    el.hidden = true;
    el.innerHTML = `
        <div class="viewer-frame">
            <img class="viewer-img" alt="">
            <p class="viewer-caption" hidden></p>
            <div class="viewer-bar">
                <button type="button" class="viewer-btn viewer-prev" aria-label="Previous image">&#9664;</button>
                <span class="viewer-count"></span>
                <button type="button" class="viewer-btn viewer-next" aria-label="Next image">&#9654;</button>
                <button type="button" class="viewer-btn viewer-close" aria-label="Close">&#10005;</button>
            </div>
        </div>`;
    document.body.appendChild(el);

    el.querySelector('.viewer-prev').addEventListener('click', () => stepViewer(-1));
    el.querySelector('.viewer-next').addEventListener('click', () => stepViewer(1));
    el.querySelector('.viewer-close').addEventListener('click', closeViewer);
    // Tapping the dark backdrop (not the picture or the buttons) closes it
    el.addEventListener('click', e => { if (e.target === el) closeViewer(); });

    // Swipe left/right on touch screens
    let startX = null, startY = 0;
    el.addEventListener('touchstart', e => {
        if (e.touches.length !== 1) { startX = null; return; }
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
    }, { passive: true });
    el.addEventListener('touchend', e => {
        if (startX === null) return;
        const dx = e.changedTouches[0].clientX - startX;
        const dy = e.changedTouches[0].clientY - startY;
        startX = null;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) stepViewer(dx < 0 ? 1 : -1);
    });

    document.addEventListener('keydown', e => {
        if (!viewer || viewer.hidden) return;
        if (e.key === 'Escape') closeViewer();
        else if (e.key === 'ArrowLeft') stepViewer(-1);
        else if (e.key === 'ArrowRight') stepViewer(1);
        else if (e.key === 'Tab') {
            // keep keyboard focus inside the viewer while it is open
            const buttons = [...viewer.querySelectorAll('button')];
            const i = buttons.indexOf(document.activeElement);
            const next = e.shiftKey ? (i <= 0 ? buttons.length - 1 : i - 1) : (i + 1) % buttons.length;
            buttons[next].focus();
            e.preventDefault();
        }
    });

    return el;
}

function showViewerImage() {
    const entry = galleryImages[viewerIndex];
    const img = viewer.querySelector('.viewer-img');
    img.src = entry.src;
    img.alt = entry.alt;
    const caption = viewer.querySelector('.viewer-caption');
    caption.textContent = entry.caption;
    caption.hidden = !entry.caption;
    viewer.querySelector('.viewer-count').textContent = `${viewerIndex + 1} / ${galleryImages.length}`;
}

function openViewer(index, returnFocus) {
    if (!viewer) viewer = buildViewer();
    viewerIndex = index;
    viewerReturnFocus = returnFocus || null;
    showViewerImage();
    viewer.hidden = false;
    document.body.classList.add('viewer-open');
    viewer.querySelector('.viewer-close').focus();
}

function stepViewer(delta) {
    viewerIndex = (viewerIndex + delta + galleryImages.length) % galleryImages.length;
    showViewerImage();
}

function closeViewer() {
    if (!viewer || viewer.hidden) return;
    viewer.hidden = true;
    document.body.classList.remove('viewer-open');
    if (viewerReturnFocus) viewerReturnFocus.focus();
}

function setStatusDot(state) {
    const dot = document.getElementById('status-dot');
    if (dot) dot.className = `dot ${state}`;

    const bars = document.getElementById('ping-bars');
    if (bars) bars.className = `ping-bars ${state}`;
}

// Accounts left out of the public player list and online count
const HIDDEN_PLAYERS = ['toastedavacado'];

function isHiddenPlayer(name) {
    return HIDDEN_PLAYERS.includes(String(name || '').toLowerCase());
}

function visiblePlayerCount(data) {
    const hidden = Array.isArray(data.players_list)
        ? data.players_list.filter(p => p && isHiddenPlayer(p.name)).length
        : 0;
    return Math.max(0, (data.players_online || 0) - hidden);
}

async function updateServerStatus() {
    const API = 'https://api.10b10t.com';

    // terms.html / privacy.html share this script but have no status readout
    const statusEl = document.getElementById('server-status');
    if (!statusEl) return;

    try {
        const response = await fetch(`${API}/api/stats`);
        const data = await response.json();

        const playerCountEl = document.getElementById('player-count');
        const tpsEl = document.getElementById('server-tps');

        if (data.online) {
            statusEl.textContent = 'Online';
            statusEl.className = 'status-value online';
            setStatusDot('online');

            if (playerCountEl) {
                playerCountEl.textContent = `${visiblePlayerCount(data)} / ${data.players_max}`;
            }

            recordSample(visiblePlayerCount(data));

            if (tpsEl) {
                const tps = data.tps.toFixed(1);
                tpsEl.textContent = `${tps} TPS`;
                
                if (data.tps >= 19.5) {
                    tpsEl.style.color = '#00ff00';
                } else if (data.tps >= 18) {
                    tpsEl.style.color = '#ffaa00';
                } else {
                    tpsEl.style.color = '#ff0000';
                }
            }
            
            const stats = document.querySelectorAll('.stat');
            stats.forEach(stat => {
                const label = stat.querySelector('.stat-label');
                if (label && label.textContent === 'World Size') {
                    const valueEl = stat.querySelector('.stat-value');
                    if (valueEl && data.world_size_gb) {
                        valueEl.textContent = `${data.world_size_gb.toFixed(1)}GB`;
                    }
                }
                if (label && label.textContent === 'Unique Players') {
                    const valueEl = stat.querySelector('.stat-value');
                    if (valueEl && data.players_total) {
                        valueEl.textContent = `${data.players_total.toLocaleString()}+`;
                    }
                }
                if (label && label.textContent === 'Uptime') {
                    const valueEl = stat.querySelector('.stat-value');
                    if (valueEl && data.total_uptime_days) {
                        valueEl.textContent = `${data.total_uptime_days} days`;
                    }
                }
            });
            
        } else {
            statusEl.textContent = 'Offline';
            statusEl.className = 'status-value offline';
            setStatusDot('offline');
            if (playerCountEl) playerCountEl.textContent = '0 / 0';
            if (tpsEl) tpsEl.textContent = '-';
            recordSample(0);
        }

        await updatePlayerList(API);

    } catch (error) {
        console.error('Failed to fetch server status:', error);
        const statusEl = document.getElementById('server-status');
        if (statusEl) {
            statusEl.textContent = 'Error';
            statusEl.className = 'status-value offline';
        }
        setStatusDot('offline');
    }
}

// ---------- Player graph ----------
// History comes from the API's /api/history when it is available. If it is
// not (older API, or a failed request), history is built up in the visitor's
// browser from the regular status polls instead. Either way it covers 24 hours
// and new samples from the status poll are added live.
// A sample is { t, n }: time and visible player count.

const GRAPH_API = 'https://api.10b10t.com';
const GRAPH_KEY = '10b10t-player-history';
const GRAPH_WINDOW = 24 * 60 * 60 * 1000;
const GRAPH_GAP = 5 * 60 * 1000;      // longer than this between samples = no data in between
const GRAPH_MIN_SPAN = 10 * 60 * 1000;
const SVG_NS = 'http://www.w3.org/2000/svg';

const GRAPHS = [
    {
        plotId: 'player-graph',
        prefix: 'graph',
        name: 'Online players',
        value: s => s.n,
        format: v => String(Math.round(v)),
        tip: v => `${v} ${v === 1 ? 'player' : 'players'}`
    }
];

function validSample(s) {
    return s && Number.isFinite(s.t) && Number.isFinite(s.n);
}

function loadLocalHistory() {
    try {
        const raw = JSON.parse(localStorage.getItem(GRAPH_KEY) || '[]');
        const cutoff = Date.now() - GRAPH_WINDOW;
        return Array.isArray(raw) ? raw.filter(s => validSample(s) && s.t >= cutoff) : [];
    } catch (e) {
        return [];
    }
}

// Set once /api/history answers; null means the browser-recorded fallback is in use
let serverHistory = null;

function currentHistory() {
    return serverHistory || loadLocalHistory();
}

async function loadServerHistory() {
    try {
        const response = await fetch(`${GRAPH_API}/api/history?range=24h`);
        if (!response.ok) return;
        const data = await response.json();
        if (!data || !Array.isArray(data.points)) return;

        const cutoff = Date.now() - GRAPH_WINDOW;
        const points = data.points
            .filter(p => Array.isArray(p) && Number.isFinite(p[0]) && Number.isFinite(p[1]) && p[0] >= cutoff)
            .map(p => ({ t: p[0], n: p[1] }))
            .sort((a, b) => a.t - b.t);

        // Keep any live samples that arrived while the request was in flight
        const newest = points.length ? points[points.length - 1].t : 0;
        const pending = serverHistory ? serverHistory.filter(s => s.t > newest) : [];
        serverHistory = points.concat(pending);

        GRAPHS.forEach(cfg => {
            const plot = document.getElementById(cfg.plotId);
            const note = plot && plot.parentElement.querySelector('.graph-note');
            if (note && points.some(s => Number.isFinite(cfg.value(s)))) {
                note.textContent = 'Last 24 hours, updated every minute.';
            }
        });
        renderGraphs();
    } catch (e) {
        /* API without history support: stay on the browser-recorded graph */
    }
}

function recordSample(count) {
    if (!Number.isFinite(count)) return;
    const now = Date.now();
    const sample = { t: now, n: count };

    if (serverHistory) {
        const last = serverHistory[serverHistory.length - 1];
        if (last && now - last.t < 30000) {
            serverHistory[serverHistory.length - 1] = { ...sample, t: last.t };
        } else {
            serverHistory.push(sample);
        }
        const cutoff = now - GRAPH_WINDOW;
        while (serverHistory.length && serverHistory[0].t < cutoff) serverHistory.shift();
        renderGraphs();
        return;
    }

    const history = loadLocalHistory();
    const last = history[history.length - 1];

    // Several open tabs poll independently; fold near-duplicate samples together
    if (last && now - last.t < 20000) {
        history[history.length - 1] = sample;
    } else {
        history.push(sample);
    }

    try {
        localStorage.setItem(GRAPH_KEY, JSON.stringify(history));
    } catch (e) { /* storage full or disabled: graph still works for this visit */ }

    renderGraphs();
}

function formatClock(t) {
    return new Date(t).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function svgEl(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    for (const k in attrs) el.setAttribute(k, attrs[k]);
    return el;
}

function graphStep(peak) {
    const steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500];
    return steps.find(s => peak / s <= 3) || 1000;
}

function setGraphText(id, text) {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
}

function renderGraphs() {
    const history = currentHistory();
    GRAPHS.forEach(cfg => renderGraph(cfg, history));
}

function renderGraph(cfg, history) {
    const plot = document.getElementById(cfg.plotId);
    if (!plot) return;

    const series = history
        .filter(s => Number.isFinite(cfg.value(s)))
        .map(s => ({ t: s.t, v: cfg.value(s) }));
    const id = name => `${cfg.prefix}-${name}`;

    // Stats
    if (series.length) {
        let peak = series[0], low = series[0], sum = 0;
        series.forEach(s => {
            sum += s.v;
            if (s.v >= peak.v) peak = s;
            if (s.v <= low.v) low = s;
        });
        const avg = sum / series.length;
        const latestV = series[series.length - 1].v;
        setGraphText(id('now'), cfg.format(latestV));
        setGraphText(id('avg'), cfg.format(avg));
        setGraphText(id('peak'), cfg.format(peak.v));
        setGraphText(id('peak-when'), `at ${formatClock(peak.t)}`);
        setGraphText(id('low'), cfg.format(low.v));
        setGraphText(id('low-when'), `at ${formatClock(low.t)}`);

        const span = Date.now() - series[0].t;
        const mins = Math.max(1, Math.round(span / 60000));
        setGraphText(id('range'), span >= GRAPH_WINDOW - 60000 ? 'last 24h'
            : mins < 60 ? `last ${mins}m` : `last ${Math.floor(mins / 60)}h ${mins % 60}m`);

        plot.setAttribute('aria-label',
            `${cfg.name} over time. Now ${cfg.format(latestV)}, average ${cfg.format(avg)}, peak ${cfg.format(peak.v)}, low ${cfg.format(low.v)}.`);
    }

    const w = plot.clientWidth;
    const h = plot.clientHeight;
    plot.innerHTML = '';
    if (!w || !h) return;   // hidden view; ResizeObserver redraws when it is shown

    if (series.length < 2) {
        const msg = document.createElement('div');
        msg.className = 'graph-empty';
        msg.textContent = 'Collecting data, check back in a few minutes';
        plot.appendChild(msg);
        if (!series.length) return;
    }

    const m = { top: 10, right: 44, bottom: 20, left: 30 };
    const iw = w - m.left - m.right;
    const ih = h - m.top - m.bottom;

    const t1 = Date.now();
    let t0 = Math.max(series[0].t, t1 - GRAPH_WINDOW);
    if (t1 - t0 < GRAPH_MIN_SPAN) t0 = t1 - GRAPH_MIN_SPAN;

    const peakV = Math.max(...series.map(s => s.v));
    const step = graphStep(Math.max(peakV, 3));
    const yMax = step * (Math.floor(peakV / step) + 1);

    const x = t => m.left + ((t - t0) / (t1 - t0)) * iw;
    const y = v => m.top + ih - (Math.min(v, yMax) / yMax) * ih;

    const svg = svgEl('svg', { class: 'graph-svg', width: w, height: h, viewBox: `0 0 ${w} ${h}` });

    // Grid and y labels
    for (let v = 0; v <= yMax; v += step) {
        svg.appendChild(svgEl('line', { class: 'graph-grid', x1: m.left, x2: m.left + iw, y1: y(v), y2: y(v) }));
        const label = svgEl('text', { x: m.left - 6, y: y(v) + 3, 'text-anchor': 'end' });
        label.textContent = v;
        svg.appendChild(label);
    }

    // X labels: start, middle, now
    [[t0, 'start'], [(t0 + t1) / 2, 'middle']].forEach(([t, anchor]) => {
        const label = svgEl('text', { x: x(t), y: h - 4, 'text-anchor': anchor });
        label.textContent = formatClock(t);
        svg.appendChild(label);
    });
    const nowLabel = svgEl('text', { x: m.left + iw, y: h - 4, 'text-anchor': 'end' });
    nowLabel.textContent = 'now';
    svg.appendChild(nowLabel);

    // Split into segments wherever there is no data, so gaps are not drawn as data
    const segments = [];
    series.forEach((s, i) => {
        if (i === 0 || s.t - series[i - 1].t > GRAPH_GAP) segments.push([]);
        segments[segments.length - 1].push(s);
    });

    segments.forEach(seg => {
        if (seg.length === 1) {
            svg.appendChild(svgEl('circle', { class: 'graph-dot', cx: x(seg[0].t), cy: y(seg[0].v), r: 3 }));
            return;
        }
        const line = seg.map((s, i) => `${i ? 'L' : 'M'}${x(s.t).toFixed(1)},${y(s.v).toFixed(1)}`).join('');
        const area = `${line}L${x(seg[seg.length - 1].t).toFixed(1)},${y(0)}L${x(seg[0].t).toFixed(1)},${y(0)}Z`;
        svg.appendChild(svgEl('path', { class: 'graph-area', d: area }));
        svg.appendChild(svgEl('path', { class: 'graph-line', d: line }));
    });

    // Average line, labelled in the right gutter
    const avg = series.reduce((a, s) => a + s.v, 0) / series.length;
    svg.appendChild(svgEl('line', { class: 'graph-avg', x1: m.left, x2: m.left + iw, y1: y(avg), y2: y(avg) }));
    const avgLabel = svgEl('text', { class: 'graph-avg-label', x: m.left + iw + 6, y: y(avg) + 3 });
    avgLabel.textContent = 'avg';
    svg.appendChild(avgLabel);

    // Latest point
    const latest = series[series.length - 1];
    svg.appendChild(svgEl('circle', { class: 'graph-latest', cx: x(latest.t), cy: y(latest.v), r: 4 }));

    // Hover crosshair
    const cross = svgEl('line', { class: 'graph-cross', y1: m.top, y2: m.top + ih, visibility: 'hidden' });
    const crossDot = svgEl('circle', { class: 'graph-latest', r: 4, visibility: 'hidden' });
    svg.appendChild(cross);
    svg.appendChild(crossDot);

    const tip = document.createElement('div');
    tip.className = 'graph-tip';
    const tipVal = document.createElement('strong');
    const tipTime = document.createElement('span');
    tip.append(tipVal, tipTime);

    const showAt = e => {
        const rect = svg.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const t = t0 + ((px - m.left) / iw) * (t1 - t0);
        let best = series[0];
        for (const s of series) if (Math.abs(s.t - t) < Math.abs(best.t - t)) best = s;

        const cx = x(best.t), cy = y(best.v);
        cross.setAttribute('x1', cx);
        cross.setAttribute('x2', cx);
        crossDot.setAttribute('cx', cx);
        crossDot.setAttribute('cy', cy);
        cross.setAttribute('visibility', 'visible');
        crossDot.setAttribute('visibility', 'visible');

        tipVal.textContent = cfg.tip(best.v);
        tipTime.textContent = formatClock(best.t);
        tip.style.display = 'block';
        const left = Math.min(Math.max(cx - tip.offsetWidth / 2, 0), w - tip.offsetWidth);
        tip.style.left = `${left}px`;
        tip.style.top = `${Math.max(cy - tip.offsetHeight - 10, 0)}px`;
    };
    // pointerdown so a tap on a phone shows the value too
    svg.addEventListener('pointermove', showAt);
    svg.addEventListener('pointerdown', showAt);
    svg.addEventListener('pointerleave', () => {
        cross.setAttribute('visibility', 'hidden');
        crossDot.setAttribute('visibility', 'hidden');
        tip.style.display = 'none';
    });

    plot.appendChild(svg);
    plot.appendChild(tip);
}

function initGraphs() {
    const plots = GRAPHS.map(cfg => document.getElementById(cfg.plotId)).filter(Boolean);
    if (!plots.length) return;
    renderGraphs();
    loadServerHistory();
    if ('ResizeObserver' in window) {
        let lastW = 0;
        new ResizeObserver(entries => {
            const cw = Math.round(entries[0].contentRect.width);
            if (cw !== lastW) {
                lastW = cw;
                renderGraphs();
            }
        }).observe(plots[0]);
    }
}

async function updatePlayerList(api) {
    try {
        const response = await fetch(`${api}/api/players`);
        const data = await response.json();
        
        const playerListEl = document.getElementById('player-list');
        if (!playerListEl) return;
        
        const players = Array.isArray(data.players)
            ? data.players.filter(p => p && !isHiddenPlayer(p.name))
            : [];

        if (data.online && players.length > 0) {
            playerListEl.innerHTML = '';
            players.forEach(player => {
                const playerItem = document.createElement('div');
                playerItem.className = 'player-item';
                
                const head = document.createElement('img');
                head.src = `https://crafatar.com/avatars/${player.uuid}?size=48&overlay`;
                head.alt = player.name;
                head.className = 'player-head';
                head.onerror = function() {
                    this.src = `https://mc-heads.net/avatar/${player.name}/48`;
                };
                
                const name = document.createElement('div');
                name.className = 'player-name';
                name.textContent = player.name;
                
                const ping = document.createElement('div');
                ping.className = 'player-ping';
                ping.textContent = `${player.ping}ms`;
                ping.style.fontSize = '0.75rem';
                ping.style.color = 'var(--text-muted)';
                
                playerItem.appendChild(head);
                playerItem.appendChild(name);
                playerItem.appendChild(ping);
                playerListEl.appendChild(playerItem);
            });
        } else {
            playerListEl.innerHTML = '<div style="color: var(--text-muted); text-align: center; padding: 1rem;">No players online</div>';
        }
    } catch (error) {
        console.error('Failed to fetch player list:', error);
    }
}

function scrollChatToBottom() {
    const chatContainer = document.getElementById('live-chat');
    if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function updateLiveChat() {
    const API = 'https://api.10b10t.com';

    const chatContainer = document.getElementById('live-chat');
    if (!chatContainer) return;

    try {
        const response = await fetch(`${API}/api/chat`);
        const data = await response.json();

        if (data.online && data.messages && data.messages.length > 0) {
            chatContainer.innerHTML = '';
            
            data.messages.slice(0, 20).reverse().forEach(msg => {
                const msgEl = document.createElement('div');
                msgEl.className = 'chat-message';
                
                const timestamp = new Date(msg.timestamp);
                const timeStr = timestamp.toLocaleTimeString('en-US', { 
                    hour12: false,
                    hour: '2-digit', 
                    minute: '2-digit',
                    second: '2-digit'
                });
                
                msgEl.innerHTML = `
                    <span class="chat-time">[${timeStr}]</span>
                    <img src="https://mc-heads.net/avatar/${msg.uuid}/16" class="chat-head" alt="${msg.player}">
                    <span class="chat-player">&lt;${msg.player}&gt;</span>
                    <span class="chat-text">${escapeHtml(msg.message)}</span>
                `;
                
                chatContainer.appendChild(msgEl);
            });
            
            scrollChatToBottom();
        } else {
            chatContainer.innerHTML = '<div style="color: #888888; padding: 1rem; font-family: Courier New, monospace;">[INFO] No recent chat messages</div>';
        }
    } catch (error) {
        console.error('Failed to fetch chat:', error);
        chatContainer.innerHTML = '<div style="color: #FF5555; padding: 1rem; font-family: Courier New, monospace;">[ERROR] Failed to connect to server console</div>';
    }
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

/* View router. One view is visible at a time; the hash is the source of
   truth so inbound links from terms.html/privacy.html land correctly. */
const VIEW_TITLES = {
    home: 'Main Menu',
    server: 'Multiplayer',
    dupes: 'Dupes',
    news: 'News',
    gallery: 'Gallery',
    about: 'Statistics',
    donate: 'Support the Server'
};

// Old anchors that no longer have their own screen
const VIEW_ALIASES = {
    chat: 'server'
};

// Clean URLs: www.10b10t.com/news instead of index.html#news.
// The VPS serves index.html for exactly these paths.
const ROUTES = {
    '/': 'home',
    '/server': 'server',
    '/dupes': 'dupes',
    '/news': 'news',
    '/gallery': 'gallery',
    '/stats': 'about',
    '/donate': 'donate'
};
// What search engines show for each screen
const VIEW_DESCRIPTIONS = {
    home: '10b10t - A Minecraft anarchy server with a never-ending world since May 2025',
    server: 'Live 10b10t server status: who is online, the player count graph and live chat.',
    dupes: 'Dupes on 10b10t, the Minecraft anarchy server, and how to do them.',
    news: 'News and updates from 10b10t, the Minecraft anarchy server.',
    gallery: 'Screenshots from 10b10t, the Minecraft anarchy server.',
    about: '10b10t statistics: world size, unique players and uptime.',
    donate: 'Support 10b10t, the Minecraft anarchy server, and get cosmetic rewards.'
};
const VIEW_PATHS = Object.fromEntries(Object.entries(ROUTES).map(([path, view]) => [view, path]));
const PATH_ALIASES = { '/about': '/stats', '/chat': '/server', '/index.html': '/', '/home': '/' };

function cleanPath(pathname) {
    let path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
    return PATH_ALIASES[path] || path;
}

function showView(id) {
    const target = VIEW_ALIASES[id] || id;
    const view = document.getElementById(target);

    if (!view || !view.classList.contains('view')) {
        if (target !== 'home') showView('home');
        return;
    }

    document.querySelectorAll('.view').forEach(v => {
        v.classList.toggle('active', v === view);
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === VIEW_PATHS[target]);
    });

    document.title = target === 'home'
        ? '10b10t - Minecraft Anarchy Server'
        : `${VIEW_TITLES[target] || target} - 10b10t`;

    // Each screen is its own page to search engines
    const path = VIEW_PATHS[target];
    if (path) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement('link');
            canonical.rel = 'canonical';
            document.head.appendChild(canonical);
        }
        canonical.href = `https://www.10b10t.com${path}`;
        const description = document.querySelector('meta[name="description"]');
        if (description && VIEW_DESCRIPTIONS[target]) description.content = VIEW_DESCRIPTIONS[target];
    }

    const title = document.getElementById('view-title');
    if (title) title.textContent = VIEW_TITLES[target] || target;

    window.scrollTo({ top: 0, behavior: 'auto' });

    // scrollHeight is 0 while a screen is hidden, so pin the chat once visible
    if (target === 'server') scrollChatToBottom();
}

function routeFromLocation() {
    showView(ROUTES[cleanPath(location.pathname)] || 'home');
}

// Moves to a screen without reloading the page
function goTo(path) {
    if (path !== location.pathname) history.pushState(null, '', path);
    routeFromLocation();
}

function initRouter() {
    // Only the main page has screens; the legal pages keep normal links
    if (!document.getElementById('home')) {
        const legal = /^\/(terms|privacy)\.html$/.exec(location.pathname);
        if (legal) history.replaceState(null, '', `/${legal[1]}${location.search}${location.hash}`);
        return;
    }

    // Old links (index.html#news, /#chat, /about, /news/) become the clean address
    const normalize = () => {
        const hashView = location.hash.substring(1);
        let path = cleanPath(location.pathname);
        if (hashView && (VIEW_PATHS[VIEW_ALIASES[hashView] || hashView])) {
            path = VIEW_PATHS[VIEW_ALIASES[hashView] || hashView];
        }
        if (path !== location.pathname || location.hash) {
            history.replaceState(null, '', path + location.search);
        }
    };
    normalize();

    document.addEventListener('click', e => {
        if (e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        const link = e.target.closest('a[href]');
        if (!link || link.target === '_blank' || link.origin !== location.origin) return;
        const target = cleanPath(link.pathname);
        if (!(target in ROUTES) || link.hash) return;
        e.preventDefault();
        goTo(target);
    });
    window.addEventListener('popstate', routeFromLocation);
    // An old #link typed or clicked while the page is already open
    window.addEventListener('hashchange', () => { normalize(); routeFromLocation(); });
    routeFromLocation();
}

/* Phones: keep the pinned hotbar above the browser's toolbar.
   A fixed bottom bar is placed against the page's layout height, but mobile
   Safari's toolbar can grow taller than that and cover the bar's lower part.
   visualViewport reports what is actually visible, so lift the bar by the
   difference. Does nothing on desktop, where the hotbar is not fixed. */
function initHotbarLift() {
    const hotbar = document.querySelector('.hotbar');
    const vv = window.visualViewport;
    if (!hotbar || !vv) return;

    let queued = false;
    const update = () => {
        queued = false;
        let lift = 0;
        if (getComputedStyle(hotbar).position === 'fixed' && vv.scale < 1.01) {
            const visibleBottom = vv.offsetTop + vv.height;
            lift = Math.max(0, Math.round(document.documentElement.clientHeight - visibleBottom));
        }
        hotbar.style.transform = lift ? `translateY(-${lift}px)` : '';
        document.documentElement.style.setProperty('--hotbar-lift', `${lift}px`);
    };
    const queue = () => {
        if (!queued) {
            queued = true;
            requestAnimationFrame(update);
        }
    };

    vv.addEventListener('resize', queue);
    vv.addEventListener('scroll', queue);
    window.addEventListener('resize', queue);
    update();
}

/* Hotbar: number keys 1-7 select a slot, the way they would in game */
function initHotbarKeys() {
    const slots = [...document.querySelectorAll('.hotbar .nav-link')];
    if (!slots.length) return;

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (document.body.classList.contains('viewer-open')) return;
        if (document.body.classList.contains('account-open')) return;

        const n = parseInt(e.key, 10);
        if (!n || n < 1 || n > slots.length) return;

        const href = slots[n - 1].getAttribute('href');
        if (!href) return;

        // Screens switch in place; the legal pages (slots 8 and 9) are real page loads
        if (href in ROUTES && document.getElementById('home')) {
            goTo(href);
        } else {
            location.href = href;
        }
    });
}

/* Dupes inventory: picking a slot swaps the detail panel.
   Every dupe is already in the DOM; this only toggles which one shows. */
function initDupePicker() {
    const slotWrap = document.getElementById('inv-slots');
    if (!slotWrap) return;

    slotWrap.addEventListener('click', (e) => {
        const slot = e.target.closest('.slot');
        if (!slot) return;

        const detail = document.getElementById(slot.dataset.target);
        if (!detail) return;

        slotWrap.querySelectorAll('.slot').forEach(s => {
            s.classList.toggle('active', s === slot);
        });
        document.querySelectorAll('.dupe-detail').forEach(d => {
            d.classList.toggle('active', d === detail);
        });
    });
}

function initCopyButton() {
    document.querySelectorAll('.copy-btn').forEach(btn => {
        btn.addEventListener('click', copyIP);
    });
}

function updateDonationMonth() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                    'July', 'August', 'September', 'October', 'November', 'December'];
    const currentMonth = months[new Date().getMonth()];
    const progressText = document.querySelector('.progress-text');
    
    if (progressText) {
        progressText.textContent = `${currentMonth} Goal: $0 out of $91`;
    }
}

// ---------- Account menu ----------
// Players log in with the same one-time code as the Tickets page (/support in
// game), so one login covers both. The session lives in an HttpOnly cookie that
// this script never sees; it only asks /support/api/me who is logged in.

let account = { me: null, returnFocus: null };

async function accountApi(url, body) {
    const options = { credentials: 'same-origin', cache: 'no-store' };
    if (body !== undefined) {
        options.method = 'POST';
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(body);
    }
    const res = await fetch(url, options);
    let data = {};
    try { data = await res.json(); } catch (e) { /* empty body */ }
    return { ok: res.ok, status: res.status, data };
}

function formatDuration(seconds) {
    const s = Math.max(0, Math.floor(Number(seconds) || 0));
    const d = Math.floor(s / 86400), h = Math.floor(s % 86400 / 3600), m = Math.floor(s % 3600 / 60);
    if (d > 0) return `${d}d ${h}h`;
    if (h > 0) return `${h}h ${m}m`;
    return `${m}m`;
}

function formatAgo(ms) {
    const s = Math.max(0, (Date.now() - ms) / 1000);
    if (s < 90) return 'just now';
    return `${formatDuration(s)} ago`;
}

// A player's face, cut from their skin by the tickets service (8x8, hat layer
// included). Without a skin it stays a plain block showing their first letter.
function setHead(el, me) {
    el.textContent = '';
    el.classList.toggle('has-skin', Boolean(me && me.skin));
    if (me && me.skin) {
        el.style.backgroundImage = `url("/support/api/skin?h=${encodeURIComponent(me.skin)}")`;
    } else {
        el.style.backgroundImage = '';
        if (me && me.name) el.textContent = me.name.replace(/^\./, '').charAt(0).toUpperCase();
    }
}

function renderAccount() {
    const me = account.me;
    const btn = document.getElementById('account-btn');
    if (!btn) return;
    const unread = me ? (me.tickets || []).filter(t => t.unreadPlayer).length : 0;

    setHead(btn.querySelector('.mc-head'), me);
    btn.querySelector('.account-btn-name').textContent = me ? me.name : 'Log in';
    btn.classList.toggle('logged-in', Boolean(me));
    const badge = btn.querySelector('.account-badge');
    badge.hidden = unread === 0;
    badge.textContent = String(unread);
    btn.setAttribute('aria-label', me
        ? `Account: ${me.name}${unread ? `, ${unread} new ticket ${unread === 1 ? 'reply' : 'replies'}` : ''}`
        : 'Log in');
    btn.hidden = false;

    document.getElementById('account-login').hidden = Boolean(me);
    document.getElementById('account-me').hidden = !me;
    document.getElementById('account-title').textContent = me ? 'Account' : 'Log in';
    if (!me) return;

    const box = document.getElementById('account-me');
    setHead(box.querySelector('.mc-head'), me);
    box.querySelector('.account-who-name').textContent = me.name;

    // Stats, when the server sent them with the login
    const statsSection = box.querySelector('.account-stats');
    const st = me.stats;
    statsSection.hidden = !st;
    if (st) {
        const rows = [
            ['Playtime', formatDuration(st.playtime)],
            ['First joined', st.firstJoined ? new Date(st.firstJoined).toLocaleDateString([], { dateStyle: 'medium' }) : '-'],
            ['Deaths', Number(st.deaths).toLocaleString()],
            ['Player kills', Number(st.playerKills).toLocaleString()],
            ['Mob kills', Number(st.mobKills).toLocaleString()],
            ['Alive for', st.deaths > 0 ? formatDuration(st.sinceDeath) : formatDuration(st.playtime)]
        ];
        const grid = statsSection.querySelector('.account-stat-grid');
        grid.textContent = '';
        for (const [label, value] of rows) {
            const cell = document.createElement('div');
            const dt = document.createElement('dt');
            const dd = document.createElement('dd');
            dt.textContent = label;
            dd.textContent = value;
            cell.append(dt, dd);
            grid.appendChild(cell);
        }
        statsSection.querySelector('.account-stats-when').textContent =
            me.statsAt ? `Updated ${formatAgo(me.statsAt)}. Type /support in game to refresh them.` : '';
    }

    // Tickets: the newest few, newest first
    const list = box.querySelector('.account-tickets');
    list.textContent = '';
    const tickets = me.tickets || [];
    if (tickets.length === 0) {
        const li = document.createElement('li');
        li.className = 'account-empty';
        li.textContent = 'No tickets yet.';
        list.appendChild(li);
    }
    for (const t of tickets.slice(0, 4)) {
        const li = document.createElement('li');
        const subject = document.createElement('span');
        subject.className = 'account-ticket-subject';
        subject.textContent = `#${t.id} ${t.subject}`;
        const status = document.createElement('span');
        status.className = 'account-ticket-status';
        if (t.unreadPlayer) {
            status.textContent = 'New reply';
            status.classList.add('is-new');
        } else {
            status.textContent = t.status === 'closed' ? 'Closed' : 'Open';
        }
        li.append(subject, status);
        list.appendChild(li);
    }
    box.querySelector('.account-tickets-link').textContent = tickets.length ? 'Open Tickets' : 'New Ticket';
}

async function loadAccount() {
    try {
        const { ok, data } = await accountApi('/support/api/me');
        account.me = ok && data.loggedIn ? data : null;
    } catch (e) {
        account.me = null; // offline or the service is down: offer the login, it will say what's wrong
    }
    renderAccount();
}

function openAccount() {
    const dialog = document.getElementById('account');
    // Safari doesn't focus a clicked button, so fall back to the account button
    const active = document.activeElement;
    account.returnFocus = active && active !== document.body ? active : document.getElementById('account-btn');
    dialog.hidden = false;
    document.body.classList.add('account-open');
    const first = account.me ? dialog.querySelector('.account-close') : dialog.querySelector('#account-code');
    first.focus();
    if (account.me) loadAccount(); // refresh tickets and stats while it's open
}

function closeAccount() {
    const dialog = document.getElementById('account');
    if (dialog.hidden) return;
    dialog.hidden = true;
    document.body.classList.remove('account-open');
    for (const msg of dialog.querySelectorAll('.account-msg')) msg.textContent = '';
    if (account.returnFocus && account.returnFocus.focus) account.returnFocus.focus();
}

function initAccount() {
    const btn = document.getElementById('account-btn');
    const dialog = document.getElementById('account');
    if (!btn || !dialog) return;

    btn.addEventListener('click', openAccount);
    dialog.querySelector('.account-close').addEventListener('click', closeAccount);
    dialog.addEventListener('click', e => { if (e.target === dialog) closeAccount(); });
    dialog.querySelector('.account-tickets-link').addEventListener('click', closeAccount);

    document.addEventListener('keydown', e => {
        if (dialog.hidden) return;
        if (e.key === 'Escape') {
            closeAccount();
        } else if (e.key === 'Tab') {
            // keep keyboard focus inside the dialog while it is open
            const items = [...dialog.querySelectorAll('button, input, a[href]')].filter(el => el.offsetParent !== null);
            const i = items.indexOf(document.activeElement);
            const next = e.shiftKey ? (i <= 0 ? items.length - 1 : i - 1) : (i + 1) % items.length;
            items[next].focus();
            e.preventDefault();
        }
    });

    const form = document.getElementById('account-login');
    const loginMsg = form.querySelector('.account-msg');
    form.addEventListener('submit', async e => {
        e.preventDefault();
        const input = form.querySelector('#account-code');
        const submit = form.querySelector('button[type="submit"]');
        if (!input.value.trim()) {
            loginMsg.textContent = 'Type /support in game to get a code.';
            input.focus();
            return;
        }
        submit.disabled = true;
        loginMsg.textContent = 'Checking...';
        try {
            const { ok, data } = await accountApi('/support/login', { code: input.value });
            if (!ok) {
                loginMsg.textContent = data.error || 'Login failed. Try again in a minute.';
                input.select();
                return;
            }
            input.value = '';
            loginMsg.textContent = '';
            await loadAccount();
            if (account.me) dialog.querySelector('.account-close').focus();
        } catch (err) {
            loginMsg.textContent = 'The login service can\'t be reached right now. Try again in a minute.';
        } finally {
            submit.disabled = false;
        }
    });

    const meMsg = dialog.querySelector('.account-me-msg');
    dialog.querySelector('.account-logout').addEventListener('click', async () => {
        meMsg.textContent = '';
        try {
            const { ok } = await accountApi('/support/logout', {});
            if (!ok) throw new Error('logout failed');
            account.me = null;
            renderAccount();
            dialog.querySelector('#account-code').focus();
        } catch (err) {
            meMsg.textContent = 'Couldn\'t log out right now. Try again in a minute.';
        }
    });

    loadAccount();
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeroMOTD();
    updateDeathMessage();
    initGallery();
    loadNews();
    initCopyButton();
    initDupePicker();
    initHotbarKeys();
    initRouter();
    initAccount();
    initHotbarLift();
    initGraphs();
    updateServerStatus();
    updateDonationMonth();
    updateLiveChat();

    setInterval(updateServerStatus, 60000);
    setInterval(updateLiveChat, 10000);
});
