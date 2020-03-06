/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function(root) {
  if (!root) return []
let rs = []
const next = parentArr => {
    if (!parentArr.length) return 
  let nextArr = []
  while(parentArr.length) {
    let cur = parentArr.shift() 
    rs.push(cur.val)
    let left = cur.left 
    let right = cur.right 
    if (left) nextArr.push(left)
    if (right) nextArr.push(right)
  }
  next(nextArr)
}
next([root])
return rs 
};