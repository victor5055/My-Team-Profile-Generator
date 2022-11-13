// Test for Engineer
const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "victor5055";
    const employeeInstance = new Engineer("victor", 2, "victor@victor-pereira-web-developer.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "victor5055";
    const employeeInstance = new Engineer("victor", 2, "victor@victor-pereira-web-developer.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("victor", 2, "victor@victor-pereira-web-developer.com", "victor5055");
    expect(employeeInstance.getRole()).toBe(returnValue);
});