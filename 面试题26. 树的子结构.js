/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function(A, B) {
  if (!B) return  false 
  if (!A) return false 
  let rs 
  if (A.val === B.val) {
    rs = isSame(A, B)
  } else {
    rs = isSubStructure(A.left, B)
    if (rs) return true 
    rs = isSubStructure(A.right, B)
  }
  return rs 
};

function isSame(left, right) {
  if (!left && !right) return true 
  if (!left) return false 
  if (!right) return true 
  if (left.val !== right.val) return false 
  return isSame(left.left, right.left) && isSame(left.right, right.right)
}