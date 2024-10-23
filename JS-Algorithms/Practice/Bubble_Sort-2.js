function BubbleSort(arr) {
  let swapped;
  for (let i = arr.length - 1; i > 0; i--) {
    swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
  return arr;
}
let array = [64, 34, 25, 12, 22, 11, 90];
console.log(BubbleSort(array)); // Output: [11, 12, 22, 25, 34, 64, 90]

// bigO - O(n^2)

// tim phan tu lon nhat trong tung khoang giam dan roi den nho nhat
