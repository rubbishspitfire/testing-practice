const capitalize = require("../code/capitalize");

test("CAPITALIZE TEST 1", () => {
  expect(capitalize("hi")).toBe("Hi");
});

test("CAPITALIZE TEST 2", () => {
  expect(capitalize("how'sitgoing?")).toBe("How'sitgoing?");
});

test("CAPITALIZE TEST 3", () => {
  expect(capitalize("tHeRe Once was a FarMer who had a FARM")).toBe(
    "THeRe Once was a FarMer who had a FARM"
  );
});

test("CAPITALIZE TEST 4", () => {
  expect(capitalize("yuY")).toBe("YuY");
});