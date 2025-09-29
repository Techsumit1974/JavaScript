let str1 = "Java";
let str2 = "Script";

console.log(str1[2]);

console.log("\nTemplate Literal :--");
let specialString = `This is a template literal` // This string is formed in the form of backticks
console.log(typeof(specialString));

let obj = {
    item : "pen",
    price : 10,
};

console.log("Price of ", obj.item, "is :", obj.price, "rupees"); // Here 10 gets highlighted indicating it is a no

let output = `The cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);