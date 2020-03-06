/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
  let tempHead = head 
  let pre = null  
  while(tempHead.val !== val) {
    pre = tempHead 
    tempHead = tempHead.next 
  }
  if (!pre) return head.next 
  let next = tempHead.next 
  pre.next = next 
  tempHead.next = null 
  return head  
};