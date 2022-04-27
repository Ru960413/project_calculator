const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

//the functionalities
const sum = function(a,b){
    let c = a+b;
    return c;
}
const subtract = function(min,max){
    let result = max - min;
    return result;

}
const multiply = function(a,b){
    let c =a*b;
    return c;
}
const divide = function(a,b){
    let c = a/b;
    return c;
}

switch(a,b){
    case "+": 
    a+b;
    break;

    case "-": 
    a-b;
    break;

    case "x": 
    a*b;
    break;

    case "÷": 
    a/b;
    break;


}
const equals
const allClear
const del
//I don't know what I'm doing lol 

