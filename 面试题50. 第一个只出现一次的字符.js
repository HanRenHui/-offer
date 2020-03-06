/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  if (!s) return ' '
  let map = {}
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    if (map[cur]) {
      map[cur]++ 
    } else {
      map[cur] = 1
    }
  }
  for (let key in map){
    if (map[key] === 1) return key
  }
  return ''
};