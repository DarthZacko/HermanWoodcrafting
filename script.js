const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const note = form.querySelector('.form-note');
    if (note) note.textContent = 'Demo form only — connect this to Formspree, Netlify Forms, or your preferred email service before launch.';
  });
});

document.querySelectorAll('[data-year]').forEach(el => {
  el.textContent = new Date().getFullYear();
});
