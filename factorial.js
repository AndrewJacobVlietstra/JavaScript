// Solving this recursively by calling the function within itself
function factorial(n) {
    if (n == 0) {
        return 1;
    } else {
        return factorial(n-1) * n;
    }
}
console.log(factorial(5));