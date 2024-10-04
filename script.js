// // script.js

// // Simple Modal
// const modal = document.getElementById('modal');
// const modalTrigger = document.getElementById('modal-trigger');

// modalTrigger.addEventListener('click', () => {
//     modal.classList.add('show');
// });

// modal.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('show');
//     }
// });

// // Smooth Scroll
// const scrollLinks = document.querySelectorAll('a[href^="#"]');

// scrollLinks.forEach((link) => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const href = link.getAttribute('href');
//         const offsetTop = document.querySelector(href).offsetTop;
//         window.scrollTo({
//             top: offsetTop,
//             behavior: 'smooth',
//         });
//     });
// });

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
