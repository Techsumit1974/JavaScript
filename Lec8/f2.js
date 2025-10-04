let btn1 = document.querySelector("button");
let text = document.querySelector("h1");
btn1.addEventListener("click", () => {
    console.log("Button1 was clicked");
});

const double_click = () => {
    console.log("Button1 was clicked two times");
};

btn1.addEventListener("dblclick", double_click);

btn1.removeEventListener("dblclick", double_click);

text.addEventListener("copy", (event) => {
    event.clipboardData.setData('text/plain','👾👾👾')
    event.preventDefault();
})

