// TODO: Problem: Give a number `n`, determine if the number is prime or not
// A Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.
// Product of two = tich cua hai so 

function isPrime(n){
    if ( n < 2){
        return false;
    }
    for(let i = 2 ; i< n; i++){
        if (n % i === 0){
            return false;
        }

    }
    return true;
}
// TODO : BIG-O - O(n);
console.log(isPrime(79));
console.log(isPrime(89));
console.log(isPrime(97));


//TODO: Optimized primality Test
// Integers larger than the square root do not need to be checked 
// because, whenever `n=a*b` , one of the two factors `a` and `b` is less than or equal to be square root of `n`

function isOptimizedPrime(n){
    if ( n < 2){
        return false;
    }
    for(let i = 2 ; i< Math.sqrt(n); i++){
        if (n % i === 0){
            return false;
        }

    }
    return true;
}
console.log(isOptimizedPrime(32));
