const fibonacci = function(n) {
    // Base cases can't be less than 1
    if(n < 0) {
        return "OOPS"
    }
    
    // Test if string has number then parse the string.
    if(!isNaN(n)) {
        n = parseInt(n, 10);
    }

    // After checks run recursive algorithm.
    return fib(n);
};

function fib(n) {
    // Do recursion until we reach our base case of n=1.
    return (n <= 1) ? n : arguments.callee(n-1) + arguments.callee(n-2);
}

// Do not edit below this line
module.exports = fibonacci;
