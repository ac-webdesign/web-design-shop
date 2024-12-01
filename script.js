// SOUND WHEN HOVERING NAV ITEMS

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
      const sound = new Audio(item.getAttribute('data-sound'));
      sound.play();
    });
  });
  
  // BURGER MENU 

  const burgerMenu = document.querySelector('.burger-menu');
  const navMenu = document.querySelector('nav ul');
  const navItems = document.querySelectorAll('.nav-item');
  const navFooter = document.querySelector('.nav-footer')

  burgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active'); // Toggle nav visibility
    burgerMenu.classList.toggle('open'); // Toggle burger menu icon
    burgerMenu.innerHTML = burgerMenu.classList.contains('open') ? 'X' : '&#9776;';
    navFooter.classList.toggle('active');

    document.body.style.overflow = burgerMenu.classList.contains('open') ? 'hidden' : 'auto';

  });

  // Close the menu when clicking anywhere outside the nav
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !burgerMenu.contains(e.target)) {
      navMenu.classList.remove('active');
      burgerMenu.classList.remove('open');
      burgerMenu.innerHTML = '&#9776;'; 
      document.body.style.overflow = 'auto';
    }
  });
  
  // Close the menu when a nav-item is clicked
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      navMenu.classList.remove('active');
      burgerMenu.classList.remove('open');
      burgerMenu.innerHTML = '&#9776;'; // Reset burger icon
      document.body.style.overflow = 'auto';

    });
  });
  