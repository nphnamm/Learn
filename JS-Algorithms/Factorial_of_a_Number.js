// In mathematics, the factorial of a non-negative integer `n`
// denoted n!, is the product of all postivie integers less than or equal to `n`. 
// Factorial of zero is 1
//TODO: Factorial(4) = 4*3*2*1 = 24
//TODO: Factorial(5) = 5*4*3*2*1 = 120

function factorial(n){
    let result = 1;
    for (let i = 2; i <= n; i++){
        result = result * i;

    }
    return result;

}

//TODO: BIG O = O(n);
console.log(factorial(0))
console.log(factorial(4))
console.log(factorial(5))

//TODO : Calculation not dependent on input - O(1)
//1. LOOP - O(n)
//2. Nested Loop - O(n^2)
//input size reduced by half - 0(logn);