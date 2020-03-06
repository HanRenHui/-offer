/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  s = s.trim() 
  s = s.replace(/\s+/g, ' ')
  return s.split(' ').reverse().join(' ')
};