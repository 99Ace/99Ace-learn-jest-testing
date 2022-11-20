const { sum, printMessage } = require("./functions");

describe("Test function sum ", () => {
  it("should return sum of the 2 numbers passed", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

// check for console.log
describe("Test printMessage function", () => {
  it("should print message", () => {
    console.log = jest.fn();
    printMessage("Hello World");
    expect(console.log).toHaveBeenCalledWith("Hello World");
  });
});
