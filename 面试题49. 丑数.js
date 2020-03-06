/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  let arr =[1]
  let p2 = 0 
  let p3 = 0 
  let p5 = 0 
  while(arr.length < n) {
    let num2 = arr[p2] * 2 
    let num3 = arr[p3] * 3 
    let num5 = arr[p5] * 5 
    let min = Math.min(num2, num3, num5)
    arr.push(min)
    if (min === num2) p2++ 
    if (min === num3) p3++ 
    if (min === num5) p5++
  }
  return arr[n]
};