let getData = (dataId, getNextData) => {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) getNextData();
    }, 2000);
}

// Callback Hell
getData(1, () => {
    console.log("getting data2...");
    getData(2, () => {
        console.log("getting data3...");
        getData(3);
    });
});

// // Promise Chain
let getData = (dataId, getNextData) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("data", dataId);
        resolve("success");
        if (getNextData) getNextData();
        }, 2000);
    });
}

console.log("getting data1");
getData(1).then((res) => {
    console.log("getting data2");
    console.log(res);
    getData(2).then((res) => {
        console.log("getting data3");
        console.log(res);
        getData(3);
    });
});

getData(1)
  .then((res) => {
    console.log("getting data2");
    console.log(res);
    return getData(2);  
  })
  .then((res) => {
    console.log("getting data3");
    console.log(res);
    return getData(3); 
  })
  .then((res) => {
    console.log(res);   
  });

// Async-Await
async function getAllData() {
  console.log("getting data1...")
  await getData(1);
  console.log("getting data2...")
  await getData(2);
  console.log("getting data3...")
  await getData(3);
  console.log("getting data4...")
  await getData(4);
}

// Async-Await + IIFE
(async function () {
  console.log("getting data1...")
  await getData(1);
  console.log("getting data2...")
  await getData(2);
  console.log("getting data3...")
  await getData(3);
  console.log("getting data4...")
  await getData(4);
})();