// Code to export Employee class.
class Employee {
    constructor(name,id,email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee"
    }

    getId(){
        return this.name;
    }

    getEmail(){
        return this.id;
    }

    getName(){
        return this.email;
    }

    getRole(){
        return this.title;
    }
}
//Exporting Employee
module.exports = Employee;