/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let a = ''
  let aCount =0 
  for (let i =0 ; i < nums.length; i++) {
    if (!a) {
      aCount++ 
      a = nums[i]
    } else if (a === nums[i]) {
      aCount++
    } else  {
      aCount--
    }
  }
  return a 
};