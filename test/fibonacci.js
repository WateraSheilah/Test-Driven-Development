const assert = require("assert");
const fibonacci = require("../fibonacci");

describe("Fibonacci Function", function () {
    it("should return 0 for fibonacci(0)", function () {
        assert.strictEqual(fibonacci(0), 0);
    });

    it("should return 1 for fibonacci(1)", function () {
        assert.strictEqual(fibonacci(1), 1);
    });

    it("should return 1 for fibonacci(2)", function () {
        assert.strictEqual(fibonacci(2), 1);
    });

    it("should return 2 for fibonacci(3)", function () {
        assert.strictEqual(fibonacci(3), 2);
    });

    it("should return 3 for fibonacci(4)", function () {
        assert.strictEqual(fibonacci(4), 3);
    });

    it("should return 5 for fibonacci(5)", function () {
        assert.strictEqual(fibonacci(5), 5);
    });

    it("should return 8 for fibonacci(6)", function () {
        assert.strictEqual(fibonacci(6), 8);
    });

    it("should throw an error for negative numbers", function () {
        assert.throws(() => fibonacci(-1), Error, "Fibonacci is not defined for negative numbers");
    });
});
