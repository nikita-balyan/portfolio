// Mobile menu toggle + footer year. No tracking, no external requests.
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', String(open));
});
menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
});
document.getElementById('year').textContent = new Date().getFullYear();
