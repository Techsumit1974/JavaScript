nums = [1,2,3,4,5];

let newArr = nums.map((val) => {
    return val**2;
});

console.log(newArr);

let newArr1 = nums.filter((val) => {
    return val % 2 == 0;
});

console.log(newArr1);

let out = nums.reduce((res, curr) => {
    return res + curr;
});

console.log(out);

let arr = [6, 2, 8, 14];

// Finding max no.in array
const max = arr.reduce((prev, curr) => {
    return prev < curr ? curr : prev;
});

console.log(max);