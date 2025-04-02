const assert = require("assert");
const factorial = require("../factorial");

describe("Factorial Function", function () {
    it("should return 1 for factorial(0)", function () {
        assert.strictEqual(factorial(0), 1);
    });

    it("should return 1 for factorial(1)", function () {
        assert.strictEqual(factorial(1), 1);
    });

    it("should return 2 for factorial(2)", function () {
        assert.strictEqual(factorial(2), 2);
    });

    it("should return 6 for factorial(3)", function () {
        assert.strictEqual(factorial(3), 6);
    });

    it("should return 24 for factorial(4)", function () {
        assert.strictEqual(factorial(4), 24);
    });

    it("should throw an error for negative numbers", function () {
        assert.throws(() => factorial(-1), /Factorial is not defined for negative numbers/);
    });
});
