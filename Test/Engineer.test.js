const Engeneer = require('../lib/Engeneer');


test("Can instantiate Employee instance", () => {
    const e = new Engeneer();
    expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Santiago";
    const e = new Engeneer(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Engeneer("Santiago", testValue);
    expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Engeneer("Santiago", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can set GitHub via constructor argument", () =>{
    const testValue = "GitHub";
    const e = new Engeneer("Santiago", 1, "email", testValue);
    expect(e.github).toBe(testValue);
})