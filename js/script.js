// ---------- Footer year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');

navToggle.addEventListener('click', () => {
  const isOpen = mobileNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mobileNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------- Contact form ----------
// NOTE: GitHub Pages only serves static files, so this form has nowhere to
// submit to by default. Two easy options:
//  1) Formspree (https://formspree.io) — free tier, no backend needed.
//     Set the form's action to your Formspree endpoint and remove
//     preventDefault() below, or keep this handler and POST with fetch().
//  2) A mailto: link (already included in the Contact section) as a fallback.
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = data.get('name');

  // Placeholder behavior until a form endpoint (e.g. Formspree) is wired up.
  status.textContent = `Thanks, ${name}! This form isn't connected to a backend yet — see js/script.js for setup instructions, or email me directly.`;
  form.reset();
});
