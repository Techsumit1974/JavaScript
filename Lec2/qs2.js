let score = prompt("Enter the score : ");
console.log("Grade : ");
if (score >= 90 && score <= 100) console.log("A");
else if (score >= 70 && score <= 89) console.log("B");
else if (score >= 60 && score <= 79) console.log("C");
else if (score >= 50 && score <= 69) console.log("D");
else if (score >= 0 && score <= 59) console.log("F");
else console.log("Invalid Score")
