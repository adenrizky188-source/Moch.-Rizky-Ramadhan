// Minimal interactivity: nav toggle, contact form demo, year update
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
navToggle.addEventListener('click', ()=> nav.classList.toggle('open'));

const form = document.getElementById('contactForm');
const result = document.getElementById('formResult');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  // demo: show message; replace with AJAX or backend endpoint to actually send
  result.textContent = 'Terima kasih, pesan telah diterima (demo).';
  form.reset();
});