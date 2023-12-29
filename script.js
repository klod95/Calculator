let num1 = '';
let oper = "";
let num2 = '';
let curentNum = "";
const add = document.getElementsByClassName("add");
const subtract = document.getElementsByClassName("subtract");
const multiply = document.getElementsByClassName("multiply");
const divide = document.getElementsByClassName("divide");
const screen = document.getElementsByClassName("screen");
const numbers = document.querySelectorAll(".num")
const clear = document.getElementsByClassName('clear');
const backSpace = document.getElementsByClassName('backSpace');
const result = document.getElementsByClassName("result");

var displayValue = '';

// eventListners 
for (let i = 0; i< numbers.length; i++){
   numbers[i].addEventListener("click", () => {
       displayValue = displayValue + numbers[i].textContent;
       screen[0].textContent = num1 + " " + displayValue;
       curentNum += numbers[i].textContent;
       console.log("curent num is:" + curentNum);
      })
};

add[0].addEventListener("click", () => {
   oper = 1;
   num1 = curentNum;
   curentNum = '';
   displayValue = '+ ';
   screen[0].textContent = num1 + " +"
   console.log("add num1 = " + num1)
   console.log("add num2 = " + num2);
});
subtract[0].addEventListener('click', () => {
   oper = 2;
   num1 = curentNum;
   curentNum = '';
   console.log("add num1 = " + num1)
   console.log("add num2 = " + num2);
});
divide[0].addEventListener('click', () => {
   oper = 3;
   num1 = curentNum;
   curentNum = '';
   console.log("add num1 = " + num1)
   console.log("add num2 = " + num2);
});
multiply[0].addEventListener('click', () => {
   oper = 4;
   num1 = curentNum;
   curentNum = '';
   console.log("add num1 = " + num1)
   console.log("add num2 = " + num2);
});
function operator(){
   num2 =  curentNum; 
   console.log(num1);
   console.log(num2);
   console.log(oper);
   switch(oper){ 
      case 1  : resu = (Number(num1) + Number(num2));
         break;
      case 2 : resu = (Number(num1) - Number(num2));
         break;
      case 3 : resu = (Number(num1) / Number(num2));
         break;
      case 4 : resu = (Number(num1) * Number(num2));
         break;
      default:
      resu = '';
      num1 = '';
      num2 = '';
   }
   console.log(resu);
   num1 = '';
   curentNum = '';
   screen[0].textContent = resu;
   return resu;
}
result[0].addEventListener("click",operator);
clear[0].addEventListener('click',() => { 
    displayValue = '';
    num1 = "";
    num2 = "";
    curentNum = '';
    screen[0].textContent = displayValue;
});
backSpace[0].addEventListener('click',()=> {
    displayValue = displayValue.slice(0,-1)
    screen[0].textContent = displayValue;
});

// operation functions
function adition(num1,num2){
   let sum = num1 + num2;
   console.log(sum + " sum is");
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


