// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('main-nav');

if (hamburger && nav) {
  hamburger.addEventListener('click', function () {
    this.classList.toggle('active');
    nav.classList.toggle('active');
    this.setAttribute('aria-expanded', nav.classList.contains('active'));
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}
