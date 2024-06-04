import * as calc from './calculator.js';

let firstOperand = 0;
let firstOperandSet = false;
let secondOperand = 0;
let secondOperandSet = false;
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
      setValue(display.textContent);
      break;
    case 'two':
      display.textContent += 2;
      setValue(display.textContent);
      break;
    case 'three':
      display.textContent += 3;
      setValue(display.textContent);
      break;
    case 'four':
      display.textContent += 4;
      setValue(display.textContent);
      break;
    case 'five':
      display.textContent += 5;
      setValue(display.textContent);
      break;
    case 'six':
      display.textContent += 6;
      setValue(display.textContent);
      break;
    case 'seven':
      display.textContent += 7;
      setValue(display.textContent);
      break;
    case 'eight':
      display.textContent += 8;
      setValue(display.textContent);
      break;
    case 'nine':
      display.textContent += 9;
      setValue(display.textContent);
      break;
    case 'zero':
      display.textContent += 0;
      setValue(display.textContent);
      break;
    case 'decimal':
      if (!isDecimal) {
        display.textContent += '.';
        setValue(display.textContent);
        isDecimal = true;
      }
      break;
    case 'add':
      operation = '+';
      if (secondOperandSet) {
        display.textContent = calc.operate('+', firstOperand, secondOperand);
        secondOperandSet = false;
        firstOperand = display.textContent;
        if (firstOperand % 1 != 0) {
          isDecimal = true;
        }
      } else {
        isDecimal = false;
        display.textContent = '';
      }
      break;
    case 'subtract':
      operation = '-';
      if (secondOperandSet) {
        display.textContent = calc.operate('-', firstOperand, secondOperand);
        secondOperandSet = false;
        firstOperand = display.textContent;
        if (firstOperand % 1 != 0) {
          isDecimal = true;
        }
      } else {
        isDecimal = false;
        display.textContent = '';
      }
      break;
    case 'multiply':
      operation = '*';
      if (secondOperandSet) {
        display.textContent = calc.operate('*', firstOperand, secondOperand);
        secondOperandSet = false;
        firstOperand = display.textContent;
        if (firstOperand % 1 != 0) {
          isDecimal = true;
        }
      } else {
        isDecimal = false;
        display.textContent = '';
      }
      break;
    case 'divide':
      operation = '/';
      if (secondOperandSet) {
        if (firstOperand == 0 || secondOperand == 0) {
          alert("can't divide by 0");
          secondOperandSet = false;
          firstOperandSet = false;
          isDecimal = false;
          operation = '';
        }
        display.textContent = calc.operate('/', firstOperand, secondOperand);
        secondOperandSet = false;
        firstOperand = display.textContent;
        if (firstOperand % 1 != 0) {
          isDecimal = true;
        }
      } else {
        isDecimal = false;
        display.textContent = '';
      }
      break;
    case 'clear':
      if (secondOperandSet) {
        secondOperandSet = false;
        display.textContent = '';
      } else if (operation != '') {
        operation = '';
      } else {
        firstOperandSet = '';
        display.textContent = '';
      }
      isDecimal = false;
      break;
    case 'percent':
      console.log('Home menu item was clicked');
      break;
    case 'sign':
      if (secondOperandSet) {
        if (secondOperand < 1) {
          secondOperand = Math.abs(secondOperand);
        } else {
          secondOperand = -Math.abs(secondOperand);
        }
        display.textContent = secondOperand;
      } else {
        if (firstOperand < 1) {
          firstOperand = Math.abs(firstOperand);
        } else {
          firstOperand = -Math.abs(firstOperand);
        }
        display.textContent = firstOperand;
      }
      break;
    case 'equal':
      if (secondOperandSet) {
        if (operation == '/' && (firstOperand == 0 || secondOperand == 0)) {
          alert("can't divide by 0");
          secondOperandSet = false;
          firstOperandSet = false;
          isDecimal = false;
          operation = '';
        }
        display.textContent = calc.operate(
          operation,
          firstOperand,
          secondOperand
        );
        firstOperand = display.textContent;
        secondOperandSet = false;
        operation = '';
        if (firstOperand % 1 != 0) {
          isDecimal = true;
        }
      } else {
        console.log('nah');
      }
      break;
  }
});

function setValue(value) {
  if (firstOperandSet && operation !== '') {
    secondOperand = value;
    secondOperandSet = true;
  } else {
    firstOperand = value;
    firstOperandSet = true;
  }
  console.log(
    firstOperand,
    firstOperandSet,
    secondOperand,
    secondOperandSet,
    operation
  );
}

// console.log(calc.add(firstOperand, secondOperand));
// console.log(calc.subtract(firstOperand, secondOperand));
// console.log(calc.multiply(firstOperand, secondOperand));
// console.log(calc.divide(firstOperand, secondOperand));
// console.log(calc.operate('+', firstOperand, secondOperand));
// console.log(calc.operate('-', firstOperand, secondOperand));
// console.log(calc.operate('*', firstOperand, secondOperand));
// console.log(calc.operate('/', firstOperand, secondOperand));
