/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  if (!head) return []
  let rs = []
  const next = node => {
    if (!node) return 
    next(node.next)
    rs.push(node.val)
  }
  next(head)
  return rs 
};