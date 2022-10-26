const reverseString = require("../code/reverseString");

test("REVERSE STRING TEST 1", () => {
  expect(reverseString("idk")).toBe("kdi");
});

test("REVERSE STRING TEST 2", () => {
  expect(reverseString("Hi There")).toBe("erehT iH");
});

test("REVERSE STRING TEST 3", () => {
  expect(reverseString("Welcome to the future")).toBe("erutuf eht ot emocleW");
});

test("REVERSE STRING TEST 4", () => {
  expect(reverseString("Today I'm going to be productive :)")).toBe(
    "): evitcudorp eb ot gniog m'I yadoT"
  );
});