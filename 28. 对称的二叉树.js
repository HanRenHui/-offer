/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  const next = (left, right) => {
    if (!left && !right) return true 
    if (!left || !right) return false 
    if (left.val !== right.val) return false 
    return next(left.left, right.right) && next(left.right, right.left)
  }
  return next(root.left, root.right)
};