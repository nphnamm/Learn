/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let k = 2; // k is the count of unique elements
  for (let i = 2; i < nums.length; i++) {
    // Only update the unique position if the current element is different
    if (nums[i] !== nums[k - 2]) {
      nums[k] = nums[i];
      k++;
    }
  }

  //at i = 2: nums[2] === nums[0] (both are 1), so we kip: [1,1,1,2,2,3]
  //at i = 3: nums[3] !== nums[1] (2 != 1), so we set nums[2] = 2 and increment k to 3: [1,1,2,2,2,3]
  //at i = 4: nums[4] !== nums[k-2=1] (2 != 1), so we set nums [3] = nums[4]: [1,1,2,2,2,3] and increment k to 4
  //at i = 5: nums[5] !== nums[3] (3 != 2), so we set nums[4] = 3 and increment k to 5: [1,1,2,2,3,3]

  return k;
};
