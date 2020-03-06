/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
  let prefix = [a[0]]
  for (let i = 1; i < a.length; i++) {
    prefix[i] = prefix[i-1] * a[i]
  }
  let postfix = []
  postfix[a.length-1] = a[a.length-1]
  for (let i = a.length-2; i >= 0; i--) {
    postfix[i] = postfix[i+1] * a[i] 
  }
  let rs =[]
  for (let i = 0; i < a.length; i++) {
    if (i === 0) {
      rs.push(postfix[i+1])
    } else if (i === a.length-1) {
      rs.push(prefix[i-1])
    } else {
      rs.push(prefix[i-1] * postfix[i+1])
    }
  }
  return rs 
};

constructArr([1, 2, 3, 4, 5])