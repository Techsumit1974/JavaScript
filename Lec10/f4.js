let promise = new Promise((resolve, reject) => {
    console.log("Promise is executed...");
    //resolve(123);
    reject("unknown error")
});

function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataID);
            resolve("Data received")
            if (getNextData) getNextData();
        }, 2000);
    });
} 