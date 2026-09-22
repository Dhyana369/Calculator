const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".number");
const decimalButton = document.querySelector(".decimal");

const operatorButtons = document.querySelectorAll(".operator");

let operator = null;
let firstNumber = null;
let currentNumber = "";
let justCalculated = false;

operatorButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        firstNumber = parseFloat(display.textContent);
        operator = button.textContent;
        currentNumber = "";

        updateDisplay(firstNumber + " " + operator);
        justCalculated = false;
    });
});

const equalsButton = document.querySelector(".equals");

equalsButton.addEventListener("click", function() {
    if (justCalculated) {
        return;
    }
    if (operator === null) {
        return;
    }
    const secondNumber = parseFloat(currentNumber);

    let result;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } 
    else if (operator === "-") {
        result = firstNumber - secondNumber;
    } 
    else if (operator === "×") {
        result = firstNumber * secondNumber;
    } 
    else if (operator === "÷") {
        if (secondNumber === 0) {
            display.textContent = "Cannot divide by 0";
            return;
        }
        result = firstNumber / secondNumber;
    }

    updateDisplay(result);
    currentNumber = result.toString();
    justCalculated = true;
});

const clearButton = document.querySelector(".clear");

clearButton.addEventListener("click", function() {
    updateDisplay("0");
    firstNumber = null;
    operator = null;
    currentNumber = "";
    justCalculated = false;
});

decimalButton.addEventListener("click", function() {

    if (!currentNumber.includes(".")) {
        currentNumber += ".";

        updateDisplay(
            operator
                ? firstNumber + " " + operator + " " + currentNumber
                : currentNumber
        );
    }
});

numberButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (justCalculated) {
            currentNumber = button.textContent;
            operator = null;
            firstNumber = null;
            updateDisplay(currentNumber);
            justCalculated = false;
            return;
        }

        currentNumber += button.textContent;

        updateDisplay(
            operator
                ? firstNumber + " " + operator + " " + currentNumber
                : currentNumber
        );
    });
});

const backspaceButton = document.querySelector(".backspace");

backspaceButton.addEventListener("click", function() {

    if (justCalculated) {
        return;
    }

    if (currentNumber.length > 0) {
        currentNumber = currentNumber.slice(0, -1);

        updateDisplay(
            operator
                ? firstNumber + " " + operator + " " + currentNumber
                : currentNumber || "0"
        );
    }
});

function updateDisplay(value) {
    display.textContent = value;
    display.scrollLeft = display.scrollWidth;
}