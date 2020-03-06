/**
 * // Definition for a Node.
 * function Node(val, left, right) {
 *      this.val = val;
 *      this.left = left;
 *      this.right = right;
 *  };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
  if (!root) return null 
  let node = root 
  let arr = []
  let pre = null 
  let head = null 
  let last = null 
  while(node || arr.length) {
    if (node) {
      arr.push(node)
      node = node.left   
    } else {
      node = arr.pop() 
      if (pre) {
        node.left = pre 
        pre.right = node 
      } else {
        head = node 
      }
      pre = node 
      last = node 
      node = node.right 
    }
  }
  head.left = last 
  last.right = head 
return head 
};