const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuClose = document.getElementById('mobile-menu-close');
const mobileNav = document.getElementById('mobile-nav');

function toggleMenu() {
  mobileNav.classList.toggle('open');
}

function closeMenu() {
  mobileNav.classList.remove('open');
}

mobileMenu.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('touchstart', toggleMenu);

mobileMenuClose.addEventListener('click', closeMenu);
mobileMenuClose.addEventListener('touchstart', closeMenu);

const paragraph = document.querySelector('.right-content p');

function typeWrite(element, millisecond) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = ' ';
  textArray.forEach(function (character, index) {
    setTimeout(function () {
      element.innerHTML += character;
    }, millisecond * index);
  });
}
typeWrite(paragraph, 10);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.benefit').forEach((benefit) => {
  observer.observe(benefit);
});
