/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  if (n >= s.length || !s) return s 
  let rs = s.slice(n) + s.slice(0, n)
  return rs 
};