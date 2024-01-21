//Задание 1
// Напишите функцию firstFunction, которая будет выводить в консоль переменную first.

let first = 8;

function firstFunction() {
	console.log(`Задание №1: значение переменной first: ${first}`);
}

const firstSection = document.querySelector('.first-section');

function createButton() {
  const button = document.createElement('button');
  button.className = 'button-1';
  button.style = `
  width: 200px;
  height: 30px;
  border: 1px solid gray";
  border-radius: 3px;
  `;
  button.innerText = 'Нажми меня';
  firstSection.append(button);
  button.addEventListener('click', firstFunction);
}

window.addEventListener('load', createButton);

//Задание 2
// Напишите функцию sum, которая принимает два параметра a и b, складывает их и выводит в консоль результат.
let a = 5;
let b = 3;

function sum(a, b) {
  return a + b;
}

console.log(`Задание №2: результат вызова функции: ${sum(a, b)}`);

//Задание 3
// Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и выводит в консоль результат.
let x = 4;
let y = 2;

function multiply(x, y) {
  return x * y;
}

console.log(`Задание №3: результат вызова функции: ${multiply(x, y)}`);

//Задание 4
// Напишите функцию greet, которая принимает один параметр firstName и выводит в консоль приветствие с этим именем.
let firstName = 'Alice';

function greet(firstName) {
  console.log(`Задание №4: Привет, ${firstName}!`);
}

greet(firstName);

//Задание 5
// Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит в консоль результат.
let width = 6;
let height = 4;

function calculateArea(width, height) {
  return width * height;
}

console.log(`Задание №5: площадь прямоугольника =  ${calculateArea(width, height)}`);

//Задание 6
// Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует".
const printMessage = function(message = "Сообщение отсутствует") {
  console.log(`Задание №6: ${message}`);
}

printMessage();
printMessage('Сообщение введено');

//Задание 7
// Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.
let c = 5;
let d = 10;

function secondFunction(c = 5, d = 10) {
  return c * d;
}

console.log(`Задание №7: функция вызвана с параметрами по умолчанию: ${secondFunction()}`);
console.log(`Задание №7: функции переданы параметры во время вызова: ${secondFunction(3, 5)}`);
//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и secondFunction подставит их на место параметров соответственно, перемножит их и вернёт результат.
console.log(`Задание №7: функции переданы другие параметры во время вызова: ${secondFunction(2, 3)}`);

//Задание 8
// Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если ни одно значение не передано, используйте значения по умолчанию: f = 2 и g = 3.

const thirdFunction = (f = 2, g = 3) => f * g;

console.log(`Задание №8: функция вызвана с параметрами по умолчанию: ${thirdFunction()}`); //Выведет 6, так как используются значения по умолчанию
console.log(`Задание №8: функции переданы параметры во время вызова: ${thirdFunction(4, 5)}`); //Выведет 20, так как переданы параметры 4 и 5

//Задание 9
// Напишите функцию приветствия (название придумайте самостоятельно), которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.

const greetFunc = (guestName = 'гость') => `Привет, ${guestName}!`;

console.log(`Задание №9: функция вызвана с параметрами по умолчанию: ${greetFunc()}`);
console.log(`Задание №9: функции переданы параметры во время вызова: ${greetFunc('крошечка')}`);

//Задание 10
// Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.
// Ваш код
const calculateDifference = function(n, m) {
  return n - m;
};

const result = calculateDifference(5, 3);

console.log(`Задание №10: результат вызова функции: ${result}`); //Выведет 2

//Задание 11
// Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.

const calculateProduct = function(n, m) {
  return n * m;
};

const total = calculateProduct(5, 3);

console.log(`Задание №11: результат вызова функции: ${total}`); //Выведет 15

//Задание 12
// Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num. Затем верните значение переменной result из функции.

const calculateSquare = num => {
  let result = num ** 2;
  return result;
};

const squaredNumber = calculateSquare(5);

console.log(`Задание №12: результат вызова функции: ${squaredNumber}`); // Выведет 25

//Задание 13
// Напишите  стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"

const sayThree = () => console.log('Задание №13: Три!');
sayThree();

//Задание 14
// Напишите функцию findAnimal, которая будет выводить в консоль значения переменных cat и rabbit. Переменная cat объявлена внутри функции, а переменная rabbit объявлена во внешней области видимости.
let rabbit = 'кролик Бублик';

function findAnimal() {
  let cat = 'кот Мося';
  console.log(`Задание №14: ${cat} and ${rabbit}`);
}

findAnimal();

//Задание 15
// Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония. Подсказка: 1. нужно создать переменную с текущим годом. 2. при вызове функции в круглые скобки нужно передать два параметра: текущий год и год летней олимпиады в Токио.
const lastOlympicsYear = 2021;
let currentYear = new Date().getFullYear();

function calculateYearsSinceLastOlympics(a, b) {
 return a - b;
}

console.log(
	'Задание №15: С момента летней олимпиады в Токио прошло ' + calculateYearsSinceLastOlympics(currentYear, lastOlympicsYear) + ' года',
);

//Задание 16
// Напишите программу, которая вычисляет возраст пользователя на основе его года рождения, будет выводить результат в консоль.
// let friendYearOfBirth = 1983;

function calculateAge(friendYearOfBirth) {
  let currentYear = new Date().getFullYear();
  let age = currentYear - friendYearOfBirth;
  let ageArr = [...String(age)];
  if (ageArr[ageArr.length - 1] == '1') {
    console.log(`Задание №16: Моему другу сейчас ${age} год`);
  } else if (ageArr[ageArr.length - 1] == '2' || (ageArr[ageArr.length - 1] == '3') || (ageArr[ageArr.length - 1] == '4')) {
    console.log(`Задание №16: Моему другу сейчас ${age} года`);
  } else {
    console.log(`Задание №16: Моему другу сейчас ${age} лет`);
  }
}

calculateAge(1983);
calculateAge(1984);
calculateAge(1980);

//Задание 17
// Напишите функцию которая принимает ваш год рождения и возвращает ваш возраст. Обратите ваше внимание, что в глобальной зоне видимости есть переменная с текущим годом.

const age = dateOfBirth => currentYear - dateOfBirth;
console.log(`Задание №17: ${age(1988)}`);

//Задание 18
// Напишите функцию, которая должна возводить число в заданную степень. Результат должен выводить в консоль в формате: console.log("Результат: " + result);
const exponent = (num, power) => {
  let result = num ** power;
  console.log(`Задание №18: результат возведения числа ${num} в степень ${power} = ${result}`);
}

exponent(2, 2);
exponent(5, 1);
exponent(5, 10);
