document.getElementById('year').textContent = new Date().getFullYear();

// AOS Init
AOS.init({
  duration: 800,
  once: true,
});

// Request Access Logic
function requestAccess(projectName) {
  const contactSection = document.getElementById('contact');
  const messageField = document.getElementById('message');
  
  // Scroll to contact form
  contactSection.scrollIntoView({ behavior: 'smooth' });
  
  // Pre-fill fields
  setTimeout(() => {
    messageField.value = `Bonjour,\n\nJe suis intéressé par votre projet "${projectName}" et je souhaiterais en savoir plus ou voir le code.\n\nCordialement,`;
    messageField.focus();
  }, 500);
}

// Back to Top Logic
const backToTopBtn = document.getElementById('backToTop');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
        } else {
        backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    });
}
