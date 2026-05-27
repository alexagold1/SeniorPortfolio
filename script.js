const staticOverlay = document.getElementById('staticOverlay');
const contentShell = document.getElementById('contentShell');
const powerButton = document.getElementById('powerButton');
const bgPlayer = document.getElementById('bgPlayer');

const retroIntro = {
  started: false
};

function startBroadcast() {
  if (retroIntro.started) return;

  retroIntro.started = true;

  staticOverlay.classList.remove('hidden');
  contentShell.classList.remove('active');

  setTimeout(() => {
    staticOverlay.classList.add('hidden');
    contentShell.classList.add('active');
  }, 1400);

  powerButton.textContent = 'LOADING...';
  powerButton.disabled = true;
}

powerButton.addEventListener('click', startBroadcast);

const revealCards = document.querySelectorAll(
  '.panel, .hero-card'
);

const cardObserver = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';

        cardObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealCards.forEach((card) => {

  card.style.opacity = '0';
  card.style.transform = 'translateY(14px)';
  card.style.transition =
    'opacity 0.6s ease, transform 0.6s ease';

  cardObserver.observe(card);
});

// --- Navigation toggle + smooth scrolling ---
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-links a');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  navLinks.forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      mainNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// --- GSAP entry animations using ScrollTrigger (if available) ---
/* ADD THIS UNDER YOUR GSAP SECTION */

const retroPanels = document.querySelectorAll(
  '.retro-window, .quote-panel, .broadcast-bar'
);

retroPanels.forEach((panel, index) => {

  panel.style.opacity = '0';
  panel.style.transform = 'translateY(18px)';

  setTimeout(() => {
    panel.style.transition =
      'opacity 0.8s ease, transform 0.8s ease';

    panel.style.opacity = '1';
    panel.style.transform = 'translateY(0)';
  }, 400 + (index * 180));

});

/* LIVE CLOCK */

const clockElement = document.querySelector('.window-top span:last-child');

function updateClock() {

  const now = new Date();

  const time = now.toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  if (clockElement) {
    clockElement.textContent = time;
  }
}

updateClock();

setInterval(updateClock, 1000);

/* RANDOM CHANNEL EFFECT */

const ticker = document.querySelector('.ticker');

const channelMessages = [
  'NOW PLAYING • DR. DOG • WHERE\'D ALL THE TIME GO •',
  'CHANNEL 03 • WEB DESIGN SHOWCASE •',
  'RETRO TV MODE ACTIVATED •',
  'BROADCAST SIGNAL STABLE •',
  'LOADING PORTFOLIO ARCHIVES •'
];

let tickerIndex = 0;

setInterval(() => {

  tickerIndex++;

  if (ticker) {
    ticker.textContent =
      channelMessages[tickerIndex % channelMessages.length];
  }

}, 5000);
if (window.gsap) {
  try {
    if (window.gsap.registerPlugin) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    gsap.from('.main-nav', { y: -20, opacity: 0, duration: 0.8, ease: 'power2.out' });

    gsap.from('.hero-card', { y: 30, opacity: 0, duration: 1.1, ease: 'power3.out', delay: 0.2 });

    const items = gsap.utils.toArray('.panel, .project-card, .contact-strip');

    items.forEach((el) => {
      gsap.from(el, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%'
        }
      });
    });
  } catch (e) {
    // Fail gracefully if GSAP not available
    console.warn('GSAP init failed', e);
  }
}