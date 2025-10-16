class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("WEBSITE DATA");
    }
}

class Admin extends User {
    editData() {
        console.log("Data is modified");
    }
}

let obj = new User("TechGuy","tg123@gmail.com");
let obj1 = new Admin();