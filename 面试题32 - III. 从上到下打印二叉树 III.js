/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let rs = []
  let flag = true 
  const next = parentArr => {
    if (!parentArr.length) return 
    let Varr = []
    let tempParent = []
    while(parentArr.length) {
      let parent = parentArr.shift()
      Varr.push(parent.val)
      let left = parent.left 
      let right = parent.right 
      if (left) tempParent.push(left)
      if (right) tempParent.push(right)
    }
    if (Varr.length) {
      if (!flag) {
        Varr = Varr.reverse() 
      }
      rs.push(Varr)
    }
    flag = !flag 
    next(tempParent)
  }
  next([root])
  return rs 
};