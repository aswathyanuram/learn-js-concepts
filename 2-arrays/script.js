//Arrays are a data type in Javascript which is used to hold a list of variables
//Some Examples below
const arr1 = [1, 2, 3, 4];
const arr2 = [true, false, true, true];
const arr3 = ["Name", "Address", "Age"];
const arr4 = [1, true, "Name"];

//Arrays can also have advanced data types as elements
const advancedArr1 = [1, true, "Name", undefined, [1, 2, 3], { name: "Jeeva" }];
const advancedArr2 = [[1], [1, 2], [1, 2, 3, [7, 8, 9]]];

//You can access elements in array using Index
//Index in an array starts with 0
advancedArr2[0]; //[1]
advancedArr2[1]; //[1,2]
advancedArr2[2]; //[1,2,3,[7,8,9]]
advancedArr2[2][0]; //1
advancedArr2[2][1]; //2
advancedArr2[2][2]; //3
advancedArr2[2][3]; //[7,8,9]
advancedArr2[2][3][0]; //7

//Arrays can also be created using the Constructor method
let constructorArray = new Array(2); //[empty,empty]

//Now to put values in this created array
constructorArray = constructorArray.fill(1);

//You can assign values to array using the index
let arr5 = [];
arr5[0] = 1;
arr5[1] = 2;
console.log(arr5); //This will print [1,2]

//If you set value for index higher, The smaller index will have undefined
let arr6 = [];
console.log(arr6); //This will print []
arr6[3] = "Jeeva";
console.log(arr6); //This will print [undefined,undefined,undefined,"Jeeva"]

//IMPORTANT
//Arrays are nothing but special kind of OBJECTS
//Usually objects are like this
let obj = {
  name: "Jeeva",
};

//Now create a object using index values, It is nothing but an array
let arrObj = {
  0: 1,
  1: 2,
};

arrObj[0]; // This will print 1
arrObj[1]; // This will print 2

//So this is what is created as array internally, We just use [] instead of {}
//But when you use [], Internally its created as {} only and indexes are assigned
//When you create a array like this
let arr7 = [1, 2, 3, 4, 5];
//Internally Javascript creates it as
let arrObj7 = {
  0: 1,
  1: 2,
  2: 3,
  3: 4,
  4: 5,
};
//Now when you access the array
arr7[0];
//This is internally called as
arrObj7[0];

//Array Interview Questions
///////////////////////////////////////////////////////////////////
//1. How to create a empty array
let emptyArr = [];

///////////////////////////////////////////////////////////////////
//2.How to access first and last element of an array
let newArr = [1, 2, 3, 4];
console.log(newArr[0]); //To access first element
console.log(newArr[newArr.length - 1]); //To access last element

///////////////////////////////////////////////////////////////////
//3.How to add a element to end of an Array
let newArr1 = [1, 2];
newArr1.push(3);

///////////////////////////////////////////////////////////////////
//4.How to remove last element from array
let newArr2 = [1, 2, 3];
newArr2.pop(); //This will remove last element, In this case 3

///////////////////////////////////////////////////////////////////
//5.How to loop through an array
//First using for loop imperative logic - Old Logic
let newArr3 = [1, 2, 3, 4, 5];
for (let i = 0; i < newArr3.length; i++) {
  console.log(newArr3[i]);
}
//Second using forEach declarative logic
newArr3.forEach((item, index) => {
  console.log(item);
});
///////////////////////////////////////////////////////////////////
//6.How to check if element exist or not exists in array
newArr3.indexOf(1); //Since 1 is present in the array, It will return the index where it is present

newArr3.indexOf(10); //This will return -1 since its not present

//To check if an element is present
if (newArr3.indexOf(1) !== -1) {
  console.log("Item is present");
}

//To check if an element is not present
if (newArr3.indexOf(1) === -1) {
  console.log("Item is not present");
}

///////////////////////////////////////////////////////////////////
//7.How do you remove an element from an array at a specific index?
let newArr4 = [1, 2, 3, 4, 5];
//Now to remove 3 which is at 2nd index position
newArr4.splice(2, 1); //This will remove it item from 2nd index position and return the removed elements in an array

///////////////////////////////////////////////////////////////////
//8.How do you concatenate two arrays?
let newArr5 = [1, 2, 3, 4, 5];
let newArr6 = [1, 2, 3, 4, 5];
let newArr7 = newArr5.concat(newArr6);
//Another modern way of doing this is using the SPREAD OPERATOR
let newArr8 = [...newArr5, ...newArr6];

///////////////////////////////////////////////////////////////////
//9. What is difference between MAP and FOREACH in Arrays
let newArr9 = [1, 2];
console.log(newArr9); //This will print [1,2]

//Now I can use forEach on the array to do some logic on each item
//Please not we use forEach only to do something on each item of an array
let newArr10 = newArr9.forEach((item, index) => {
  console.log(`${item} is at INDEX ${index}`);
});

console.log(newArr10); //This will print undefined

//Now map method is used to transform one array into another array
//But remember the new array will be based on the value you return in the arrow function, If you forget to return a value, All values will be undefined
//In below example, We are doubling all elements in old array
let newArr11 = newArr9.map((item, index) => {
  console.log(`${item} is at INDEX ${index}`);
  //Return is very important, Otherwise new array will just be [undefined,undefined]
  return item * 2;
});

//Another example using map to square each number in array
let newArr12 = [1, 2];
let newArr13 = newArr12.map((item, index) => {
  return item * item;
});

//If there is only one line inside the map function, you can ignore block and return directly using arrow function short syntax
let newArr14 = newArr12.map((item, index) => item * item);

//One key thing to remember here is that when returning object, You have to use paranthesis
let newArr15 = newArr12.map((item, index) => ({ value: item }));
//[{ value: 1 }, { value: 2 }];

///////////////////////////////////////////////////////////////////
//10. What is difference between FILTER and FIND method in Array
let newArr16 = [1, 2, 3, 4];

//Filter method is used to create a new array based on some condition to filter the existing array
//Let say we want to have a new array which only has even elements
let newArr17 = newArr16.filter((item, index) => {
  //Return true of false only
  //If true is returned, The current item will be added to new array
  //if false is returned, The current item will not be added to new array
  //By default if you dont return anything, which defaults to returning undefined and undefined is a falsy value
  //Below logic will only return true when item is a even number
  if (item % 2 === 0) {
    return true;
  }
});

//You can use short syntax here as well
let newArr18 = newArr16.filter((item) => item % 2 == 0); //This will turn to true or false

//Find is used to find the element
//For finding an even number in an array
//Remember find will only find the first value which satisfies the condition
let element = newArr16.find((item) => {
  if (item % 2 == 0) {
    return true;
  }
}); //2 is returned

//But if you want all items satisfying the condition
let allItems = newArr16.findAll((item) => {
  if (item % 2 == 0) {
    return true;
  }
}); //[2,4] is returned

//find will return one element which it finds first based on a condition inside the arrow function
//findAll will return array of element which it finds based on a condition inside the arrow function
