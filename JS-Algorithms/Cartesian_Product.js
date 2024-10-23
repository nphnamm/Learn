// Given two finite non-empty sets, find their Cartesian Product.
// In mathematics, specifically set theory, the cartesian product of two sets A and B,
// denoted AxB, is the set of all ordered pairs (a,b) where a is in A and b is in B

const A = [1, 2];
const B = [3, 4];
AxB = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
];

function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}
const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesianProduct(arr1, arr2));
