/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
  let left = 0 
  let right = numbers.length-1 
  while(left < right) {
    let mid = (left + right) >> 1 
    if (numbers[right] > numbers[mid]) {
        right = mid
    } else if (numbers[right] < numbers[mid]) {
        left = mid + 1 
    } else {
        right --
    }
  }
  return numbers[left]
};