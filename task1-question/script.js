'use strict'
const firstSection = document.querySelector('.first-section');
let first = 8;

function createButton() {
  let button = document.createElement('button');
  button.className = 'button-1';
  button.style = `
  width: 200px;
  height: 30px;
  border: 1px solid gray";
  border-radius: 3px;
  `;
  button.innerText = 'Нажми меня';
  firstSection.append(button);
}

function createDiv() {
  let div = document.createElement('div');
  div.className = 'message-div';
  div.textContent = `Задание №1: значение переменной first: ${first}`;
  firstSection.append(div);
}

function firstFunction() {
	console.log(`Задание №1: значение переменной first: ${first}`);
  createDiv();
}

window.addEventListener('load', () => {
  createButton();
  let firstButton = document.querySelector('.button-1');
  console.log(firstButton);
  firstButton.addEventListener('click', firstFunction);
});
