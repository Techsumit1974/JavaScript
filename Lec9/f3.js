class Parent {
    hello() {
        console.log("Hello");
    }
}

class Child extends Parent {}

let obj = new Child();

class Person {
    constructor() {
        console.log("Enter parent constructor");
        this.species = "homo-sapiens";
    }
    eat() {
        console.log("Eating...");
    }
    sleep() {
        console.log("Sleeping...");
    }
}

class Engineer extends Person {
    constructor(branch) {
        console.log("Enter child constructor");
        super(); // Invoke parent class Constructor
        this.branch = branch;
        console.log("Exit child constructor");
    }
    work() {
        super.eat();
        console.log("Working...");
    }
}

let engObj = new Engineer("Computer Science");