document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter-val');
  
  const animateCounter = (el) => {
    const target = parseFloat(el.getAttribute('data-target'));
    const duration = 2000; // ms
    const startTime = performance.now();
    const isFloat = target % 1 !== 0;

    const easeOutExpo = (t) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutExpo(progress);

      const current = easedProgress * target;

      if (isFloat) {
        el.innerText = current.toFixed(1);
      } else {
        el.innerText = Math.floor(current);
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.innerText = target;
      }
    };

    requestAnimationFrame(update);
  };

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  counters.forEach(counter => {
    counterObserver.observe(counter);
  });
});
