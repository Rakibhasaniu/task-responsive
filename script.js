

const modal = document.getElementById('modal');
const modalTrigger = document.getElementById('modal-trigger');

modalTrigger.addEventListener('click', () => {
    modal.classList.add('show'); // Show the modal
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show'); // Hide the modal
    }
});
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly
    });
});
