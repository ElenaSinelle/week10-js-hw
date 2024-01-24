'use strict'
const cats = [
  {
    src: 'assets/cat-1.jpg',
  },
  {
    src: 'assets/cat-2.jpg',
  },
  {
    src: 'assets/cat-3.jpg',
  },
  {
    src: 'assets/cat-4.jpg',
  }
];

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
const imgContainer = document.querySelector('.image-container');

window.addEventListener('load', function() {
  imgContainer.style.backgroundImage = `url(${cats[0].src})`;
})

let cat = 0;

function showNext() {
  cat++;
  if (cat == 4) cat = 0;
  imgContainer.style.backgroundImage = '';
  imgContainer.style.backgroundImage = `url(${cats[cat].src})`;
}

function showPrev() {
  cat--;
  if (cat == -1) cat = 3;
  imgContainer.style.backgroundImage = '';
  imgContainer.style.backgroundImage = `url(${cats[cat].src})`;
 }

btnNext.addEventListener('click', showNext);
btnPrev.addEventListener('click', showPrev);
