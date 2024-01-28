//Numbers
//They can written with or without decimal

let x = 3.14; // A number with decimals
let y = 3; // A number without decimals

//How to represent large numbers
let x1 = 123e5; // 12300000 - 123 * 10^5
let y1 = 123e-5; // 0.00123 - 123 / 10^5

//JavaScript Numbers are Always 64-bit Floating Point

//Integer Precision
let x3 = 999999999999999; // x will be 999999999999999
let y3 = 9999999999999999; // y will be 10000000000000000

//Sometimes you might see some odd behaviour with numbers, In that case see
//if you are using the 64 bit length and not more

//Using Strings and Numbers together

let x4 = 10;
let y4 = 20;
let z4 = x4 + y4; //30

let x5 = "10";
let y5 = "20";
let z5 = x5 + y5; //1020

let x6 = 10;
let y6 = "20";
let z6 = x6 + y6;

let x7 = 10;
let y7 = 20;
let z7 = "The result is: " + x + y; // The result is: 1020

//JS Interpreter reads from left to right
let x8 = 10;
let y8 = 20;
let z8 = "30";
let result = x8 + y8 + z8; //3030 - Because x8 and y8 are numbers and are added first

//Numeric Strings
let x9 = 100; // x is a number
let y9 = "100"; // y is a string
let z9 = x9 / y9; //1
let z10 = x9 + y9; //100100
let z11 = +x9 + +y9; //100100
let z12 = Number(x9) + Number(y9); //200

//NAN - Not a Number
let x13 = 100 / "Apple"; // Not a Number

//Checking NAN
isNaN(100 / "JEEVA"); //true
isNaN(100 / "100"); //false

//Checking if its a number
let value = "100";
if (!isNaN(value)) {
  console.log("NUMBER");
}

//Infinity
//Sometimes used to break out of loop
let i = 0;
while (i < 100) {
  console.log("PRINTING");
}

//Above loop is a infinite loop
//To solve such loops
let myNumber = 2;
// Execute until Infinity
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
}

//CURRENT SPEED
//299792 KM/S

//How to represent hexadecimal value
//BINARY - 0,1
//HEX RANGE - 0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F
//DECIMAL - 0,1,2,3,4,5,6,7,8,9

let num = 0xff;

//HEX REPRESENTATION
DECIMAL - HEXADECIMAL;
0 - 0x00;
1 - 0x01;
2 - 0x02;
//---
15 - 0x0f;
16 - 0x10;
//---
255 - 0xff;
