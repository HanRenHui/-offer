/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
  let count = 0
  let rs 
  const next = (node) => {
    if (!node) return 
    next(node.right)
    if (++count === k) return rs = node.val 
    next(node.left)
  }
  next(root)
  return rs 
};