function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    const closeButton = document.querySelector('.hamburger-close');
    
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        hamburger.style.display = 'none';
        closeButton.style.display = 'flex';
    } else {
        hamburger.style.display = 'flex';
        closeButton.style.display = 'none';
    }
}

// Close menu when clicking a link on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        if (navLinks.classList.contains('active')) {
            toggleMenu();
        }
    });
});