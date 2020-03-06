/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      let cur = board[i][j]
      if (cur !== word[0]) continue 
      let rs = next(i, j, word, board, '')
      if (rs) return true 
    }
  }
  return false 
};



function next(i, j, word, board, prefix) {
  if (i < 0 || j < 0 || i >= board.length || j >= board[i].length) return false 
  if (board[i][j] === '*') return false 
  let cur = prefix + board[i][j] 
  if (!word.startsWith(cur)) return false 
  if (word === cur) return true 
  let temp = board[i][j]
  board[i][j] = '*'
  let rs = 
    next(i+1, j, word, board, cur) || 
    next(i-1, j, word, board, cur) || 
    next(i, j+1, word, board, cur) || 
    next(i, j-1, word, board, cur) 
    
  board[i][j] = temp 
  return rs 

}