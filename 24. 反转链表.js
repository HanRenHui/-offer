/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (!head) return null 
  let headNode = head 
  while(head.next) {
    let curNode = head.next 
    let nextNode = curNode.next 
    head.next = nextNode 
    curNode.next = headNode 
    headNode =curNode 
  }
  return headNode 
};