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

  powerButton.textContent = 'TUNED IN';
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