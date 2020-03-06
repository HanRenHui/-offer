/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let left = 1
  let sum = 1
  let rs = []
  let temp = [1]
  debugger 
  for (let right = 2; right < target; right++) {
    sum += right 
    temp.push(right)
    while(sum > target) {
      sum -= left 
      temp.shift()
      left ++ 
    }
    if (sum === target) {
      rs.push(temp)
      temp = [].concat(temp)
    }
  }
  return rs 
};
findContinuousSequence(9)