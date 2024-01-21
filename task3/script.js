'use strict'
import cats from '/cats.js';

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const imgContainer = document.querySelector('.image-container');

window.addEventListener('load', function() {
  imgContainer.style.backgroundImage = `url(${cats[0].src})`;
})

function showNext(i) {
  i = cats[i];
  imgContainer.style.backgroundImage = '';
  imgContainer.style.backgroundImage = `url(${cats[i+1].src})`;
  i = cats[i+1];
  if (i == 3) i = 0;
}

function showPrev(i) {
  i = cats[i];
  imgContainer.style.backgroundImage = '';
  imgContainer.style.backgroundImage = `url(${cats[i-1].src})`;
  i = cats[i-1];
  if (i == -1) i = 3;
 }

btnNext.addEventListener('click', showNext);
btnPrev.addEventListener('click', showPrev);
