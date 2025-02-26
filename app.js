




// Select all the elements you want to animate
const animatedElements = document.querySelectorAll('.animate-on-scroll');

// Intersection Observer callback
const observerOptions = {
  threshold: 0.5 // The element is considered in view when at least 50% of it is visible
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add a staggered transition delay based on the index
      entry.target.style.transitionDelay = `${index * 0.2}s`; // Increase delay based on index
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once it's visible
    }
  });
};

// Create an Intersection Observer instance
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each element with the class 'animate-on-scroll'
animatedElements.forEach((element, index) => {
  element.classList.add('hidden'); // Start as hidden
  observer.observe(element); // Start observing each element
});



document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    console.log(window.scrollY); // Log scroll position to the console

    if (window.scrollY > 50) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });
});