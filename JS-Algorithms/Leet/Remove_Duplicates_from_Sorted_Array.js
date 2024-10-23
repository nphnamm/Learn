/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Check if the array is empty
  if (nums.length === 0) return 0;

  let k = 1; // k is the count of unique elements

  for (let i = 1; i < nums.length; i++) {
    // Only update the unique position if the current element is different
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }

    // -- i = 1
    //[0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

    // -- i = 2
    //k =2
    //[0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

    // -- i = 3
    //[0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

    // -- i = 4
    //[0, 1, 1, 1, 1, 2, 2, 3, 3, 4];

    // -- i = 5
    // k=2
    //[0, 1, 2, 1, 1, 2, 2, 3, 3, 4];
    // k=3

    // -- i = 6
    // k=2
    //[0, 1, 2, 1, 1, 2, 2, 3, 3, 4];
    // k=3

    // -- i = 7
    // k=3
    //[0, 1, 2, 3, 1, 2, 2, 3, 3, 4];
    // k=4

    // -- i = 8
    // k=3
    //[0, 1, 2, 3, 1, 2, 2, 3, 3, 4];
    // k=4

    // -- i = 9
    // k=4
    //[0, 1, 2, 3, 4, 2, 2, 3, 3, 4];
    // k=5
  }
  console.log("núms", nums);
  return k; // Return the count of unique elements
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
