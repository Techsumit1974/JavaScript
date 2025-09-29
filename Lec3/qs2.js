while(1) {
    const gameNum = 25;
    let num = prompt("Enter a Number ");
    if (num == gameNum) {
        console.log("Correct value gussed");
        break;
    }
    else if (num < gameNum) console.log("Guessed no is smaller");
    else if (num > gameNum) console.log("Guessed number is greater");
    else console.log("Invalid guess")
}