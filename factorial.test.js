const { expect } = require("chai");
const factorial = require("../factorial");

describe("Factorial Function", function () {
    it("should return 1 for factorial(0)", function () {
        expect(factorial(0)).to.equal(1);
    });

    it("should return 1 for factorial(1)", function () {
        expect(factorial(1)).to.equal(1);
    });

    it("should return 2 for factorial(2)", function () {
        expect(factorial(2)).to.equal(2);
    });

    it("should return 6 for factorial(3)", function () {
        expect(factorial(3)).to.equal(6);
    });

    it("should return 24 for factorial(4)", function () {
        expect(factorial(4)).to.equal(24);
    });

    it("should throw an error for negative numbers", function () {
        expect(() => factorial(-1)).to.throw("Factorial is not defined for negative numbers");
    });
});
