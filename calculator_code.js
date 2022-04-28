// const numberButtons = document.querySelectorAll("[data-number]");
// const operationButtons = document.querySelectorAll("[data-operator]");
// const equalsButton = document.querySelector("[data-equals]");
// const deleteButton = document.querySelector("[data-delete]");
// const allClearButton = document.querySelector("[data-all-clear]");
// const previousOperandTextElement = document.querySelector(
//   "[data-previous-operand]"
// );
// const currentOperandTextElement = document.querySelector(
//   "[data-current-operand]"
// );

//the functionalities

function sum(a, b) {
  let c = a + b;
  return c;
}
function subtract(max, min) {
  let result = max - min;
  return result;
}
function multiply(a, b) {
  let c = a * b;
  return c;
}
function divide(a, b) {
  let c = a / b;
  return c;
}

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function calculate(a, b, c) {
  let result;
  try {
    switch (c) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          throw "Can't divide by 0!";
        } else {
          result = a / b;
        }
        break;
    }
  } catch (e) {
    console.log("There's an error:", e);
  }
  return result;
}

console.log(calculate(13, 15, "*"));

// function display() {
//   calculate(13, 15, "*");
//   currentData = document.getElementById("data-current-operand");
// }
// display();

/*switch ((a, b)) {
  case "+":
    a + b;
    break;

  case "-":
    a - b;
    break;

  case "x":
    a * b;
    break;

  case "÷":
    a / b;
    break;
}
缺少了 1. parameter for operator 2. return result
學到try and catch 的syntax
*/
