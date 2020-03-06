/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let zeroC = nums[0] === 0 ? 1 : 0;
  for (let i = 1; i < nums.length; i++) {
    let cur = nums[i];
    if (cur === 0) {
      zeroC++;
    } else if (nums[i - 1] === 0) {
      continue;
    } else {
      if (cur === nums[i - 1]) return false;
      let cha = Math.abs(cur - nums[i-1]);
      if (cha === 1) {
        continue;
      } else {
        if (cha - 1 > zeroC) return false;
        zeroC -= cha - 1;
      }
    }
  }
  return true;
};