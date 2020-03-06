/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null 
  let head = preorder[0]
  let headInOrderIndex = inorder.indexOf(head)
  let leftPreorder = preorder.slice(1, headInOrderIndex+1)
  let rightPerorder = preorder.slice(headInOrderIndex+1)
  let leftInorder = inorder.slice(0, headInOrderIndex)
  let rightInorder = inorder.slice(headInOrderIndex+1)
  let node = new TreeNode(head)
  node.left = buildTree(leftPreorder, leftInorder)
  node.right = buildTree(rightPerorder, rightInorder)
  return node 
};