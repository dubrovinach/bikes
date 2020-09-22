'use strict';

var videoButton = document.querySelector('.video__button');

videoButton.addEventListener('mousedown', function () {
  if (videoButton.classList.contains('video__button--is-active')) {
    videoButton.classList.remove('video__button--is-active');
  } else {
    videoButton.classList.add('video__button--is-active');
  }
});


