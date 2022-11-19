const Intern = require("../lib/Intern");

test("Creates School", () => {
    const testSchool = "School";
    const employeeCreation = new Intern("Jennifer", 3, "jlmayo22@gmail.com", testSchool);
    expect(employeeCreation.school).toBe(testSchool);
});

test("getSchool returns School", () => {
    const testSchool = "School";
    const employeeCreation = new Intern("Jennifer", 3, "jlmayo22@gmail.com", testSchool);
    expect(employeeCreation.getSchool()).toBe(testSchool);
});

test("Role test", () => {
    const testRole = "Intern";
    const employeeCreation = new Intern("Jennifer", 3, "jlmayo22@gmail.com", "School");
    expect(employeeCreation.getRole()).toBe(testRole);
});