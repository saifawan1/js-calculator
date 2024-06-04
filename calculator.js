function add(a, b) {
  return Math.round((Number(a) + Number(b) + Number.EPSILON) * 100) / 100;
}
function subtract(a, b) {
  return Math.round((Number(a) - Number(b) + Number.EPSILON) * 100) / 100;
}
function multiply(a, b) {
  return Math.round((Number(a) * Number(b) + Number.EPSILON) * 100) / 100;
}
function divide(a, b) {
  return Math.round((Number(a) / Number(b) + Number.EPSILON) * 100) / 100;
}

function operate(operator, a, b) {
  switch (operator) {
    case '+':
      return add(a, b);
      break;
    case '-':
      return subtract(a, b);
      break;
    case '*':
      return multiply(a, b);
      break;
    case '/':
      return divide(a, b);
      break;
  }
}

export { add, subtract, multiply, divide, operate };
