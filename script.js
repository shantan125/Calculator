// script.js

// Variables to keep track of calculator state
let displayValue = ""; // Current value shown on the calculator
let operator = ""; // Operator for calculations
let firstOperand = null; // First operand in a calculation

// Function to add a digit to the display
function appendDigit(digit) {
  displayValue += digit; // Add the clicked digit to the current display value
  updateDisplay(); // Update the display on the calculator
}

// Function to set the operator for calculations
function setOperator(op) {
  operator = op; // Set the clicked operator
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue); // If it's the first operator, store the current display value as the first operand
    displayValue = ""; // Clear the display for the next input
  }
}

// Function to clear the display
function clearDisplay() {
  displayValue = ""; // Clear the display
  updateDisplay(); // Update the display on the calculator
}

// Function to perform the calculation
function calculate() {
  const secondOperand = parseFloat(displayValue); // Parse the second operand from the current display value
  let result;

  // Perform the calculation based on the selected operator
  switch (operator) {
    case "+":
      result = firstOperand + secondOperand;
      break;
    case "-":
      result = firstOperand - secondOperand;
      break;
    case "*":
      result = firstOperand * secondOperand;
      break;
    case "/":
      result = firstOperand / secondOperand;
      break;
    default:
      return; // Invalid operator, exit the function
  }

  displayValue = result.toString(); // Update the display value with the result
  updateDisplay(); // Update the display on the calculator

  // Reset for future calculations
  operator = "";
  firstOperand = null;
}

// Function to update the display on the HTML page
function updateDisplay() {
  document.getElementById("display").value = displayValue;
}
