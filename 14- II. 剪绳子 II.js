var cuttingRope = function(n) {
  if (n === 2) return 1 
  if (n === 3) return 2 
  let rs =1 
  while (n > 4) {
    rs *= 3 
    rs %= (10 ** 9 + 7)
    n -= 3 
  }
  rs *= n 
  return rs % (10 **9 + 7 )
}