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