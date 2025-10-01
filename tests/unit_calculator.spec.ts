import { expect } from "chai";
import { Calculator } from "../src/calculator/calculator_oop.ts";

describe("Testy Kalulačky", () => {
  it("Calculator.add(1, 1) to equal 2", () => {
    const calc = new Calculator();
    expect(calc.add(1, 1)).to.equal(2);
  });

  it("Calculator.subtract(5, 3) to equal 2", () => {
    const calc = new Calculator();
    expect(calc.subtract(5, 3)).to.equal(2);
  });

  it("Calculator.multiply(5, 3) to equal 15", () => {
    const calc = new Calculator();
    expect(calc.multiply(5, 3)).to.equal(15);
  });

  it("Calculator.divide(20, 2) to equal 10", () => {
    const calc = new Calculator();
    expect(calc.divide(20, 2)).to.equal(10);
  });
});
