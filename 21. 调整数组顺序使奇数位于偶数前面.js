/**
 * @param {number[]} nums
 * @return {number[]}
 */
function swap(i, j, arr) {
  ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

var exchange = function(nums) {
  let left = -1 
  for (let right =0; right < nums.length; right++) {
    if (nums[right] % 2 !== 0) {
      swap(++left, right, nums)
    }
  }
  return nums 
};