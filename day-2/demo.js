//getting elements or selecting elements
var tag1 = document.getElementsByTagName("h1");
var class1 = document.getElementsByClassName("class1");
var id1 = document.getElementById("id1");
//displying in console
console.log(tag1[0].innerText);
console.log(class1[0].innerText);
console.log(id1.innerText);

//changing data by class name

class1[0].innerText='Yes tha data was changed'