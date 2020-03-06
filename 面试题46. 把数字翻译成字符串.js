/**
 * @param {number} num
 * @return {number}
 */

// 暴力
var translateNum = function(num) {
  let rs = 0;
  const next = str => {
    if (!str.length) {
      return rs++;
    }
    next(str.slice(1));
    if (str.length >= 2) {
      let substr = str.slice(0, 2);
      if (!substr.startsWith("0")) {
        let temp = parseInt(substr);
        if (temp < 26) next(str.slice(2));
      }
    }
  };
  next(num.toString());
  return rs;
};

//  dp
var translateNum = function(num) {
  debugger 
  num = num.toString();
  let dp = new Array(num.length);
  for (let i = 0; i < num.length; i++) {
    if (i === 0) {
      dp[i] = 1;
    } else if (i === 1) {
      dp[i] = parseInt(num.slice(0, 2)) > 25 ? 1 : 2;
    } else {
      if (num[i-1] != '0') {
        let subStr = num[i - 1] + num[i];
        let temp = parseInt(subStr);
        if (temp < 26) {
          dp[i] = dp[i - 2]  + dp[i-1];
        } else {
          dp[i] = dp[i - 1];
        }
      } else {
        dp[i] = dp[i - 1];
      }
    }
  }
  return dp[num.length-1]
};

translateNum(220)