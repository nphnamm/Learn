function hIndex(citations) {
  //Sort the citations in descending order;

  citations.sort((a, b) => b - a);

  console.log("after sort", citations);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    // check if the number of citations is graeter than or equal to i + 1;
    if (citations[i] >= i + 1) {
      h = i + 1;
    } else {
      break;
    }
  }
  return h;
}

console.log(hIndex([3, 0, 6, 1, 5])); // Output: 3
// console.log(hIndex([1, 3, 1]));       // Output: 1

// i = 0
// -- citations[0] = 6 ; check: 6>= 0 + 1 => true
// -- update h = 0 + 1 =1 ; current (h) = 1

// i = 1
// -- citations[1] = 5 ; check: 5>= 1 + 1 => true
// -- update h = 1 + 1 =2 ; current (h) = 2

// i = 2
// -- citations[2] = 3 ; check: 3>= 2 + 1 => true
// -- update h = 2 + 1 =3 ; current (h) = 3

// i = 3
// -- citations[3] = 1 ; check: 1>= 3 + 1 => fasle
// -- don't update ; current (h) = 3

// after existing the loop, the value of is 3 , indicating that there are 3 articles cited at least 3 times.
// Therefore, the function return 3;
