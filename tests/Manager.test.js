// Test for Manager
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can create an office number.", () => {
    const testOfficeNumber = 333;
    const employeeInstance = new Manager("Trey", 333, "trey@company.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("Testing officeNumber will return office number.", () => {
    const testOfficeNumber = 333;
    const employeeInstance = new Manager("Trey", 333, "trey@company.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Testing role.", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Trey", 333, "trey@company.com", 333);
    expect(employeeInstance.getRole()).toBe(returnValue);
});