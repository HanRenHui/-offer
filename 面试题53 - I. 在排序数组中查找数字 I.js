/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  if (nums.length === 1) return target === nums[0] ? 1 : 0
  let left = 0
  let right = nums.length -1
  while(left < right) {
    let mid = (left + right+1) >> 1 
    if (nums[mid] > target) {
      right = mid -1 
    } else {
      left = mid 
    }
  }

  if (nums[left] !== target) return 0 
  let count = 1 
  while(nums[--left] === target && left>-1) {count++}
  while(nums[++right] === target && right < nums.length) {count++}
  return count 

};