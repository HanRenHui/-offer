/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

var getLeastNumbers = function(arr, k) {
  for (let i = 0; i < k; i++) {
    heapiInsert(arr, i)
  }
  for (let i = k; i < arr.length; i++) {
    let cur = arr[i]
    if (cur < arr[0]) {
      [arr[0], arr[i]] = [arr[i], arr[0]]
      heapify(arr, k-1, 0)
    }
  }
  return arr.slice(0, k)
};


function heapiInsert(arr, i) {
  let parent = parseInt((i-1) / 2)
  while(arr[i] > arr[parent]) {
    [arr[i], arr[parent]] = [arr[parent], arr[i]]
    i = parent 
    parent = parseInt((i-1) / 2)
  }
}

function heapify(arr, size, i) {
  let max = i
  let left = i * 2 + 1 
  let right = i * 2 + 2 
  if (arr[left] > arr[max] && left <= size) max = left 
  if (arr[right] > arr[max] && right <= size) max = right 
  if (max === i) return 
  [arr[max], arr[i]] = [arr[i], arr[max]]
  heapify(arr, size, max)
  
}
getLeastNumbers(arr, k)