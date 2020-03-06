/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var Codec = function(root) {
  let rs = []
  const next = (node) => {
    if (!node) return  rs.push(null)
    rs.push(root.val)
    next(node.left)
    next(node.right)
  }
  next(root)
  return rs 
};