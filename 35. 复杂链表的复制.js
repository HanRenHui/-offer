/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  let temp = head 
  while(temp) {
    let copy = new Node(temp.val)
    copy.next = temp.next.next 
    temp.next = copy 
    temp = copy.next 
  }

  temp = head 
  while(temp) {
    let copy = temp.next 
    if (temp.random) {
      copy.random = temp.random.next 
    }
    temp = temp.next.next 
  }
  temp = head 
  let copyhead = temp.next 
  let copytemp = copyhead
  while(temp) {

    temp.next = temp.next.next 
    if (temp.next) {
      copytemp.next = temp.next.next 
    } else {
      copytemp.next = null 
    }
    temp = temp.next 
    copytemp = copytemp.next 
  }
  return copyhead 
};