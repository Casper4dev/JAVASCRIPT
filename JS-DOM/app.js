//DOM Manipulation

//accessing elements by id
// const heading  = document.getElementById("title");
// console.log(heading);



//accessing elements by class name
const list = document.getElementsByClassName("list");
console.log(list);



//accessing elements by tagname
const title = document.getElementsByTagName("h1");
console.log(title)


//accessing elements by query selector
//selecting element by id using query selector
const new_title = document.querySelector("#title");

//selecting element by class using query selector
const new_list = document.querySelector(".list");

//selecting element by tag using query selector
const new_tag = document.querySelector("ul");

//selecting element using child selectors
const child_selector = document.querySelector(".container > h1");

//accessing elements by query selector all
let all_lists = document.querySelectorAll(".list")
console.log(all_lists)


//changing CSS Styling on the DOM
const heading = document.querySelector("#title");
console.log(heading);
heading.style.color = "blue";
heading.style.backgroundColor = "teal";
heading.style.color ="white";
heading.innertext ="Updated Movie List";


//Creating Elements
const container = document.querySelector(".container");
const new_heading = document.createElement("h1");
container.append(new_heading);
new_heading.textContent = "New Series Collection";
const ul = document.createElement("ul");
container.appendChild(ul);
let li = document.createElement("li");
ul.appendChild(li);
li.innerText = "Suits";

//appending Elements

//Modifying Elements



//modifying attributes using setAttribute and remove attribute and classes using classlist

//adding class elements