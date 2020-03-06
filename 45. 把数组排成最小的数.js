/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  nums = nums.map(item => item.toString()) 
  return nums.sort((a, b) => (a+b) - (b+a)).join('')
};