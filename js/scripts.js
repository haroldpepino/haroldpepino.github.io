// Add smooth scrolling to navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target section using the href attribute
        const targetId = this.getAttribute('href');
        
        // Scroll smoothly to the target section
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
