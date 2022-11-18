'use strict';

const btnToggleMenu = document.querySelector('.menu__toggle-btn');

btnToggleMenu.addEventListener('click', (evt) => {
  evt.preventDefault();

  const menuElement = document.querySelector('.menu');
  if (menuElement.classList.contains('menu-js-opened')) {
    menuElement.classList.remove('menu-js-opened');
    menuElement.classList.add('menu-js-closed');
  } else {
    menuElement.classList.remove('menu-js-closed');
    menuElement.classList.add('menu-js-opened');
  }
});
