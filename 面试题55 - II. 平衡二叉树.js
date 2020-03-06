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
const getHeight = node => {
  if (!node) return 0 
  let left = getHeight(node.left)
  let right = getHeight(node.right)
  return Math.max(left, right) + 1 
}
var isBalanced = function(root) {
  if (!root) return true 
  let left = getHeight(root.left)
  let right = getHeight(root.right)
  if (Math.abs(left - right) > 1) return false 
  return isBalanced(root.left) && isBalanced(root.right)
};