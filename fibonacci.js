/**
 * Fibonacci function using recursion
 * Pair: 
 * WATERA SHEILAH & [Teammate's Name]
 */
function fibonacci(n) {
    if (n < 0) throw new Error("Fibonacci is not defined for negative numbers");
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(12))
module.exports = fibonacci;
