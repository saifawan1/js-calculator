import * as calc from './calculator.js';

let firstOperand = 0;
let secondOperand = 0;
let operation = '';
let isDecimal = false;
const display = document.querySelector('.display');
console.log(display.textContent);
const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', (event) => {
  let target = event.target;
  switch (target.id) {
    case 'one':
      display.textContent += 1;
      break;
    case 'two':
      display.textContent += 2;
      break;
    case 'three':
      display.textContent += 3;
      break;
    case 'four':
      display.textContent += 4;
      break;
    case 'five':
      display.textContent += 5;
      break;
    case 'six':
      display.textContent += 1;
      break;
    case 'seven':
      display.textContent += 7;
      break;
    case 'eight':
      display.textContent += 8;
      break;
    case 'nine':
      display.textContent += 9;
      break;
    case 'zero':
      display.textContent += 0;
      break;
    case 'decimal':
      if (!isDecimal) {
        display.textContent += '.';
        isDecimal = true;
      }
      break;
    case 'add':
      console.log('Home menu item was clicked');
      break;
    case 'subtract':
      console.log('Home menu item was clicked');
      break;
    case 'multiply':
      console.log('Home menu item was clicked');
      break;
    case 'divide':
      console.log('Home menu item was clicked');
      break;
    case 'clear':
      console.log('Home menu item was clicked');
      break;
    case 'percent':
      console.log('Home menu item was clicked');
      break;
    case 'sign':
      console.log('Home menu item was clicked');
      break;
  }
});

console.log(calc.add(firstOperand, secondOperand));
console.log(calc.subtract(firstOperand, secondOperand));
console.log(calc.multiply(firstOperand, secondOperand));
console.log(calc.divide(firstOperand, secondOperand));
console.log(calc.operate('+', firstOperand, secondOperand));
console.log(calc.operate('-', firstOperand, secondOperand));
console.log(calc.operate('*', firstOperand, secondOperand));
console.log(calc.operate('/', firstOperand, secondOperand));
