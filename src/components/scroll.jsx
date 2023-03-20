import { useEffect } from 'react';

function Scroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('scrollH');
      } else {
        entry.target.classList.add('scrollH');
      }
    });
  });

  useEffect(() => {
    document.querySelectorAll('.scrollH').forEach((el) => observer.observe(el));
  });
}

export default Scroll;
