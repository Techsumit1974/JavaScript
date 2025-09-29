function vowel(str) {
    let cnt = 0;
    for(let i of str.toLowerCase()) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i== 'u') cnt++;
    }
    console.log("No of vowels using function keyword : ", cnt);
};


const find_vowel = (str) => {
    let cnt = 0;
    for(let i of str.toLowerCase()) {
        if (i == 'a' || i == 'e' || i == 'i' || i == 'o' || i== 'u') cnt++;
    }
    console.log("No of vowels using arrow function : ", cnt);
}

let str = prompt("Enter a string : ");
vowel(str);
find_vowel(str);