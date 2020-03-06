/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  if (!matrix.length) return [];
  let Lrow = 0;
  let Lcol = 0;
  let Rrow = matrix.length - 1;
  let Rcol = matrix[0].length - 1;
  let rs = [];
  while (Lrow <= Rrow && Lcol <= Rcol) {
    print(matrix, Lrow++, Lcol++, Rrow--, Rcol--);
  }
  function print(arr, Lrow, Lcol, Rrow, Rcol) {
    let curR = Lrow;
    let curC = Lcol;
    if (Lrow === Rrow) {
      for (let i = Lcol; i <= Rcol; i++) {
        rs.push(arr[Lrow][i]);
      }
    } else if (Lcol === Rcol) {
      for (let i = Lrow; i <= Rrow; i++) {
        rs.push(arr[i][Lcol]);
      }
    } else {
      while (curC !== Rcol) {
        rs.push(arr[Lrow][curC++]);
      }
      while (curR !== Rrow) {
        rs.push(arr[curR++][Rcol]);
      }
      while (curC !== Lcol) {
        rs.push(arr[Rrow][curC--]);
      }
      while (curR !== Lrow) {
        rs.push(arr[curR--][Lrow]);
      }
    }
  }
  return rs;
};
