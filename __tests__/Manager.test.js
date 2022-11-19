const Manager = require("../lib/Manager");


test("Office Number created", () => {
    const testOfficeNumber = "5";
    const employeeCreation = new Manager("Jennifer", 3, "jlmayo22@gmail.com", testOfficeNumber);
    expect(employeeCreation.officeNumber).toBe(testOfficeNumber);
});

test("officeNumber returns an office number", () => {
    const testOfficeNumber = "5";
    const employeeCreation = new Manager("Jennifer", 3, "jlmayo22@gmail.com", testOfficeNumber);
    expect(employeeCreation.getOfficeNumber()).toBe(testOfficeNumber);
});

test("Role test", () => {
    const testRole = "Manager";
    const employeeCreation = new Manager("Jennifer", 3, "jlmayo22@gmail.com", 5);
    expect(employeeCreation.getRole()).toBe(testRole);
});