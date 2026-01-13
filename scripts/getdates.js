
// Gettiong the year from the object Date
let year = new Date().getFullYear();

// get the span element
spanElem = document.getElementById("currentyear");

//Inserting the current year into the span tag
spanElem.textContent = year;

// adding a color style to the element

spanElem.style.color = "#e6be04";

// get the last modified p element
last_m = document.getElementById("lastModified");

// Getting the time dynamically by using the lastModified property
document.getElementById("lastModified").innerHTML = "Last Modified: " + document.lastModified;

// style the last modified p element
last_m.style.color = "#e6be04";

 