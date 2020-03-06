/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
  let dp = new Array(grid.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(grid[i].length);
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = grid[i][j];
      } else if (i === 0) {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
      }
    }
  }
  return dp[grid.length - 1][grid[0].length - 1];
};
