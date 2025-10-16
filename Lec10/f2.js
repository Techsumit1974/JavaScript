let sum = (a, b) => {
    console.log(`${a + b}`);
}

let mul = (a, b) => {
    console.log(`${a * b}`);
}
 
let calc = (a, b, sumCallBack) => {
    sumCallBack(a,b);
}

calc(1, 2, sum);
calc(3, 4, mul);