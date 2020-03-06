/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
  let fast = head 
  let slow = head 
  let index = 0
  while(++index < k) {
    fast = fast.next 
  }
  while(fast.next) {
    slow = slow.next 
    fast = fast.next 
  }
  return slow 
};