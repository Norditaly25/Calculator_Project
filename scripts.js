let n1;
let operator;
let n2;

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
