function myFunc(msg) { // msg -> Parameter
    console.log(msg);
}

myFunc("I love JS"); // "I love JS" -> argument

function sum(x , y) {
    // x & y -> local variables of func -> block scope
    return x + y;
    console.log("after return"); // Line never executed
}

console.log(sum(4, 3));