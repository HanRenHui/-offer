/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function(s) {
  let rs = []
  const next = (pre, s) => {
    if (!s.length) {
      return rs.push(pre)
    }
    for (let i = 0; i < s.length; i++) {
      let copy = [].concat(s) 
      copy.splice(i, 1)      
      next(pre + s[i], copy) 
    }
  }
  next('', s.split(''))
  return [...new Set(rs)]
};
