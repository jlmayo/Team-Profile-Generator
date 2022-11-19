const Employee = require("../lib/Employee");

test("Creates a new employee.", () => {
    const employeeCreation = new Employee();
    expect(typeof(employeeCreation)).toBe("object");
})

test("Name test.", () => {
    const name = "Jennifer";
    const employeeCreation = new Employee(name);
    expect(employeeCreation.name).toBe(name);
})

test("Id test.", () => {
    const id = 3;
    const employeeCreation = new Employee(id);
    expect(employeeCreation.id).toBe(id);
})

test("Email test.", () => {
    const email = "jlmayo22@gmail.com";
    const employeeCreation = new Employee(email);
    expect(employeeCreation.email).toBe(email);
})

test("getName works.", () => {
    const testName = "Jennifer";
    const employeeCreation = new Employee(testName);
    expect(employeeCreation.getName()).toBe(testName);
})

test("getId works", () => {
    const testId = 3;
    const employeeCreation = new Employee(testId);
    expect(employeeCreation.getId()).toBe(testId);
})

test("getEmail works", () => {
    const testEmail = "jlmayo22@gmail.com";
    const employeeCreation = new Employee(testEmail);
    expect(employeeCreation.getEmail()).toBe(testEmail);
})

test("Role test", () => {
    const testRole = "Employee";
    const employeeCreation = new Employee("Jennifer", 2, "jlmayo22@gmail.com");
    expect(employeeCreation.getRole()).toBe(returnValue);
})