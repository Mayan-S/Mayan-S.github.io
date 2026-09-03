// ── Nav scroll state ──
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav__link');

function onScroll() {
  nav.classList.toggle('scrolled', window.scrollY > 20);

  const sections = ['about', 'experience', 'projects'];
  let active = '';
  for (const id of sections) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      active = id;
      break;
    }
  }
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.dataset.section === active);
  });
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ── Scroll reveal ──
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
);
revealEls.forEach((el) => observer.observe(el));

// ── Footer year ──
document.getElementById('year').textContent = new Date().getFullYear();