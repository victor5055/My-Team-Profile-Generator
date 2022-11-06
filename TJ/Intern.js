// Code to export Intern class.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
    this.title = "Intern";
  }

  getSchool() {
    return this.school;
  }
}
module.exports = Intern;
