function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data1");
            resolve("success");
        }, 4000);
    });
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("some data2");
            resolve("success");
        }, 4000);
    });
}

console.log("Fetching data1...")
asyncFunc1().then((res) => {
    console.log(res);
    console.log("Fetching data2...")
    asyncFunc2().then((res) => {
        console.log(res);
    });
});

