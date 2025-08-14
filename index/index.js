const hamburger = document.getElementById('hamburger');
const navbarLinks = document.getElementById('navbar-links');

hamburger.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');   // show/hide menu
  hamburger.classList.toggle('active');     // animate hamburger → X
});

document.querySelectorAll('.nav-item.has-dropdown > a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parentItem = link.closest('.nav-item');
      parentItem.classList.toggle('open');
    }
  });
});
