const getPromise = () => {
    return new Promise((resolve, reject) => {
    console.log("Promise is executed...");
    // resolve("success");
    reject("some issue");
    });
}

let promise = getPromise();
promise.then(() => {
    console.log("Promise is fulfilled");
});

promise.catch(() => {
    console.log("Promise is rejected");
});


