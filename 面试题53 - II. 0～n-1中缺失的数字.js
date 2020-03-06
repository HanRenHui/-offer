/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let L = 0 
  let R = nums.length-1 
  while(L < R) {
    let mid = (L + R) >> 1 
    if (nums[mid] === mid) {
      L = mid + 1 
    } else { 
      R = mid 
    }
  }
  return L
};

let nums = [0,1,2, 3, 4, 5, 6, 7, 9]
missingNumber(nums)