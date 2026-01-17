
// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

function toggleMenu() {
    const isActive = navMenu.classList.toggle('active');
    hamburger.textContent = isActive ? '✕' : '☰';
    hamburger.setAttribute('aria-expanded', isActive);
}

// Initialize hamburger menu
function initHamburgerMenu() {
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (event) => {
            const isClickInsideNav = navMenu.contains(event.target) || hamburger.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Close menu on escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.textContent = '☰';
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }
}

// Update footer with current year and last modified date
function updateFooter() {
    // Update copyright year
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Update last modified date
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}  


// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initHamburgerMenu();
    updateFooter();
    
    console.log('Temple Album initialized successfully');
});