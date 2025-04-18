// Main JavaScript file for Quran Website

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Responsive navigation
function handleResponsiveNav() {
    const width = window.innerWidth;
    const navGrid = document.querySelector('.nav-grid');
    
    if (width < 768 && navGrid) {
        navGrid.classList.add('mobile');
    } else if (navGrid) {
        navGrid.classList.remove('mobile');
    }
}

// Initialize responsive features
window.addEventListener('load', handleResponsiveNav);
window.addEventListener('resize', handleResponsiveNav);
