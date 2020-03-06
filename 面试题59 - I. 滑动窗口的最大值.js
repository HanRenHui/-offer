/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let left = 0;
  let rs = [];
  let tempMax = -1;
  let right = left + k - 1;
  let maxIndex = -1;
  while (right < nums.length) {
    if (maxIndex >= left) {
      if (nums[right] > tempMax) {
        maxIndex = right;
        tempMax = nums[right];
      }
    } else {
      tempMax = Math.max(...nums.slice(left, right + 1));
      maxIndex =
        nums.slice(left, right + 1).findIndex(i => i === tempMax) + left;
    }
    rs.push(tempMax);

    left++
    right++
  }
  return rs;
};

a = [1, 3, -1, -3, 5, 3, 6, 7];
b = 3;
maxSlidingWindow(a, b);
