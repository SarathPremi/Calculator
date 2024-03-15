function addToExpression(value) {
  var expression = document.getElementById("result");
  if (
    /^\d+$/.test(value) ||
    value === "." ||
    value === "+" ||
    value === "-" ||
    value === "*" ||
    value === "/"
  ) {
    expression.value += value;
  } else {
    alert("Only numbers and arithmetic operators are allowed!");
  }
}

function calculate() {
  var expression = document.getElementById("result");
  try {
    var result = eval(expression.value);
    expression.value = result;
  } catch (error) {
    alert("Invalid expression!");
  }
}

function clearExpression() {
  var expression = document.getElementById("result");
  expression.value = "";
}

function addToMemory() {
  var expression = document.getElementById("result").value;
  if (localStorage.getItem("memory") === null) {
    localStorage.setItem("memory", expression);
  } else {
    localStorage.setItem(
      "memory",
      parseFloat(localStorage.getItem("memory")) + parseFloat(expression)
    );
  }
}
