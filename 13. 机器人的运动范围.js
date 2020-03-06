/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function sum(num) {
  if (!num) return 0;
  num = num.toString().split("");
  return num.reduce((pre, cur) => pre + parseInt(cur), 0);
}

var movingCount = function(m, n, k) {
  let help = new Array(m)
  let count = 0
  for (let i = 0; i < help.length; i++) {
    help[i] = new Array(n)
  }
  function next(i, j) {
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    if (sum(i) + sum(j) > k) return;
 
    if (help[i][j]) return;
    help[i][j] = true 
    count++
    next(i + 1, j);
    next(i - 1, j);
    next(i, j + 1);
    next(i, j - 1);
  }

  next(0, 0);
  return count 
};
