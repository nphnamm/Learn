// Virtually split the array into a sorted and an unsor
// Assume that the first element is already sorted and remaining elements are unsorted
// Select an unsorted element and compare with all elements in the sorted part 
// If the selected element is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements
// in the sorted part towards the right. 
// Insert the selected element at the right index 
// Repeat till all the unsorted elements are placed in the right order  
// insert it into the
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j] > numberToInsert ){
            arr[j+1] = arr[j];
            j= j-1;
        }
        arr[j+1] = numberToInsert
    }
}
// i = 1;
// i = arr[1] = 20; 
// j = arr[0] = 8;
// NTS = 8

// i = 2;
// i = arr[2] = -2
// j = arr[1] = 20;
// => arr [2] = 20
// => arr [1] = 8;
// => arr [0] = -2
// [-2,8,20,4,-6];


// i =3;
// i = arr[3] = 4;
// j = arr[2] = 20;
// => arr[3] = 20
// => arr[2] = 8;
// => arr[1] = 4;
// [-2,4,8,20,-6]

//i =4
//i = arr[4] = -6
//j = arr[3] = 20;
// => arr[4] = 20;
// => arr[3] = 8;
// => arr[2] = 4;
// => arr[1] = -2;
// => arr[0] = -6
;





const arr = [8,20,-2,4,-6]
insertionSort(arr);
console.log(arr);
 