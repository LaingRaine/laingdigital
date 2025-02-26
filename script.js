// Function to change background color on scroll
window.addEventListener('scroll', function() {
    // Check if we've scrolled more than 100px
    if (window.scrollY > 100) {
      document.body.style.backgroundColor = 'purple'; // Change to purple
    } else {
      document.body.style.backgroundColor = ''; // Reset to original background
    }
  });
  