'use strict';

(function () {
  var navMain = document.querySelector('.main-nav');
  var navToggle = document.querySelector('.hamburger');
  var menuList = document.querySelector('.main-nav__list');

  navMain.classList.remove('main-nav--nojs');

  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

  menuList.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('main-nav__link') && navMain.classList.contains('main-nav--opened')) {
      navMain.classList.remove('main-nav--opened');
      navMain.classList.add('main-nav--closed');
    }
  });

  var form = document.querySelector('.form');
  var phoneInput = document.querySelector('input[type="tel"]');

  function onFormSubmit() {
    form.reset();
  }

  form.addEventListener('submit', onFormSubmit);

  phoneInput.addEventListener('keyup', function () {
    phoneInput.value = phoneInput.value.replace(/[^\d]/g, '');
  });

  var videoButton = document.querySelector('.video__button');

  function clickButton() {
    if (videoButton.classList.contains('video__button--is-active')) {
      videoButton.classList.remove('video__button--is-active');
    } else {
      videoButton.classList.add('video__button--is-active');
    }
  }

  videoButton.addEventListener('click', clickButton);
})();
