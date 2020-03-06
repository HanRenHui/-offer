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
  let valArr = []
  while(parentArr.length) {
    let cur = parentArr.shift() 
    valArr.push(cur.val)
    let left = cur.left 
    let right = cur.right 
    if (left) nextArr.push(left)
    if (right) nextArr.push(right)
  }
  rs.push(valArr)
  next(nextArr)
}
next([root])
return rs
};