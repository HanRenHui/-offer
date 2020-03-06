/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  let num = 0
  while(n) {
    n = n & (n-1)
    num++
  }
  return num 
};
