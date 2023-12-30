//Operators are used to do some operations on variables
//There are many types of operators

//1.Arithmetic Operators
//Addition operator
const sum = 1 + 1;

//Subtraction
const diff = 10 - 1;

//Multiplication
const value1 = 10 * 10;

//Division
const value2 = 10 / 2; //Gives Quotient

//Modulus
const mod = 10 % 3; //Gives Remainder

//2.Assignment Operators
//They are used to assign values to a variable
const value3 = 10;
let value4 = 100;
value4 = value4 + 1; //101
//Shortcut syntax for above
value4 += 1; //value4 = value4 + 1;
value4 -= 1; //value4 = value4 - 1;
value4 *= 1; //value4 = value4 * 1;
value4 /= 1; //value4 = value4 / 1;

//3.Comparison Operators
//Comparion Operators will result and expression to being TRUE or FALSE
//They are used to compare two values
let value5 = 100;
let value6 = 101;
let value7 = "101";
value5 > value6; //false 100 > 101
value5 < value6; //true 100 < 101
value5 >= value6; //false 100 >= 101
value5 <= value6; //true 100 <= 101
value5 == value6; //false 100 == 101
//NOTE == does not do strict comparison where only value should be same
//NOTE === does strict comparion where value and type should be same
value6 == value7; //true 101 == "101"
value6 === value7; //false 101 === "101"
value6 != value7; //false 101 != "101"
value6 !== value7; //true 101 !== "101"

//4.Ternary Operator
//This is used to do some ternary logic
const age = 12;
const isAgeToDrive = age >= 18 ? "Can Drive" : "Cannot Drive";
//(EXPRESSION WHICH WILL BE CONVERTED TO TRUE OR FALSE) ? (VALUE IF TRUE) : (VALUE IF FALSE)

//Truthy or Falsy Values
//To check the equivalent TRUTHY or FALSY value of a variable in a BOOLEAN CONTEXT
//You can use !!
!!100; //true
!!0; //false
!!-1; //true
!!true; //true
!!"Jeeva"; //true
!!""; //false
!!{}; //true
!!{ name: "Jeeva" }; //true
!![]; //true
!![1, 2, 3]; //true
!!undefined; //false
!!null; //false
!!NaN; //false

//String Concatenation
let str1 = "Jeeva";
let str2 = "Kalaiselvam";
let str3 = str1 + str2; //Jeeva Kalaiselvam
let str4 = `${str1}-${str2}`; //Jeeva-Kalaiselvam - This is called STRING INTERPOLATION

//THINGS TO BE CAREFUL
//Strings and Numbers
let x = 5 + 5; //10
let y = "5" + 5; //55
let z = "Hello" + 5; //Hello5

//5.Logical Operator
//This is used in and between other operators to combine logical criteria
//&& - Logical AND
//|| - Logical OR
//! - Logical NOT

//Example for AND
let origin = "INDIA";
let ageNow = 14;
let canDriveInIndia =
  origin == "INDIA" && ageNow >= 18 ? "Can Drive" : "Cannot Drive";

//Example for OR
let proof1 = "AADHAAR";
let proof2 = "";
let allowed1 =
  proof1 == "AADHAAR" || proof1 == "DRIVING LICENSE"
    ? "Allowed"
    : "Not Allowed"; //Allowed
let allowed2 =
  proof2 == "AADHAAR" || proof2 == "DRIVING LICENSE"
    ? "Allowed"
    : "Not Allowed"; //Not Allowed

//Example for NOT
let check1 = !proof1.length == 0 ? "Checking Now" : "Need a Proof"; //Checking Now
let check2 = !proof2.length == 0 ? "Checking Now" : "Need a Proof"; //Need a Proof

//6.Type Operator
//This is used to check the type of an variable
let name10 = "Jeeva"; //new String("Jeeva")
let num10 = 10; //new Number(10)
let bool10 = true; //new Number(10)
console.log(typeof name10); //String
console.log(typeof num10); //Number
console.log(typeof bool10); //Boolean
console.log(name10 instanceof String); //true
console.log(num10 instanceof Number); //true
console.log(bool10 instanceof Boolean); //true
