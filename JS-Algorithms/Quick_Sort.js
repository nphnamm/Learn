/* Quick Sort idea 
identify the pivot element in the Array
Pick first element as pivot 
Pick last element as Pivot (Our Approach)
Pick a random element as pivot 
Pick median as pivot 

*/
/* 
Put everything that's smaller than the pivot into a `left` array and everything that's 
greater than the pivot into a `right` array 


Repeat the process for the individual `left` and `right` 
arrays till you have an array of length 1 which is sorted by definition

Repeatedly concatenate the left array, pivot and right array til one sorted array remains 

*/




function quickSort (arr) {
    let pivot = arr[arr.length -1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < pivot){
            left.push(arr[i]);

        }else{
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

const arr = [8,20,-2,4,-6]

// i = 0 
// right = [8], left = []

// i = 1
// right = [8,20], left = [];

// i = 2
// right = [8,20,-2], left = [];

// i =3 
// right = [8,20,-2,4], left = []

[...[], -6, [8,20,-2,4]]

// i = 0 
// right = [8], left = []

// i = 1
// right = [8,20], left = [];

// i = 2
// right = [8,20], left = [-2];

[...[-2], -4, [8,20]]

console.log(quickSort(arr))

// worst case - O(n^2)
// Avg case - O(nlogn);

