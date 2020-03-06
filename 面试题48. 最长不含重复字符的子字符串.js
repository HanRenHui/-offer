/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let left = 0;
  let max = 0;
  let index = 0;
  for (let right = 0; right < s.length; right++) {
    let cur = s[right];
    let str = s.slice(left, right);
    index = str.indexOf(cur);
    if (index > -1) {
      left += index + 1;
    }
    max = Math.max(max, right - left + 1);
  }
  return max;
};

