window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").classList.add("opaque");
  } else {
    document.getElementById("navbar").classList.remove("opaque");
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const delay = 0.45; // Adjust this value to increase/decrease the lag

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        currentX += (mouseX - currentX) * delay;
        currentY += (mouseY - currentY) * delay;
        bubble.style.transform = `translate(${currentX}px, ${currentY}px)`;
        requestAnimationFrame(animate);
    }

    animate();
});

// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.progress-circle').forEach(function (circle) {
  const percentage = circle.getAttribute('data-percentage');
  const radius = circle.querySelector('.progress-ring__circle').r.baseVal.value;
  const circumference = 2 * Math.PI * radius;

  const progressRingCircle = circle.querySelector('.progress-ring__circle');
  progressRingCircle.style.strokeDasharray = `${circumference} ${circumference}`;
  progressRingCircle.style.strokeDashoffset = circumference;

  const offset = circumference - (percentage / 100) * circumference;
  progressRingCircle.style.strokeDashoffset = offset;
});