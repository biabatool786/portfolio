const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#mainNav');

toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

document.querySelectorAll('#mainNav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

document.querySelectorAll('.replace-link').forEach(link => {
  link.addEventListener('click', e => {
    if (link.getAttribute('href') === '#') {
      e.preventDefault();
      alert('Replace this # link with your real GitHub repository or live demo URL.');
    }
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
