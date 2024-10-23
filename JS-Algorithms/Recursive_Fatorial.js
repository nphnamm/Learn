// Recursive factorial of a number contd

// Factorial of a non-negative integer `n` is the product of all positive integers less than or equal to `n`;
// Factorial == Giai thừa. 

function recursiveFactorial(n){
    if(n === 0){
        return 1;
        
    }
    return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(1));
console.log(recursiveFactorial(5));
