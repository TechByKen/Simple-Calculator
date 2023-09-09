let display = document.getElementById("display");
let expression = "";

function appendToDisplay(value) {
  expression += value;
  display.value = expression;
}

function clearDisplay() {
  expression = "";
  display.value = 0;
}

function calculateResult() {
  try {
    expression = eval(expression);
    display.value = expression;
  } catch (error) {
    display.value = "Error";
  }
}
