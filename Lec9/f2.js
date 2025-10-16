class ToyotaCar {
    constructor(brand) {
        this.brand = brand;
        console.log("creating new", brand);
    }
    start() {

    }
    stop() {

    }
    setBrand(brand) {
        this.brand = brand;
    }
}
let fortuner = new ToyotaCar("Fortuner");
fortuner.setBrand("Toyota");