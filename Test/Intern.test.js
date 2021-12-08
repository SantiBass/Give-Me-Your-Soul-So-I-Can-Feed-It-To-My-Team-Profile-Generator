const Intern = require('../lib/intern');


test("Can instantiate Employee instance", () => {
    const e = new Intern();
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Santiago";
    const e = new Intern(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Intern("Foo", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Intern("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set school via constructor argument", () =>{
    const testValue = "UCD";
    const e = new Intern("Foo", 1, "email", testValue);
    expect(e.school).toBe(testValue);
})