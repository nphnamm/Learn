//TODO: Problem - Give a positive integers `n` determine if the number is a power of 2 or not
// AN integer is a power of two if there exits an integer `x` such that `n` === 2^x

// isPowerOfTwo(1)= true; 2^0
// isPowerOfTwo(8)= true; 2^3
// isPowerOfTwo(10)= false; 10 is not a power of 2

function isPowerOfTwo(n) {
    if(n<1){
        return false;

    }
    while(n>1){
        if(n%2 !==0){
            return false;
        }
        n = n/2;
    }
    return true;
}

console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(10))
console.log(isPowerOfTwo(8))


//TODO: BIG O = O (logn);


function isPowerOfTwoBitWise (n){
    if(n<1){
        return false;
    }
    return (n & (n-1))===0;

}