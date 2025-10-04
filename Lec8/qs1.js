let btn1 = document.querySelector("button");
console.log(btn1);

let curr_mode = "light";

btn1.addEventListener("click", () => {
    if (curr_mode == "light") {
        curr_mode = "dark";
        document.querySelector("body").classList.add("dark");
        document.querySelector("body").classList.remove("light");
        //document.querySelector("body").style.backgroundColor = "black";
    } else {
        curr_mode = "light";
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
        //document.querySelector("body").style.backgroundColor = "white";
    }  
    console.log(curr_mode);
});


