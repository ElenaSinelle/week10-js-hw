'use strict'
const calcBtn = document.querySelector('.calc-btn');

const item1Price = document.querySelector('.item-1-price').textContent;
const item2Price = document.querySelector('.item-2-price').textContent;

const messageContainer = document.querySelector('.total-price-calculated');

calcBtn.addEventListener('click', function(){
  let item1Qty = document.querySelector('.item-1-qty').value;
  let item2Qty = document.querySelector('.item-2-qty').value;

  messageContainer.textContent = calculateTotalPrice([item1Qty, item1Price], [item2Qty, item2Price]);
})

function calculateTotalPrice(...args) {
  let sum = 0;
  for (let arg of args) {
    if(Array.isArray(arg)) {
      let subSum = +arg[0] * +arg[1];
      sum += subSum;
    }
  }
  return sum;
}
