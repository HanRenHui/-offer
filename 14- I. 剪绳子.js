/**
 * @param {number} n
 * @return {number}
 */

 // 暴力法 超时
var cuttingRope = function(n) {
  let max = 0
  const next = (len, pre, preLen) => {
    if (len <= 1) {
      return max = Math.max(pre,max)
    }
    for (let i = 1; i <= len; i++) {
        if (preLen === 0 && i === len) continue 
      next(len-i, pre * i, preLen+1)
    }
  }
  next(n, 1, 0)
  return max 
};


//dp

//dp
var cuttingRope = function(n) {
  let dp = new Array(n+1).fill(1)
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i === n && j === n) continue 
      dp[i] = Math.max(dp[i], dp[i-j] * j )

    }
  }
  return dp[n]
}
rs = cuttingRope(4)
console.log(rs)