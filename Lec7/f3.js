let button = document.createElement("button");
console.log(button);
button.innerText = "Click Me!";

// Add button at the div
let div = document.querySelector("div");
console.log(div);
div.append(button);

let heading = document.createElement("h1");
console.log(heading);
heading.innerText = "Welcome to our Class!";
div.before(heading);

button.remove()