// Optional JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation (if you add a navigation menu)
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Example: Print resume functionality
    const printResume = () => {
        window.print();
    };

    // Add event listeners or other interactive features as needed
    const printButton = document.getElementById('print-resume');
    if (printButton) {
        printButton.addEventListener('click', printResume);
    }
});
