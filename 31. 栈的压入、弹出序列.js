/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
  let temp = []
  let j = 0
  for (let i = 0 ; i < pushed.length; i++) {
    temp.push(pushed[i])
    while(temp.length && temp[temp.length-1] === popped[j] && j < popped.length) {
      temp.pop() 
      j++ 
    }
  }  
  return temp.length === 0
  
};