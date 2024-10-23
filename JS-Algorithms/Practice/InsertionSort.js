function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    j = i - 1;
    while (j <= 0 && arr[j] < current) {
      arr[j++] = arr[i];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

tim phat tu nho nhat xong trong tung khoang va dung vong lap while de doi vi tri 
