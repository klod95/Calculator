let num1 = '';
let oper = "";
let num2 = '';
let curentNum = "";
let resu = '';
let resultIsClicked = 'default';
const add = document.getElementsByClassName("add");
const subtract = document.getElementsByClassName("subtract");
const multiply = document.getElementsByClassName("multiply");
const divide = document.getElementsByClassName("divide");
const screen = document.getElementsByClassName("screen");
const numbers = document.querySelectorAll(".num")
const clear = document.getElementsByClassName('clear');
const backSpace = document.getElementsByClassName('backSpace');
const result = document.getElementsByClassName("result");
const coma = document.getElementsByClassName("coma");
const btn = document.querySelectorAll(".btn")

var displayValue = '';

// eventListners 
for (let i = 0; i< numbers.length; i++){
   numbers[i].addEventListener("click", () => {
      if (resultIsClicked === true) {}
      else if (curentNum.length >= 7) {}
      else if (curentNum.includes('.') && curentNum.length >= 7) { }
      else  {displayValue = displayValue + numbers[i].textContent;
             screen[0].textContent = displayValue;
             curentNum += numbers[i].textContent;
             console.log("curent num is:" + curentNum);
            }
      })
};
   addEventListener("keyup", (e) => {
      console.log(e)
      if (e.key === "1"){
         btn[8].click();
         console.log(btn)
      } else  if (e.key === "Backspace"){
         btn[1].click();
      } 
      else  if (e.key === "Clear"){
         btn[0].click();
      } 
      else  if (e.key === "7"){
         btn[2].click();
      } 
      else  if (e.key === "8"){
         btn[3].click();
      } 
      else  if (e.key === "9"){
         btn[4].click();
      } 
      else  if (e.key === "4"){
         btn[5].click();
      } 
      else  if (e.key === "5"){
         btn[6].click();
      } 
      else  if (e.key === "6"){
         btn[7].click();
      } 
      else  if (e.key === "2"){
         btn[9].click();
      } 
      else  if (e.key === "3"){
         btn[10].click();
      } 
      else  if (e.key === "."){
         btn[11].click();
      } 
      else  if (e.key === "0"){
         btn[12].click();
      } 
      else  if (e.key === "+"){
         btn[13].click();
      } 
      else  if (e.key === "-"){
         btn[14].click();
      } 
      else  if (e.key === "*"){
         btn[15].click();
      } 
      else  if (e.key === "/"){
         btn[16].click();
      } 
      else  if (e.key === "Enter"){
         btn[17].click();
      } 
      

   });
   

coma[0].addEventListener("click", () => {
   // the if else here makes the . only apear after a number and only once.
   if (curentNum.includes('.') || curentNum === '') {}
   else { 
   displayValue += coma[0].textContent;
   screen[0].textContent = displayValue;
   curentNum += coma[0].textContent;
   }
})

add[0].addEventListener("click", () => {
   //makes it possible to add if there is +.
   if (oper === "add") {
      num2 = curentNum;
      adition();
   } // the else if here makes it possible to add after a / or * or -. And  
   else if (oper ==='subs') { num2 = curentNum; sub()}
   else if (oper ==='mult') { num2 = curentNum; mul()}
   else if (oper ==='divide') { num2 = curentNum; div()}
  
   oper = "add";
   //makes is posible to add after =.
   if (resu != ""){
      num1 = resu;
      displayValue = resu;
      screen[0].textContent = displayValue;
   } else 
   num1 = curentNum;
   curentNum = '';
   displayValue += '+';
   screen[0].textContent = displayValue;
   resultIsClicked = false;
   console.log("add num1 = " + num1);
   console.log("add num2 = " + num2);
   console.log("resu onAdd is = " + resu);
   console.log(displayValue.at(-1));
});
subtract[0].addEventListener('click', () => {
   if (oper === "subs") {
      num2 = curentNum;
      sub();
   } else if (oper ==='add') { num2 = curentNum; adition()}
   else if (oper ==='mult') { num2 = curentNum; mul()}
   else if (oper ==='divide') { num2 = curentNum; div()}
   oper = "subs";
   if (resu != ""){
      num1 = resu;
      displayValue = resu;
      screen[0].textContent = displayValue;
   } else 
   num1 = curentNum;
   curentNum = '';
   displayValue += '-';
   screen[0].textContent = displayValue;
   resultIsClicked = false;
   console.log("sub num1 = " + num1);
   console.log("sub num2 = " + num2);
   console.log("resu on sub is = " + resu)
});
divide[0].addEventListener('click', () => {
   if (oper === "divide") {
      num2 = curentNum;
      div();
   } else if (oper ==='subs') { num2 = curentNum; sub()}
   else if (oper ==='mult') { num2 = curentNum; mul()}
   else if (oper ==='add') { num2 = curentNum; adition()}
   oper = "divide";
   if (resu != ""){
      num1 = resu;
      displayValue = resu;
      screen[0].textContent = displayValue;
   } else 
   num1 = curentNum;
   curentNum = '';
   displayValue += '/';
   screen[0].textContent = displayValue;
   resultIsClicked = false;
   console.log("add num1 = " + num1);
   console.log("add num2 = " + num2);
   console.log("resu on div is = " + resu);
});
multiply[0].addEventListener('click', () => {
   if (oper === "mult") {
      num2 = curentNum;
      mul(); 
   } else if (oper ==='subs') { num2 = curentNum; sub()}
   else if (oper ==='add') { num2 = curentNum; adition()}
   else if (oper ==='divide') { num2 = curentNum; div()}
   oper =  "mult";
   if (resu != "" ){
      num1 = resu;
      displayValue = resu;
      screen[0].textContent = displayValue;
   } else 
   num1 = curentNum;
   curentNum = '';
   displayValue += '*';
   screen[0].textContent = displayValue;
   resultIsClicked = false;
   console.log("add num1 = " + num1);
   console.log("add num2 = " + num2);
   console.log("resu on mul is = " + resu)
});
function operator(){
   // this if statement stops the user to add an other operator next to another one. 
   // example: 5++ or 5=+  or 5=
   if (resultIsClicked === true || 
       displayValue.at(-1) === "+" ||
       displayValue.at(-1) === "-" ||
       displayValue.at(-1) === "*" ||
       displayValue.at(-1) === "/" ||
       resultIsClicked === 'default'){}
   else {num2 =  curentNum; 
   console.log(num1);
   console.log(num2);
   console.log(oper);
   switch(oper){ 
      case "add"  : resu = (Number(num1) + Number(num2));
         break;
      case "subs" : resu = (Number(num1) - Number(num2));
         break;
      case "divide" : resu = (Number(num1) / Number(num2));
         break;
      case "mult" : resu = (Number(num1) * Number(num2));
         break;
      default:
      resu = '';
      num1 = '';
      num2 = '';
   }
   console.log("resu is " +  resu);
   num1 = '';
   curentNum = '';
   oper = '';
   displayValue = displayValue + "=" + resu;
   screen[0].textContent = displayValue;
   resultIsClicked = true;
   // displayValue = '';
   return resu;
}
}
result[0].addEventListener("click",operator);
clear[0].addEventListener('click',() => { 
    displayValue = '';
    num1 = "";
    num2 = "";
    curentNum = '';
    resu = '';
    oper = '';
    screen[0].textContent = displayValue;
    resultIsClicked = 'default';
   console.log('cNum1' + num1);
   console.log('cNum2' + num2);
   console.log('cOper'+ oper);
   console.log('cresu' + resu);
   console.log('cCurent' + curentNum);
   
   
});
backSpace[0].addEventListener('click',()=> {
    displayValue = displayValue.slice(0,-1);
    curentNum = curentNum.slice(0,-1);
    screen[0].textContent = displayValue;
});

// operation functions
function adition(){
   resu = (Number(num1) + Number(num2));
   return resu;
};
function sub(){
   resu = (Number(num1) - Number(num2));
   return resu;
 };
 function mul(){
   // this if else alows to be able to change difrently *-/+ after a number.
   if (Number(num1) === 0 || Number(num2) === 0) {
      resu = num1;
   } else 
   resu = (Number(num1) * Number(num2));
   return resu;
 };
 function div(){
   // this if else alows to be able to change difrently *-/+ after a number.
   if (Number(num1) === 0 || Number(num2) === 0) {
      screen[0].textContent = "You can't divide with 0"
      resu = num1;
   } else 
   resu = (Number(num1) / Number(num2));
   return resu;
 };

