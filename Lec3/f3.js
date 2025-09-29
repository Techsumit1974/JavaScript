console.log("For-of loop :-- ");

let str = "JavaScript";
let size = 0;
for(let i of str) {
    console.log("i : ", i);
    size++;
}
console.log("Size : ", size);

console.log("\nFor-in loop :-- ");

let student = {
    name : "TechGuy",
    age : 20,
    cgpa : 9.5,
    isPass : true,
};

for(let key in student) {
    console.log("key : ", key, ", value : ", student[key]);
}