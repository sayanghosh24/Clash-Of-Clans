// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Navbar Toggle for Mobile
    const navbar = document.querySelector('.navbar');
    const navList = document.querySelector('.navlist ul');
    const burgerIcon = document.createElement('div');
  
    burgerIcon.classList.add('burger-icon');
    burgerIcon.innerHTML = `
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    `;
  
    navbar.appendChild(burgerIcon);
  
    burgerIcon.addEventListener('click', function () {
      navList.classList.toggle('nav-active');
      burgerIcon.classList.toggle('toggle');
    });
  
    // Smooth Scroll to Sections
    const smoothScroll = (target, duration) => {
      const targetElement = document.querySelector(target);
      const targetPosition = targetElement.getBoundingClientRect().top - navbar.offsetHeight;
      const startPosition = window.pageYOffset;
      const startTime = null;
  
      const ease = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };
  
      requestAnimationFrame(animateScroll);
    };
  
    const links = document.querySelectorAll('.navlist a');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href');
        smoothScroll(target, 1000);
      });
    });
  
    // Sticky Navbar
    const header = document.querySelector('.navbar');
    const sticky = header.offsetTop;
  
    const stickyNavbar = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    };
  
    window.addEventListener('scroll', stickyNavbar);
  });
  