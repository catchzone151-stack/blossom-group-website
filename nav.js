(function () {
  const nav       = document.getElementById('nav');
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  const ddWrap    = document.getElementById('initiativesDd');
  const ddBtn     = document.getElementById('initiativesBtn');

  // Scroll shadow on nav
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 60);
  });

  // Hamburger toggle
  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('nav__links--open');
    hamburger.classList.toggle('is-open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Dropdown toggle (click — for keyboard/mobile)
  if (ddBtn && ddWrap) {
    ddBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = ddWrap.classList.toggle('is-open');
      ddBtn.setAttribute('aria-expanded', open);
    });
  }

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (ddWrap && !ddWrap.contains(e.target)) {
      ddWrap.classList.remove('is-open');
      if (ddBtn) ddBtn.setAttribute('aria-expanded', false);
    }
  });

  // Close everything when any nav link is clicked
  navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => {
    navLinks.classList.remove('nav__links--open');
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', false);
    if (ddWrap) ddWrap.classList.remove('is-open');
  }));

  // Smooth scroll for on-page anchors only
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const t = document.querySelector(this.getAttribute('href'));
      if (t) {
        e.preventDefault();
        window.scrollTo({
          top: t.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16,
          behavior: 'smooth'
        });
      }
    });
  });

  // Fade-in on scroll
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('is-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.07 });
  document.querySelectorAll('.fade-section').forEach(el => obs.observe(el));
})();