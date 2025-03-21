let n1 = "";
let operator = "";
let n2 = "";
let shouldClearDisplay = false;

const add = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
const mult = (n1, n2) => n1 * n2;
const division = (n1, n2) => n2 !== 0 ? n1 / n2 : "ERROR, Division by zero";

let operate = function (n1, operator, n2) {
    switch (operator) {
        case "+":
            return add(n1, n2);
        case "-":
            return subtract(n1, n2);
        case "*":
            return mult(n1, n2);
        case "/":
            return division(n1, n2);
        default:
            return "ERROR";
    }
}
const display = document.querySelector(".calculator-display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector(".equals");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");
const decimal = document.querySelector(".decimal");

numbers.forEach(number => {
    number.addEventListener("click", () => {
        const digit = number.textContent;

        if (shouldClearDisplay === true) {
            display.textContent = "";
            n1 = ""; 
            operator = "";
            n2 = "";
            shouldClearDisplay = false;
        }
        display.textContent += digit;
        operator === "" ? n1 += digit : n2 += digit;
        });
    });

decimal.addEventListener("click", () => {
    if (operator === "") {
        if (!n1.includes(".")) {
            display.textContent += ".";
            n1 += ".";
        }
    } else {
        if (!n2.includes(".")) {
            display.textContent += ".";
            n2 += ".";
        }
    }
});

    operators.forEach(opBtn => {
        opBtn.addEventListener("click", () => {
        const selectedOperator = opBtn.textContent;

        if (operator !== "" && n2 !== "") {
            let result = operate(Number(n1), operator, Number(n2));
            result = Math.round(result*100) / 100;
            display.textContent = result + selectedOperator;
            n1 = result.toString();
            operator = selectedOperator;
            n2 = "";
        } else if (operator !== "" && n2 === "") {
            display.textContent = display.textContent.slice(0, -1) + selectedOperator;
            operator = selectedOperator; 
        } else {
            display.textContent += selectedOperator;
            operator = selectedOperator; 
        }
        });
    });

equals.addEventListener("click", () => {
    if (n1 !== "" && operator !== "" && n2 !== "") {
        let result = operate(Number(n1), operator, Number(n2));
        result = Math.round(result*100) / 100;
        shouldClearDisplay = true;
        display.textContent = result;
        }
    }
)

clear.addEventListener("click", () => {
    display.textContent = "";
    n1 = ""; 
    operator = "";
    n2 = "";
    shouldClearDisplay = false;
})

backspace.addEventListener("click", () => {
    if (display.textContent === "") return;

    display.textContent = display.textContent.slice(0, -1);

    if (operator === "") {
        n1 = n1.slice(0, -1);
    } else if (n2 === "") {
        operator = "";
    } else {
        n2 = n2.slice(0, -1);
    }
});