//Objects are used to define real work objects
//Objects have properties and functions (OR methods)
//You can visualize almost everything in real world as an object

//Car is an object
//Book is an object
//Person is an object

//How to define Object
let person1 = {
  name: "Aswathy",
  role: "Developer",
  eat: function () {
    console.log("EATING");
  },
  sleep: function () {
    console.log("SLEEPING");
  },
};

//The above object is defined to represent a person called Aswathy
//and their properties and functionalities

//Remember that when you use the short syntax for creating an object
let person2 = { name: "Aswathy" };
//It is created in the background as
let person3 = new Object({ name: "Aswathy" });

//All shorthand syntax are always constructed using a NEW and its CLASS

//Another Example for an object
const car = { type: "Fiat", model: "500", color: "white" };

//How to access Object Properties and methods
let person4 = {
  name: "Aswathy",
  role: "Developer",
  eat: function () {
    console.log("EATING");
  },
  sleep: function () {
    console.log("SLEEPING");
  },
};

//Use the DOT
console.log(person4); //PRINT ENTIRE OBJECT
console.log(person4.name); //Aswathy
//To call a function or method in an object
person4.eat(); //Remember to call it
person4.sleep(); //Remember to call it

//REMEMBER - Even when using the DOT notation, In the background its using []
person4.name;
person4["name"]; //This is how above dot notation is called in background
//Always have the key as a  STRING, Otherwise the value will be added there
//Below two things are different
let name = "JEEVA";
person4["name"]; //person4["name"]
person4[name]; //person4["JEEVA"] - Here the value for variable name will be added

//THIS KEYWORD in OBJECTS
//In Objects, When you define functions, THIS keyword will represent the object itself

const person5 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName1: function () {
    return firstName + " " + lastName;
  },
  fullName2: function () {
    return this.firstName + " " + this.lastName; //NOTE this KEYWORD here
  },
};

//NOTE - THIS keyword will refer to the object in which the function is present
//NOTE - You need to provide correct keyword

person5.fullName1(); //Probably throw an ERROR saying firstName and lastName is not defined
person5.fullName2(); //John Doe

//Many meanings of THIS
//Inside an object, THIS will refer to the object itself
//Alone, THIS refers to the global object
//Inside a function, THIS will refer to the global object
//Inside a function, In strict mode, THIS is undefined
//Inside a event, THIS refers to the element on which the event triggered

//IMPORTANT
//We can change the way how THIS keyword behaves
//We use it using methods like CALL(), APPLY(), BIND() - Advanced JS Concept
