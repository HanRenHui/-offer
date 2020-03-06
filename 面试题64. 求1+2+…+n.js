/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function(n) {
  let sum = 0
  const next = (num) => {
    if (num > n) return 
    sum += num 
    next(num+1)
  }
  next(1)
  return sum 
};