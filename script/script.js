function add() {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    if (operand1 === "" || operand2 === "") {
        alert("Please enter both operands.");
        return;
    }
    var result = parseFloat(operand1) + parseFloat(operand2);
    displayResult(operand1, operand2, "+", result);
}

function subtraction() {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    if (operand1 === "" || operand2 === "") {
        alert("Please enter both operands.");
        return;
    }
    var result = parseFloat(operand1) - parseFloat(operand2);
    displayResult(operand1, operand2, "-", result);
}

function multiply() {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    if (operand1 === "" || operand2 === "") {
        alert("Please enter both operands.");
        return;
    }
    var result = parseFloat(operand1) * parseFloat(operand2);
    displayResult(operand1, operand2, "×", result);
}

function divide() {
    var operand1 = document.getElementById("operand1").value;
    var operand2 = document.getElementById("operand2").value;
    if (operand1 === "" || operand2 === "") {
        alert("Please enter both operands.");
        return;
    }
    if (operand2 == 0) {
        alert("Cannot divide by zero.");
        return;
    }
    var result = parseFloat(operand1) / parseFloat(operand2);
    displayResult(operand1, operand2, "÷", result);
}

function displayResult(operand1, operand2, operator, result) {
    var output = document.getElementById("output");
    output.value = operand1 + " " + operator + " " + operand2 + " = " + result;
    console.log(operand1 + " " + operator + " " + operand2 + " = " + result);
}
