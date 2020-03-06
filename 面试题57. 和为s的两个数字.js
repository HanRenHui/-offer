/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  if (!nums.length) return []
  let map = {}
  for (let i = 0; i < nums.length; i++ ) {
    let cur = nums[i]
    if (map[target-cur] !== undefined) {
      return [cur, target-cur]
    }
    map[cur] = i 
  }
  return []
};