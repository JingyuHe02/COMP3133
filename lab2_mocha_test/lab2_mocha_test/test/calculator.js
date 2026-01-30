const assert = require("chai").assert;
const calculator = require("../app/calculator");


//  add
describe("Calculator - add()", () => {
  it("PASS: add(5,2) should return 7", () => {
    assert.equal(calculator.add(5, 2), 7, "✅ PASS: add(5,2) expected 7");
  });

  it("FAIL: add(5,2) should NOT return 8", () => {
    assert.equal(calculator.add(5, 2), 8, "❌ FAIL: add(5,2) expected 8");
  });
});

//  sub
describe("Calculator - sub()", () => {
  it("PASS: sub(5,2) should return 3", () => {
    assert.equal(calculator.sub(5, 2), 3, "✅ PASS: sub(5,2) expected 3");
  });

  it("FAIL: sub(5,2) should NOT return 5", () => {
    assert.equal(calculator.sub(5, 2), 5, "❌ FAIL: sub(5,2) expected 5");
  });
});

//  mul
describe("Calculator - mul()", () => {
  it("PASS: mul(5,2) should return 10", () => {
    assert.equal(calculator.mul(5, 2), 10, "✅ PASS: mul(5,2) expected 10");
  });

  it("FAIL: mul(5,2) should NOT return 12", () => {
    assert.equal(calculator.mul(5, 2), 12, "❌ FAIL: mul(5,2) expected 12");
  });
});

//  div
describe("Calculator - div()", () => {
  it("PASS: div(10,2) should return 5", () => {
    assert.equal(calculator.div(10, 2), 5, "✅ PASS: div(10,2) expected 5");
  });

  it("FAIL: div(10,2) should NOT return 2", () => {
    assert.equal(calculator.div(10, 2), 2, "❌ FAIL: div(10,2) expected 2");
  });
});
