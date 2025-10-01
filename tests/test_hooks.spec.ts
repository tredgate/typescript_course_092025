import { expect } from "chai";
import { Calculator } from "../src/calculator/calculator_oop.ts";

describe("Testy Kalulačky", () => {
  let calc: Calculator;

  beforeEach(() => {
    console.log("Běžím před každým testem");
    calc = new Calculator();
  });

  before(() => {
    console.log("Běžím před prvním testem");
  });

  afterEach(() => {
    console.log("Běžím po každém testu, jsem uklízeč");
  });

  after(() => {
    console.log("Běžím po posledním testu");
  });

  it("Calculator.add(1, 1) to equal 2", () => {
    expect(calc.add(1, 1)).to.equal(2);
  });

  it("Calculator.subtract(5, 3) to equal 2", () => {
    expect(calc.subtract(5, 3)).to.equal(2);
  });

  it("Calculator.multiply(5, 3) to equal 15", () => {
    expect(calc.multiply(5, 3)).to.equal(15);
  });

  it("Calculator.divide(20, 2) to equal 10", () => {
    expect(calc.divide(20, 2)).to.equal(10);
  });
});
