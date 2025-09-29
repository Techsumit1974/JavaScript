let marvel_heroes = ["thor", "spiderman", "ironman", "antman", "dr. strange"];
console.log(marvel_heroes);

console.log(marvel_heroes.slice(1,3)); // Ending index not included

let val = marvel_heroes.splice(2, 2, "superman", "batman");
// (2 -> first two indices are left, 2 -> 2 items to be deleted, "superman", "batman" -> new elements to be added)
console.log(val);
console.log(marvel_heroes);

let arr = [1,2,3,4,5,6,7];
//Add Element
arr.splice(2, 0, 100);
console.log(arr);

//Delete Element
arr.splice(2,1);
console.log(arr);

//Replace Element
arr.splice(2,1,100);
console.log(arr);