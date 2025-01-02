// // Simple JavaScript functionality for smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         });
//     });
// });

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// View Jobs functionality
document.querySelector('.view-jobs-bar').addEventListener('click', () => {
    const jobsGrid = document.querySelector('.jobs-grid');
    jobsGrid.classList.toggle('active');
    if (jobsGrid.classList.contains('active')) {
        jobsGrid.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});
