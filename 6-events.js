//An EVENT in JS represents something that has happened
//Usually an EVENT is something that has happened on a HTML Element

//Examples of Events
//HTML Web Page has finished loaded - DOMContentLoaded
//Click on a Element - click
//When something changed in an element - change

//How to listen for a EVENT in Native JS
document.addEventListener("DOMContentLoaded", function () {
  // Your code to run after the HTML document has been fully loaded
  console.log("HTML document is fully loaded.");
});

//How Events are handled in HTML
<button onclick="document.getElementById('demo').innerHTML = Date()">
  The time is?
</button>;

//If you want to call a function defined in script.js
<button onclick="displayDate()">The time is?</button>;

//Common Events
//onchange - Name of event is change
//onclick - Name of event is click
//onmouseover - Name of event is mouseover
//onmouseout - Name of event is mouseout
//onkeydown  - Name of event is keydown

//How EVENTS are handled in JS Example in script.js

function clickHappened() {
  console.log("CLICK");
}

const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");

//We tell JS that I will give you a reference to the function to call when the click event happens
container1.addEventListener("click", clickHappened);

//When Arrow functions were introduced, This became very easy, We
//can define a Arrow Function anonymously
container2.addEventListener("click", () => {
  console.log("CLICK");
});

//Event are how the website or web application becomes dynamic
//We use these events to work with logic and everything
//Think about form validation
//1.We make sure that all fields are not empty
//We can do this by setting a onchange listener on email and password inputs and for every change,
//We can do the validation
