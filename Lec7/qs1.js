let newButton = document.createElement("button");
newButton.innerText = "click me";
newButton.style.backgroundColor = "red";
newButton.style.color = "white";

let body = document.querySelector("body");
console.log(body);
body.prepend(newButton);