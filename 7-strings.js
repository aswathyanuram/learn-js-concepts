//Strings are used to represent words, sentence etc

let name = "Aswathy";
let info = "Aswathy is a Developer";

//Template String and String Interpolation
let name1 = "Aswathy";
let role1 = "Developer";
let info1 = `${name1} is a ${role1}`;
let sentence1 = "Her name is 'Aswathy'";
let sentence2 = 'Her name is "Aswathy"';

//Modern Approach
let sentence3 = `Her name is "Aswathy"`;
let sentence4 = `Her name is 'Aswathy'`;

//Checking String length
name.length;

//Escape Characters
//They are used to give some inner meaning inside a string
//Escape Character is \
//There are many escape sequences you can use with \
//\b	Backspace
//\f	Form Feed
//\n	New Line
//\r	Carriage Return
//\t	Horizontal Tabulator
//\v	Vertical Tabulator

//When to use Escape Sequence?
//Lets say we want to have a new line in a Sting
let sentence5 = `Name\nAswathy`;
console.log(sentence5);

//OUTPUT for ABOVE
//Name;
//Aswathy;

//Breaking long line
//How do do initially?
let name6 = "Aswathy";
let info6 = "Aswathy is a Developer";
let sentence6 = name6 + "\n" + info6;
let sentence7 = `
${name6}
${info6}
`;

//Example
let text = `The quick
brown fox
jumps over
the lazy dog`;

console.log(text);

//OUTPUT
//The quick
//brown fox
//jumps over
//the lazy dog

//How Strings are created in background?

let name8 = "Jeeva";
let name9 = new String("Jeeva"); //String Class is used to contruct a String Object

console.log(name8.toUpperCase()); //Where did toUpperCase() method come from?
//toUpperCase() is a method available in the String CLASS

/*
We are able to call it because in the background, when saying let name8 = "Jeeva"
It is constructed with String Class and this name8 object has access to all methods inside that class
Because the object we create inherits all methods from String Class
This is applicate when using Number,Boolean,Object etc
*/

//String Temlates
//Using this we can create dynamic keys
let firstName = "John";
let lastName = "Doe";

let text11 = `Welcome ${firstName}, ${lastName}!`;
