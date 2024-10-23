function binarySearch(arr, target){
    let leftIndex = 0 ;
    let rightIndex = arr.length -1;
    while (leftIndex <= rightIndex) {
        let midIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (arr[midIndex] === target) {
            return midIndex;
        }
        else if (target < arr[midIndex]) {
            rightIndex = midIndex -1;
        }else{
            leftIndex = midIndex + 1;
        }
    }
    return -1;

}


console.log(binarySearch([-5,2,4,6,10,],10))//4

console.log(binarySearch([-5,2,4,6,10,],6))//3

//TODO : Calculation not dependent on input - O(1)
//1. LOOP - O(n)
//2. Nested Loop - O(n^2)
//input size reduced by half - 0(logn);

//TODO: BIG-O = 0(logn)