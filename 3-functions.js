//Function is a block of code that can be executed whenever needed
//Function will not run on its own, It needs to invoked or called.
//Function has two main pieces
//1.Function declaration - This is the block of the function code
//2.Function calling - This is where the function is being called

//Example for a function
function nameOfTheFunction() {} //This will return undefined
console.log(nameOfTheFunction); //function
console.log(nameOfTheFunction()); //undefined

//When nothing is returned from a function, By default undefined is returned

//Functions can any number of arguments or parameters
function fnWithLotsOfArguments1(param1, param2, param3) {}
function fnWithLotsOfArguments2(param1) {}
function fnWithLotsOfArguments3(param1, param2) {}

//Function names can contain letters, digits, underscores, and dollar signs

//A Function block will only run when its called or invoked
//There are multiple ways a function can be invoked
//1.When a event occurs through event listeners
function clickHappened() {
  console.log("CLICKED");
}
let btnEl = document.querySelector("#btn");
btnEl.addEventListener("click", clickHappened); //We just give a reference to the function
btnEl.addEventListener("click", clickHappened()); //WRONG - DO NOT CALL IT

//2.When invoked from Javascript CODE
clickHappened(); //Here you are calling it

//3.Self Invoked - This is also called IIFE
//IIFE - Immediately Invoked Function Expression
(function () {
  console.log("I am executed immediate");
})();

//Function RETURN Value is a value which is returned from the function
//Usually functions are written to solve a problem, Like calculating SUM etc
// Function is called, the return value will end up in x
let x = myFunction(4, 3); //function is called first, Its possible due to HOISTING

function myFunction(a, b) {
  // Function returns the product of a and b
  return a * b;
}

//It is upto you what you want to RETURN.

//IMPORTANT - () OPERATOR and its significance
//The () operator is what will invoke the function
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

//When JS sees (), It knows to call the function and pass the value
let value = toCelsius(77);

//MOST IMPORTANT CONCEPT IN JS RELATED TO FUNTIONS
//Functions are treated as first class citizens similar to variables
//1.They are used like variables where you can pass them to functions
//2.They are used like variables where you return them from functions

function printer(type) {
  function print(value) {
    console.log(type + " - " + value);
  }
  return print;
}

let error = printer("ERROR");
let debug = printer("DEBUG");
let info = printer("INFO");

info("This is invoked when the button is clicked");
debug("The value of A is 20");
error("Something went wrong!!");

//The above logic is what makes JS unique compared to other languages. This concept is VERY IMPORTANT and is called a CLOSURE (Highly Important Interview Question)
//CLOSURE is only possible because in JS, Functions can be passed around anywhere similar to variables

//Similar example where we pass a function
function clickHappened2() {
  console.log("CLICKED");
}
let btnEl2 = document.querySelector("#btn");
btnEl.addEventListener("click", clickHappened2); //We pass a function reference here

//NOTE - When passing functions around, Make sure to only pass the reference and not call the function
