/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
  let rs = ''
  for (let i = 0; i < str.length; i++) {
    let cur =str[i]
    if (i === 0 && /[a-zA-Z]/.test(cur)) return false 
    if (cur === ' ') continue 
    if (/[\+\-0-9]/.test(cur)) {
      let index = i
      rs += cur 
      while(/[0-9]/.test(str[++index]) && index < str.length) {
        rs += str[index]
      }
    } else {
      return 0
    }
  }
  if (rs === '+' || rs === '-') return 0
  rs = rs ? parseInt(rs) : 0
  if (rs > 2 ** 31 - 1) rs = 2 ** 31 - 1 
  if (rs < (-2) ** 31) rs = (-2) ** 31 
  return rs 
};