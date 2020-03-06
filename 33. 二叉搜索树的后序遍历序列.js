/**
 * @param {number[]} postorder
 * @return {boolean}
 */
var verifyPostorder = function(postorder) {
  const next = (arr) => {
    
    if (!arr.length)return -1 
    let head = arr.pop() 
    let i = 0 
    while(arr[i] < head) {
      i++
    }    
    let left = arr.slice(0, i)
    let right = arr.slice(i)
    if (right.some(item => item < head)) return false 
    let Lrs = next(left)
    if (Lrs === false) return false 
    let Rrs = next(right)
    if (Rrs === false) return false 
    if (Lrs === -1 && Rrs === -1) return head 
    if (Lrs === -1) return Rrs > head  ? head : false 
    if (Rrs === -1) return head > Lrs ? head : false   
    if (head > Lrs && Rrs > head) return head 

  }
  return next(postorder)
};

a = [7, 4, 6, 5]

verifyPostorder(a)