// review.js

// Confetti effect
function launchConfetti() {
  const duration = 1.2 * 1000;
  const end = Date.now() + duration;
  (function frame() {
    if (window.confetti) {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#43cea2', '#185a9d', '#fff']
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#43cea2', '#185a9d', '#fff']
      });
    }
    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

document.addEventListener("DOMContentLoaded", () => {
  // Get current count from localStorage
  let count = localStorage.getItem("reviewCount");
  count = count ? parseInt(count) : 0;

  // Add one for this submission
  count++;

  // Save updated count
  localStorage.setItem("reviewCount", count);

  // Update HTML
  const reviewCountSpan = document.getElementById("reviewCount");
  if (reviewCountSpan) {
    reviewCountSpan.textContent = count;
    reviewCountSpan.setAttribute('aria-live', 'polite');
  } else {
    console.error("Element with id 'reviewCount' not found!");
  }

  // Focus on thank you heading for accessibility
  const thankYouHeading = document.querySelector('h2');
  if (thankYouHeading) {
    thankYouHeading.setAttribute('tabindex', '-1');
    thankYouHeading.focus();
  }

  // Launch confetti
  if (window.confetti) launchConfetti();
});


