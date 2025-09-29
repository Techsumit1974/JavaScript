marks = [87, 92, 75, 94, 83];

let marks1 = marks.filter((val) => {
    return val >= 90;
});
console.log(marks1);

let n = prompt("Enter a Number");
let arr = [];
for(let i = 1; i <= n; i++) {
    arr[i - 1] = i;
}

const sum = arr.reduce((res, curr) => {
    return res + curr;
});
console.log(`Sum : ${sum}`);

const prod = arr.reduce((res,curr) => {
    return res * curr;
});
console.log(`Prod is ${prod}`);