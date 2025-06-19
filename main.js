/**
 * Enhanced JavaScript functionality for the mathematical blog
 */

document.addEventListener('DOMContentLoaded', function() {
  // Create scroll to top button
  var scrollBtn = document.createElement('div');
  scrollBtn.className = 'scroll-to-top';
  document.body.appendChild(scrollBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add animation classes to theorems and proofs when they come into view
  const animateOnScroll = function() {
    const elements = document.querySelectorAll('.newtheorem, .proof');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      
      // Check if element is in viewport
      if (elementTop < window.innerHeight && elementBottom > 0) {
        element.classList.add('animate-in');
      }
    });
  };
  
  // Run once on page load
  animateOnScroll();
  
  // Run on scroll
  window.addEventListener('scroll', animateOnScroll);

  // Add math symbol hover effects
  const mathElements = document.querySelectorAll('.math');
  
  mathElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      this.classList.add('math-highlight');
    });
    
    element.addEventListener('mouseleave', function() {
      this.classList.remove('math-highlight');
    });
  });
});