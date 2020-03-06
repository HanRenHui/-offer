/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
  const next = (base, num) => {
    if (num === 0) return 1 
    if (num === 1) return base 
    if (num % 2 === 0) {
      return next(base, num/2) * next(base, num/2)
    } else {
      return next(base, 1) * next(base, num-1)
    }
  }
  let temp = n > 0 ? n : -n
  let rs =  next(x, temp)
  return temp === n ? rs : 1 / rs 
};
