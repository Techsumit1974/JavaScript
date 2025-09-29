let itemPrice = [250, 645, 300, 900, 50];
console.log("Before applying offer :- ");
console.log(itemPrice);

for(let pr = 0; pr < itemPrice.length; pr++) {
    itemPrice[pr] *= 0.9;
}

console.log("After applying offer :- ");
console.log(itemPrice);