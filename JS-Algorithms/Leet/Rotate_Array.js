// uuuuuuuuuuvar rotate = function(nums, k) {
    let n = nums.length;
    k = k % n; // Điều chỉnh k nếu k lớn hơn độ dài của mảng

    // Đảo ngược toàn bộ mảng
    reverse(nums, 0, n - 1);
    // Đảo ngược k phần tử đầu tiên
    reverse(nums, 0, k - 1);
    // Đảo ngược phần còn lại của mảng
    reverse(nums, k, n - 1);
};

function reverse(nums, start, end) {
    while (start < end) {
        // Hoán đổi các phần tử
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
