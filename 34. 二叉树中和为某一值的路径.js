/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
function sumf(arr) {
  if (!arr.length) return Number.MAX_SAFE_INTEGER
  return arr.reduce((pre, cur) => pre + cur, 0)
}
var pathSum = function(root, sum) {
  let rs = []
  const next = (node, pre) => {
    if (!node) return 
    if (!node.left && !node.right) {
      if (sumf(pre.concat(node.val)) === sum) {
        return rs.push(pre.concat(node.val))
      }
    } else {
      if (node.left) next(node.left, pre.concat(node.val))
      if(node.right) next(node.right, pre.concat(node.val))
    }   

  }
  next(root, [])
  return rs 
};