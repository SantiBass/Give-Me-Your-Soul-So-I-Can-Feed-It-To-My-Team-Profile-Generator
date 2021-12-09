const Manager = require('../lib/Manager')

test("Can instantiate Employee instance", () => {
    const e = new Manager();
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const e = new Manager(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Manager("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Manager("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set office number via constructor argument", () =>{
    const testValue = "1234";
    const e = new Manager("Foo", 1, "email", testValue);
    expect(e.officeNumber).toBe(testValue);

})