// Minimal interactive behavior: hamburger, form submit (simulated), smooth scroll, year
document.addEventListener('DOMContentLoaded', function(){
  // set footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    if(navLinks.classList.contains('open')){
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(2,6,23,0.85)';
      navLinks.style.padding = '12px';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '72px';
      navLinks.style.right = '20px';
      navLinks.style.borderRadius = '10px';
    } else {
      navLinks.style.display = '';
      navLinks.style.position = '';
      navLinks.style.padding = '';
      navLinks.style.background = '';
    }
  });

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        // close mobile menu if open
        if(navLinks.classList.contains('open')){
          navLinks.classList.remove('open');
          navLinks.style.display = '';
        }
      }
    });
  });

  // contact form: simulate submit
  const form = document.getElementById('contactForm');
  const clearBtn = document.getElementById('clearBtn');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if(!name || !email || !message){
      alert('Tolong isi semua field.');
      return;
    }
    // Simulasi AJAX: tampilkan pesan dan reset form
    alert('Terima kasih, ' + name + '! Pesan Anda telah dikirim. Kami akan menghubungi secepatnya.');
    form.reset();
  });
  clearBtn.addEventListener('click', ()=> form.reset());
});