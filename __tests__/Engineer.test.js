const Engineer = require("..lib/Engineer");

test("GitHub creation works", () => {
    const testGitHub = "jlmayo";
    const employeeCreation = new Engineer("Jennifer", 3, "jlmayo22@gmail.com", testGitHub);
    expect(employeeCreation.github).toBe(testGitHub);
});

test("getGitHub returns github", () => {
    const testGitHub = "jlmayo";
    const employeeCreation = new Engineer("Jennifer", 3, "jlmayo22@gmail.com", testGitHub);
    expect(employeeCreation.getGitHub()).toBe(testGitHub);
});

test("Role test", () => {
    const testRole = "Engineer";
    const employeeCreation = new Engineer("Jennifer", 3, "jlmayo22@gmail.com", "jlmayo");
    expect(employeeCreation.getRole()).toBe(testRole);
})
