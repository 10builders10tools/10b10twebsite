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

const galleryImages = [
    'spawn_render.png',
    'portal.png',
    'spawn.png',
    'cave.png',
    'chamber.png',
    'theend.png'
];

function initGallery() {
    const container = document.getElementById('gallery-container');
    if (!container) return;

    galleryImages.forEach(img => {
        const item = document.createElement('a');
        item.href = `images/${img}`;
        item.target = '_blank';
        item.rel = 'noopener noreferrer';
        item.className = 'gallery-item';

        const image = document.createElement('img');
        image.src = `images/${img}`;
        image.alt = img.replace('.png', '').replace('_', ' ');
        image.loading = 'lazy';

        item.appendChild(image);
        container.appendChild(item);
    });
}

function setStatusDot(state) {
    const dot = document.getElementById('status-dot');
    if (dot) dot.className = `dot ${state}`;

    const bars = document.getElementById('ping-bars');
    if (bars) bars.className = `ping-bars ${state}`;
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
                playerCountEl.textContent = `${data.players_online} / ${data.players_max}`;
            }

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

async function updatePlayerList(api) {
    try {
        const response = await fetch(`${api}/api/players`);
        const data = await response.json();
        
        const playerListEl = document.getElementById('player-list');
        if (!playerListEl) return;
        
        if (data.online && data.players && data.players.length > 0) {
            playerListEl.innerHTML = '';
            data.players.forEach(player => {
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
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === `#${target}`);
    });

    document.title = target === 'home'
        ? '10b10t'
        : `${VIEW_TITLES[target] || target} - 10b10t`;

    const title = document.getElementById('view-title');
    if (title) title.textContent = VIEW_TITLES[target] || target;

    window.scrollTo({ top: 0, behavior: 'auto' });

    // scrollHeight is 0 while a screen is hidden, so pin the chat once visible
    if (target === 'server') scrollChatToBottom();
}

function routeFromHash() {
    const id = (location.hash || '#home').substring(1);
    showView(id || 'home');
}

function initRouter() {
    window.addEventListener('hashchange', routeFromHash);
    routeFromHash();
}

/* Hotbar: number keys 1-7 select a slot, the way they would in game */
function initHotbarKeys() {
    const slots = [...document.querySelectorAll('.hotbar .nav-link')];
    if (!slots.length) return;

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey || e.altKey) return;

        const tag = document.activeElement && document.activeElement.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;

        const n = parseInt(e.key, 10);
        if (!n || n < 1 || n > slots.length) return;

        const href = slots[n - 1].getAttribute('href');
        if (!href) return;

        // Slots 8 and 9 are the legal pages: a real navigation, not a hash change
        if (href.startsWith('#')) {
            location.hash = href;
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
        progressText.textContent = `${currentMonth} Goal: $91 out of $91`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateHeroMOTD();
    initGallery();
    initCopyButton();
    initDupePicker();
    initHotbarKeys();
    initRouter();
    updateServerStatus();
    updateDonationMonth();
    updateLiveChat();

    setInterval(updateServerStatus, 60000);
    setInterval(updateLiveChat, 10000);
});
