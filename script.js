let equal = document.querySelector("#equal");
let clear = document.querySelector("#clear");
let input = document.querySelector("#input");
let operators = document.querySelectorAll("#operator");
let numbers = document.querySelectorAll(".number");

let firstValue = "" ;
let secondValue = "" ;
input.value = "";
let operator = "";
let result;

const getFirstValue = () => {
    numbers.forEach((number) => {
        number.onclick = () => {
            firstValue += number.textContent;
            input.value += number.textContent;
            console.log(firstValue);
        }
    })
    return firstValue;
}
const getSecondValue = () => {
    numbers.forEach((number) => {
        number.onclick = () => {
            secondValue += number.textContent;
            input.value += number.textContent;
            console.log(secondValue);
        }
    })
    return secondValue;
}
getFirstValue();
operators.forEach((oper) => {
    oper.onclick = () => {
        getSecondValue();
        input.value += oper.textContent;
        operator = oper.textContent; 
    }
})
equal.onclick = () => {
   input.value = operate(parseInt(firstValue),
   parseInt(secondValue),operator);
}
clear.onclick = () => {
    location.reload();
}
const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;


const operate = (num1,num2,operator) => {
    switch (operator) {
        case '+':
           return  add(num1,num2);
           
        case '-':
            return subtract(num1,num2);
        case '*':
            return multiply(num1,num2)
        case '/':
            return divide(num1,num2);
        default:
            break;
    }
}