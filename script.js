let num1 = 0;
// oper = chosenOper;
let num2 = 0;
const add = document.getElementsByClassName("add");
const subtract = document.getElementsByClassName("subtract");
const multiply = document.getElementsByClassName("multiply");
const divide = document.getElementsByClassName("divide");
const screen = document.getElementsByClassName("screen");
const numbers = document.querySelectorAll(".num")
const clear = document.getElementsByClassName('clear');
const backSpace = document.getElementsByClassName('backSpace');

var displayValue = '';

// eventListners 
for (let i = 0; i< numbers.length; i++){
    numbers[i].addEventListener("click", () => {
        displayValue = displayValue + numbers[i].textContent;
        screen[0].textContent = displayValue;
        console.log(displayValue);})
};
clear[0].addEventListener('click',() => { 
    displayValue = '';
    screen[0].textContent = displayValue;
});
backSpace[0].addEventListener('click',()=> {
displayValue = displayValue.slice(0,-1)
screen[0].textContent = displayValue;
});

// operation functions
function adition(num1,num2){
   let sum = num1 + num2
   console.log(sum);
   return sum;
};
function sub(num1,num2){
    let sum = num1 - num2
    console.log(sum);
    return sum;
 };
 function mul(num1,num2){
    let sum = num1 * num2
    console.log(sum);
    return sum;
 };
 function div(num1,num2){
    let sum = num1 / num2
    console.log(sum);
    return sum;
 };


