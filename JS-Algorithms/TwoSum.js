function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      console.log("map get", [map.get(complement), i]);
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return [];
}
var nums = [2, 7, 11, 15];

var target = 9;

const result = twoSum(nums, target);

console.log("reuslt", result);
