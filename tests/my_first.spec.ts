import { expect } from "chai";

describe("Můj první test", () => {
  it("1 = 1", () => {
    expect(1).to.equal(1); // ? Expect() <- aktuální hodnota | očekávaná hodnota -> to.equal(1)
  });
});
