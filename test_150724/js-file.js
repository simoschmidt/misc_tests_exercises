// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const paragraph = document.createElement("p");
paragraph.classList.add("paragraph");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'm red!"; 

const header = document.createElement("h3");
header.classList.add("header");
header.style.color = "blue";
header.textContent = "I'm a blue h3!";

const someDiv = document.createElement("div");
someDiv.style.border = "solid black";
someDiv.style.backgroundColor = "pink";

const headerTwo = document.createElement("h1");
headerTwo.classList.add("headerTwo");
headerTwo.textContent = "I'm in a div";

const paragraphTwo = document.createElement("p");
paragraphTwo.classList.add("paragraphTwo");
paragraphTwo.textContent = "ME TOO!";

someDiv.appendChild(headerTwo);
someDiv.appendChild(paragraphTwo);


container.appendChild(content);
container.appendChild(paragraph);
container.appendChild(header);
container.appendChild(someDiv);


/*
Method 2

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");

*/

//const btn = document.querySelector("#btn");
//btn.onclick = () => alert("Hello World");


/*

Method 3

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});
*/

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});

/*

a <p> with red text that says “Hey I’m red!”
an <h3> with blue text that says “I’m a blue h3!”
a <div> with a black border and pink background color with the following elements inside of it:
another <h1> that says “I’m in a div”
a <p> that says “ME TOO!”
Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

*/