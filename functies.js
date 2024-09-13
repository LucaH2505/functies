function getNumber(prompt) {
    let num = parseFloat(promptSync(prompt));
    while (isNaN(num)) {
        console.log("Invalid number! Please enter a valid number.");
        num = parseFloat(promptSync(prompt));
    }
    return num;
}

function getOperation() {
    let operation = promptSync("Enter operation (+, -, *, /): ");
    while (!['+', '-', '*', '/'].includes(operation)) {
        console.log("Invalid operation! Please enter a valid operator (+, -, *, /).");
        operation = promptSync("Enter operation (+, -, *, /): ");
    }
    return operation;
}

function calculate(num1, num2, operation) {
    switch (operation) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Division by zero!";
            }
            return num1 / num2;
        default:
            return "Invalid operation!";
    }
}

function calculator() {
    do {
        const num1 = getNumber("Enter first number: ");
        const operation = getOperation();
        const num2 = getNumber("Enter second number: ");

        const result = calculate(num1, num2, operation);

        console.log(`Result: ${result}`);

        var continueCalc = promptSync("Do you want to perform another calculation? (yes/no): ").toLowerCase();
    } while (continueCalc === 'yes');
}

const promptSync = require('prompt-sync')();

calculator();
