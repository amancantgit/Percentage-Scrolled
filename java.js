
const progressBar = document.getElementById('progress-bar');
const scrollPercentText = document.getElementById('scroll-percent');

window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  progressBar.style.width = scrollPercent + '%';
  scrollPercentText.innerText = Math.round(scrollPercent) + '%';
});


