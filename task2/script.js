'use strict'
const buttonContainer = document.querySelector('.button-container');
const messageContainer = document.querySelector('.message-container');

function createButton() {
  let button = document.createElement('button');
  button.className = 'button';
  button.style = `
        width: 200px;
        height: 30px;
        border: 1px solid gray";
        border-radius: 3px;
        `;
  button.innerText = 'Нажми меня';
  buttonContainer.append(button);
  button.addEventListener('click', function() {
    createMessage();
    console.log(printMessage());
  });
}

function createMessage() {
  let messageParagraph = document.createElement('p');
  messageParagraph.className = 'paragraph';
  messageContainer.append(messageParagraph);
  messageParagraph.innerText = printMessage();
}

function printMessage() {
  return 'Я учу Java Script!';
}

window.addEventListener('load', createButton);
