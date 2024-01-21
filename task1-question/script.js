'use strict'
//ситуация: я создаю кнопку

const firstSection = document.querySelector('.first-section');

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

window.addEventListener('load', createButton);

// и теперь хочу получить её, повесить на неё слушатель, чтобы при нажатии срабатывала функция firstFunction()
let first = 8;

function firstFunction() {
	console.log(`Задание №1: значение переменной first: ${first}`);
}

//вопрос: почему я не могу получить firstButton? хотя в инспекторе эта кнопка есть

let firstButton = document.querySelector('.button-1');
console.log(firstButton); // выводит null

//слушатель соответственно тоже не работает. он работает, только если его поместить внутрь функуии createButton()
//почему так происходит?
firstButton.addEventListener('click', firstFunction);