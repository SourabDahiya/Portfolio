const button = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
button.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  button.setAttribute('aria-expanded', open);
  button.textContent = open ? 'Close' : 'Menu';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  button.setAttribute('aria-expanded', 'false');
  button.textContent = 'Menu';
}));
