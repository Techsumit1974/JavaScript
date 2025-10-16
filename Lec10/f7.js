function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve(200); // 200 shows successful call in api
        }, 2000); 
    });
}

let getWeatherData = async() => {
    await api();
    await api();
}
