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
      burgerMenu.innerHTML = '&#9776;'; 
      document.body.style.overflow = 'auto';

    });
  });

  // TABS ANIMATION

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('.hero-tab');
    const projectTab = document.querySelectorAll('.project-container')
    const action = document.querySelectorAll('.action-container')
    const h3 = document.querySelectorAll('.h3')
    // const revealHero = () => {
    //     const hero = document.querySelector('.hero-left-container')
        
    //     hero.classList.add('show');
    // 
    const revealH3 = () => {

      h3.forEach((h, index) => {
        const tabTop = h.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

            if (tabTop < windowHeight - 50) {
                setTimeout(() => {
                  h.classList.add('show')
                }, index * 200); 
            }
      })
        
  };
    const revealTabs = () => {
        tabs.forEach((tab, index) => {
            const tabTop = tab.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (tabTop < windowHeight - 100) {
                setTimeout(() => {
                    tab.classList.add('show');
                }, index * 200); 
            }
        });
    };
    const revealProjects = () => {
      projectTab.forEach((about, index) => {
          const tabTop = about.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (tabTop < windowHeight - 100) {
              setTimeout(() => {
                  about.classList.add('show');
              }, index * 200); 
          }
          if (tabTop < windowHeight - 1100) {
            setTimeout(() => {
                about.classList.remove('show');
            }, index * 200); 
        }
          if (tabTop > windowHeight - 100) {
            setTimeout(() => {
                about.classList.remove('show');
            }, index * 200); 
        }
      });
  };
    const revealAction = () => {
      action.forEach((a, index) => {
          const tabTop = a.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (tabTop < windowHeight - 100) {
              setTimeout(() => {
                  a.classList.add('show');
              }, index * 200); 
          }
          if (tabTop > windowHeight - 100) {
            setTimeout(() => {
                a.classList.remove('show');
            }, index * 200); 
        }
          if (tabTop < windowHeight - 800) {
            setTimeout(() => {
                a.classList.remove('show');
            }, index * 200); 
        }
      });
  };
    // Run on scroll
    window.addEventListener('scroll', revealH3);

    window.addEventListener('scroll', revealTabs);
    window.addEventListener('scroll', revealProjects);
    window.addEventListener('scroll', revealAction);

    // Run on page load in case some tabs are already in view
    revealH3();
    revealTabs();
    revealProjects();
    revealAction();
});
  