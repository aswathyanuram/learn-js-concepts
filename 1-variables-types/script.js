//Variables are like container which is used to store a value
//Variables are used to store values

//We use var keyword to create a variable
var name = "Aswathy";

//Using var to declare a variable is old way of declaring it
//Modern Javascript uses let and const
//let is used to declare something that will change in future
let weight1 = 67.5; //This will change in future

//There is no problem using let here, Its just that using let will take more memory than using const
const dateOfBirth = "1997-12-12";

//There can be many types of variables
var name = "Aswathy"; //This is a string
var age = 26; //This is a number
var isHappy = true; //This is a boolean

//String, Number and Boolean are called Primitive Data Types

//A Number can be either a floating point or an integer
var age = 26; //This is a integer number
var weight2 = 66.5; //This is a floating point number

//Apart from primitive data types, There are 2 more advanced data types
//These advanced data types are used to represent real world items
//The two advanced data types are called Array and Object

//Example for an Array
const list = [1, 2, 3, 4, 5];
const emptyList = []; //An Array can be empty as well

//Example for an Object
const person = {
  name: "Aswathy",
  role: "Scrum Master",
  age: 26,
  isHappy: true,
  weight: 66.5,
};

//Empty Object with no properties
const nothing = {};

//Important thing about variable is that when the initial value is not defined, By default, the value is undefined
let noValueDefined;
console.log(noValueDefined); //This will print undefined because no value was initialized

//There are four more types in Javascript which you might encounter
//They are undefined, null
let undefinedVariable; //This has value of undefined
let nullVariable = null; //This has value of null
