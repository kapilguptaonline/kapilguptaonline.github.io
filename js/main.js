/* =============================================
   KAPIL GUPTA – main.js
   ============================================= */

// ── Sticky Navbar ─────────────────────────────
const navbar = document.getElementById('navbar');
const onScroll = () => {
  if (window.scrollY > 40) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
};
window.addEventListener('scroll', onScroll, { passive: true });

// ── Smooth Scroll for Nav Links ───────────────
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = 80;
    window.scrollTo({ top: target.offsetTop - offset, behavior: 'smooth' });
    // Close mobile menu
    const collapse = document.getElementById('navMenu');
    if (collapse && collapse.classList.contains('show')) {
      bootstrap.Collapse.getInstance(collapse)?.hide();
    }
  });
});

// ── Scroll Fade-In ────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Contact Modal / Popover ───────────────────
const contactForm  = document.getElementById('contactForm');
const formFields   = document.getElementById('formFields');
const successFlash = document.getElementById('successFlash');

if (contactForm) {
  contactForm.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = contactForm.querySelector('[type="submit"]');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Simulate async send (replace with real endpoint)
    await new Promise(r => setTimeout(r, 900));

    // Show success
    formFields.style.display = 'none';
    btn.style.display = 'none';
    successFlash.style.display = 'block';

    // Auto-close modal after 3s
    setTimeout(() => {
      const modal = bootstrap.Modal.getInstance(document.getElementById('contactModal'));
      if (modal) modal.hide();
      // Reset form
      setTimeout(() => {
        contactForm.reset();
        formFields.style.display = '';
        btn.style.display = '';
        btn.disabled = false;
        btn.textContent = 'Send Message';
        successFlash.style.display = 'none';
      }, 400);
    }, 3000);
  });
}

// Reset modal on close
document.getElementById('contactModal')?.addEventListener('hidden.bs.modal', () => {
  if (!successFlash) return;
  contactForm.reset();
  formFields.style.display = '';
  const btn = contactForm.querySelector('[type="submit"]');
  btn.style.display = '';
  btn.disabled = false;
  btn.textContent = 'Send Message';
  successFlash.style.display = 'none';
});

// ── Active Nav Highlight on Scroll ───────────
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });
