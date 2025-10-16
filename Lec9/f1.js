const student = {
    name : "Techy", 
    marks : 94.4,
    printMarks : () => {
        console.log("marks : ", this.marks);
    },
};

const employee = {
    //  Another way of declaring function inside a object 
    calcTax(salary) { 
        console.log("Tax rate is ", (0.1 * this.salary));
    },
};

const karan = {
    salary: 50000,
    // This same func name will work as it is more closer than the prototype employee calcTax func 
    calcTax() {
        console.log("Tax is 20%"); 
    }
};

const arjun = {
    salary : 60000,
};

karan.__proto__ = employee; // Here we can use employee object functions within karanArjun object
arjun.__proto__ = employee;
