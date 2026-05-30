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