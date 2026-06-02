 // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
 
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top = my + 'px';
  });
 
  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();
 
  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width = '18px';
      cursor.style.height = '18px';
      ring.style.width = '56px';
      ring.style.height = '56px';
      ring.style.opacity = '0.3';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width = '10px';
      cursor.style.height = '10px';
      ring.style.width = '36px';
      ring.style.height = '36px';
      ring.style.opacity = '0.5';
    });
  });
 
  const loader = document.getElementById('loader');
  const loaderProgress = document.getElementById('loaderProgress');
  const typeEl = document.getElementById('typewords');
  const typeWords = ['web developer', 'innovator', 'student', 'creative builder'];
  let typeIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

function animateLogo() {
  const paths = document.querySelectorAll('.hero-logo-svg .logo-stroke');

  paths.forEach((path, i) => {
    path.style.strokeDasharray = '1000';
    path.style.strokeDashoffset = '1000';
    path.style.transition = 'none';

    setTimeout(() => {
      path.style.transition = 'stroke-dashoffset 0.8s ease';
      path.style.strokeDashoffset = '0';
    }, i * 250);
  });
}

  function typeWrite() {
    const current = typeWords[typeIndex];
    if (!isDeleting) {
      if (charIndex < current.length) {
        charIndex += 1;
        typeEl.textContent = current.slice(0, charIndex);
        setTimeout(typeWrite, 120);
      } else {
        isDeleting = true;
        setTimeout(typeWrite, 1200);
      }
    } else {
      if (charIndex > 0) {
        charIndex -= 1;
        typeEl.textContent = current.slice(0, charIndex);
        setTimeout(typeWrite, 70);
      } else {
        isDeleting = false;
        typeIndex = (typeIndex + 1) % typeWords.length;
        setTimeout(typeWrite, 400);
      }
    }
  }

  function startLoader() {
    document.body.classList.add('loading');
    let value = 0;
    const interval = setInterval(() => {
      value += Math.floor(Math.random() * 14) + 6;
      if (value >= 100) {
        value = 100;
        loaderProgress.style.width = value + '%';
        clearInterval(interval);
setTimeout(() => {
  loader.classList.add('loader-hidden');
  document.body.classList.remove('loading');

  animateLogo();

  typeEl.classList.add('blink');
  typeWrite();
}, 600);
      } else {
        loaderProgress.style.width = value + '%';
      }
    }, 120);
  }

  window.addEventListener('DOMContentLoaded', startLoader);
 
  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
 
  reveals.forEach(el => observer.observe(el));
 
  // Scroll line animation
  const scrollLine = document.querySelector('.scroll-line');
  if (scrollLine) {
    scrollLine.style.transform = 'scaleX(1)';
  }
 
  // Nav hide/show on scroll
  let lastY = 0;
  const nav = document.querySelector('nav');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.style.opacity = y > lastY && y > 80 ? '0' : '1';
    nav.style.transition = 'opacity 0.3s';
    lastY = y;
  });

  // Back to top button
  const backToTopBtn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  const projectPopup = document.getElementById('projectPopup');
  const popupTitle = document.querySelector('.popup-title');
  const popupYear = document.querySelector('.popup-year');
  const popupSummary = document.querySelector('.popup-summary');
  const popupTools = document.querySelector('.popup-tools');
  const popupHighlights = document.querySelector('.popup-highlights');
  const popupClose = document.querySelector('.popup-close');

  const projectDetails = {
    'sophomore-1': {
      year: 'Sophomore',
      title: 'Campus Connect',
      summary: 'A community-focused landing page built to support engagement, accessibility, and clear storytelling across screens.',
      tools: 'HTML, CSS, JavaScript, Figma, Accessibility Audit',
      highlights: 'Responsive design, interactive forms, mobile-first layout, semantic structure.'
    },
    'sophomore-2': {
      year: 'Sophomore',
      title: 'StudyStream',
      summary: 'A student resource hub with clear pathways to coursework, events, and collaboration tools.',
      tools: 'HTML, CSS, JavaScript, UX writing, responsive design',
      highlights: 'Information architecture, dashboard cards, accessibility-first forms.'
    },
    'sophomore-3': {
      year: 'Sophomore',
      title: 'Corfu, Greece',
      summary: 'Interactive destination showcase with travel inspiration and clear page structure.',
      tools: 'HTML, CSS, JavaScript, responsive layout',
      highlights: 'Travel visuals, destination cards, easy navigation.'
    },
    'sophomore-5': {
      year: 'Sophomore',
      title: 'Gilded Grinds',
      summary: 'A premium cafe landing experience with polished imagery and a strong menu hierarchy.',
      tools: 'HTML, CSS, layout systems, responsive design',
      highlights: 'Brand storytelling, refined visuals, clean CTAs.'
    },
    'sophomore-6': {
      year: 'Sophomore',
      title: 'Dior',
      summary: 'A luxury fashion concept with bold typography, immersive imagery, and premium detail work.',
      tools: 'Typography, UI design, interaction polish, responsive layouts',
      highlights: 'Luxury styling, editorial layout, strong visual rhythm.'
    },
    'junior-1': {
      year: 'Junior',
      title: 'Meridian',
      summary: 'A travel dashboard designed for effortless exploration, combining immersive visuals with streamlined itinerary management.',
      tools: 'Figma, prototyping, JavaScript, CSS grid, responsive UI',
      highlights: 'Motion-rich states, progressive disclosure, itinerary previews.'
    },
    'junior-2': {
      year: 'Junior',
      title: 'Atlas',
      summary: 'An interactive mapping concept that connects discovery, collections, and personal recommendations.',
      tools: 'UX research, map UI patterns, CSS transitions, micro-interactions',
      highlights: 'Contextual overlays, path navigation, modern card design.'
    },
    'junior-3': {
      year: 'Junior',
      title: 'Voyage',
      summary: 'A polished experience preview focused on immersive travel storytelling and simplified trip planning.',
      tools: 'Visual storytelling, responsive layouts, JavaScript interactivity',
      highlights: 'Large imagery, content rhythm, seamless transitions.'
    },
    'junior-8': {
      year: 'Junior',
      title: 'Rock Paper Scissors',
      summary: 'Interactive game interface with clear rules and polished gameplay feedback.',
      tools: 'JavaScript, HTML, CSS, game UI',
      highlights: 'Animated results, responsive controls, playful styling.'
    },
    'junior-14': {
      year: 'Junior',
      title: 'New York Knicks',
      summary: 'Sports branding site with bold visuals and dynamic team-focused content.',
      tools: 'HTML, CSS, branding, responsive design',
      highlights: 'Team identity, event highlights, strong imagery.'
    },
    'junior-15': {
      year: 'Junior',
      title: 'Little Toy Bird',
      summary: 'A whimsical product landing page with charming visuals and clear storytelling.',
      tools: 'HTML, CSS, interaction design',
      highlights: 'Character-driven layout, playful details, engaging animation.'
    },
    'senior-1': {
      year: 'Senior',
      title: 'Bloom',
      summary: 'A polished brand refresh with elegant product presentation and refined interaction details.',
      tools: 'Brand systems, HTML/CSS, UI polish, motion design',
      highlights: 'Typography systems, component reuse, polished micro-interactions.'
    },
    'senior-2': {
      year: 'Senior',
      title: 'College Recruitment',
      summary: 'Admissions website with clear calls to action and a polished informational experience.',
      tools: 'HTML, CSS, UX, responsive design',
      highlights: 'Clear storytelling, strong hierarchy, admissions messaging.'
    },
    'senior-3': {
      year: 'Senior',
      title: 'Forge',
      summary: 'A modular portfolio system focused on reusable case study components and scalable content structure.',
      tools: 'Design system thinking, responsive components, semantic HTML',
      highlights: 'Scalable structure, consistent UI, polished presentation.'
    },
    'senior-4': {
      year: 'Senior',
      title: 'Dream Destinations',
      summary: 'Interactive travel slideshow highlight experience for showcasing dream locations.',
      tools: 'HTML, CSS, jQuery, animation',
      highlights: 'Image storytelling, slideshow flow, travel inspiration.'
    },
    'senior-6': {
      year: 'Senior',
      title: 'Drink Spot Client Project',
      summary: 'Client website redesign focused on menu presentation and an inviting brand experience.',
      tools: 'HTML, CSS, client collaboration, responsive UI',
      highlights: 'Polished navigation, modern visual language, clear CTAs.'
    }
  };

  function setupTabs(tabSelector, panelSelector, dataKey) {
    const tabs = document.querySelectorAll(tabSelector);
    const panels = document.querySelectorAll(panelSelector);
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetValue = tab.dataset[dataKey];
        tabs.forEach(item => item.classList.toggle('active', item === tab));
        panels.forEach(panel => {
          panel.classList.toggle('active', panel.dataset[dataKey] === targetValue);
        });
      });
    });
  }

  setupTabs('.highlight-tab', '.highlight-panel', 'year');
  setupTabs('.work-tab', '.work-panel', 'workYear');

  document.querySelectorAll('.highlight-btn').forEach(button => {
    button.addEventListener('click', event => {
      const projectKey = event.currentTarget.closest('.highlight-card').dataset.project;
      const details = projectDetails[projectKey];
      if (!details) return;
      popupYear.textContent = details.year;
      popupTitle.textContent = details.title;
      popupSummary.textContent = details.summary;
      popupTools.textContent = details.tools;
      popupHighlights.textContent = details.highlights;
      projectPopup.classList.add('show');
    });
  });

  popupClose.addEventListener('click', () => {
    projectPopup.classList.remove('show');
  });

  projectPopup.addEventListener('click', event => {
    if (event.target === projectPopup) {
      projectPopup.classList.remove('show');
    }
  })
  /* ══════════════════════════════════════════════════════
   PASTE THIS INTO YOUR script.js — anywhere at the bottom
   ══════════════════════════════════════════════════════ */

/* (removed duplicate aboutDivider block) */
/* ══════════════════════════════════════════════════════
   Replace your existing about JS at the bottom of
   script.js with this
   ══════════════════════════════════════════════════════ */

/* ── ABOUT: Photo slides in from left ── */
const aboutPhoto = document.querySelector('.about-photo-wrap');
if (aboutPhoto) {
  const photoObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('slide-in');
        photoObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  photoObserver.observe(aboutPhoto);
}

/* ── ABOUT: Divider line reveal ── */
const aboutDivider = document.querySelector('.about-divider');
if (aboutDivider) {
  const dividerObserver = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        dividerObserver.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });
  dividerObserver.observe(aboutDivider);
}

/* ── ABOUT: Stat counter animation ── */
const aboutStatNums = document.querySelectorAll('.about-stat-num[data-count]');
const statObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target;
    const target = parseInt(el.dataset.count, 10);
    const suffix = el.dataset.suffix || '';
    const dur = 1400;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(ease * target) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
    statObserver.unobserve(el);
  });
}, { threshold: 0.6 });
aboutStatNums.forEach(el => statObserver.observe(el));