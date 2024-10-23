//TODO: WHAT IS RECURSION
//TODO: Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem. 
//RECURSION is when a function calls itself


//TODO: WHY ?
//TODO: A greate technique to simplify your solution
//TODO: It is a good way to solve problems that have a recursive structure
//TODO: if you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful. 


// A few points about recursion 
// Every recursion solution needs to have a base case - a condition to terminate the recursion. 
// Recursion might simplify solving a problem but it does not always translate to a faster solution.
// A recursive solution may be far worse compared to an iterative solution. 


//TODO: give a number `n` find the nth element of the Fibonacci sequence

function RecursiveFibonacci(n) {

    if(n<2){
        return n
    }
    return RecursiveFibonacci(n-1) + RecursiveFibonacci(n-2);


}

console.log(RecursiveFibonacci(1)); //1
console.log(RecursiveFibonacci(2)); //2
console.log(RecursiveFibonacci(6)); //8



