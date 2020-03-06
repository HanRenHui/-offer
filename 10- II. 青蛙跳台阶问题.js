/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
  let dp = []
  dp[1] = 1 
  dp[2] = 2 
  for (let i = 0; i <= n; i++) {
    dp[i] = (dp[i-1] + dp[i-2]) % (10 ** 9 + 7) 
  }
  return dp[n]
};