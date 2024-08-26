// Get the display element
const display = document.getElementById('display');

// Get the button elements
const buttons = document.querySelectorAll('.button');

// Define the calculator functions
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

// Add event listeners to the buttons
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.textContent;
    const currentDisplayValue = display.value;

    // Handle number buttons
    if (value >= '0' && value <= '9') {
      display.value = currentDisplayValue + value;
    }

    // Handle operator buttons
    if (value === '+' || value === '-' || value === '*' || value === '/') {
      const operator = value;
      const num1 = parseFloat(currentDisplayValue);
      const num2 = parseFloat(display.value);

      switch (operator) {
        case '+':
          display.value = calculator.add(num1, num2);
          break;
        case '-':
          display.value = calculator.subtract(num1, num2);
          break;
        case '*':
          display.value = calculator.multiply(num1, num2);
          break;
        case '/':
          display.value = calculator.divide(num1, num2);
          break;
      }
    }

    // Handle equals button
    if (value === '=') {
      const result = eval(currentDisplayValue);
      display.value = result;
    }

    // Handle clear button
    if (value === 'C') {
      display.value = '';
    }
  });
});