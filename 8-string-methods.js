//Lets learn some methods that are available within String Class

//How the String class is defined - Simple Example

class String {
  constructor(data) {
    this.data = data;
  }

  //So Many methods are already defined
  toUpperCase() {
    //Here the logic for converting the string to uppercase will be written
    console.log("DATA IS BEING CONVERTED INTO UPPERCASE");
  }
  //Many more methods are available which are already defined by Javascript specification
  //ECMA Consortium maintains the latest specification of JS
}

//Most important methods

let data = "Hello World!";

data.length(); //12 - Calculates length of the string
data.charAt(0); //H - Determines the character at given INDEX position
data.at(0); //H - Determines the character at given INDEX position
data.charCodeAt(0); //72 - Gives UTF16 code

//Checking is User is pressing a character, A in this case
container.addEventListener("keydown", (event) => {
  let character = event.target.value;
  if (character.chatAt(0) == "A".charAt(0)) {
    console.log("USER PRESSED A");
  }
});

//INDEX value access
data[1]; //e - Access characet at the INDEX

//String Extraction
data.slice(0, 4); //Hello - Extract first five characters in a string
data.slice(3); //lo World! - Extract rest of the string from the Index given
data.slice(-3); //Hello Wor - Extract rest of the string from the Index given but from end
data.slice(-3, -1); //ld - Extract rest of the string from the Index given but from end
data.substring(0, 4); //Hello - Extract first five characters in a string

data.toUpperCase(); //Convert to Upper Case
data.toLowerCase(); //Convert to Lower Case

//Joining Stings
data.concat(" ", " END"); //Hello World!  END - Add strings inside contact to original string

//Concat EXAMPLE
let text1 = "Hello" + " " + "World!";
let text2 = "Hello".concat(" ", "World!");

//Triming Strings
let text3 = "     Hello World!     ";
let text4 = text3.trimStart();
let text5 = text3.trimEnd();
let text6 = text3.trim();

//Replacing Texts
let text7 = "Please visit Microsoft and Microsoft!";
//Replaces Microsoft with W3Schools
let newText1 = text7.replace("Microsoft", "W3Schools");

//Same Repalce using Regular Expressions
let text8 = "Please visit Microsoft and Microsoft!";
//Regular Exressions - Wrap with // and add expression inside
//Regular Exressions take extra argument, Here i denotes CASE INSENSITIVE
//Only first instance will be updated
let newText2 = text8.replace(/MICROSOFT/i, "W3Schools"); //i makes is case insensitive
console.log(newText2); //Please visit W3Schools and Microsoft!
let newText3 = text8.replace(/MICROSOFT/gi, "W3Schools"); //g replaces all instances
console.log(newText3); //Please visit W3Schools and W3Schools!

//Normal Replace All without using Regular Expressions
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");

//Replace All using Regular Expression
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");

//Converting String to Array
let text10 = "A B C";
let arr1 = text10.split(","); //["A B C"]
let arr2 = text10.split(" "); //["A","B","C"]

//Searching in a String
//indexOf() - This will return the index of given search parameter from first
let data11 = "Hello World!";
let index1 = data11.indexOf("Hello"); //0

//lastIndexOf() - This will return the index of given search parameter from last
let data12 = "Hello World Hello";
let index2 = data12.indexOf("Hello"); //12

//search() - This will search for a given string
//This can also take Regular Expressions
let text = "Please locate where 'locate' occurs!";
text.search("locate"); //Normal Search
text.search(/locate/); //Regular Expression
text.search(/locate/g); //Regular Expression
text.search(/locate/gi); //Regular Expression

//match() - This is used to search for a list of matches
let text12 = "The rain in SPAIN stays mainly in the plain";
text12.match("ain"); //This will give index of first match
text12.match(/ain/); //This will give index of first match
text12.matchAll("ain"); //This will give list of matches
text12.matchAll(/ain/g); //This will give list of matches, remember to pass g

//Simple Search Check
let text13 = "Hello world, welcome to the universe.";
text13.includes("world"); //true
text13.includes("World"); //false - NOTE: Case SENSITIVE

//Other methods
let text14 = "Hello world, welcome to the universe.";
text14.startsWith("Hello"); //true
text14.startsWith("world"); //false
let text15 = "John Doe";
text15.endsWith("Doe"); //true
text15.endsWith("John"); //false
