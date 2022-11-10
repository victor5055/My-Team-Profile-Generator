// Code to export Employee class.
class Employee {
    constructor(id,email,name) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.title = "Employee"
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getRole(){
        return this.title;
    }
}
module.exports = Employee;