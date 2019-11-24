function heapify(arr, i, size) {
  let leftIndex = 2 * i + 1 
  let rightIndex = 2 * i + 2
  let maxIndex = i  
  if (arr[maxIndex] < arr[leftIndex] && leftIndex < size) {
    maxIndex = leftIndex 
  }
  if (arr[maxIndex] < arr[rightIndex] && rightIndex < size) {
    maxIndex = rightIndex 
  }
  if (maxIndex !== i) {
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]]
    heapify(arr, maxIndex, size)
  }

}
let arr = [2, 5, 7, 65, 99, 4, 1, 3]
function maxHeap(arr, size) {
  arr = arr.slice(0, size)
  let len = arr.length
  for (let i = len >> 1 - 1; i >= 0; i--) {
    heapify(arr, i, len)
  }
  return arr 
}
function main(arr, k) {
  let heap = maxHeap(arr, k)
  for (let i=k, len=arr.length; i < len; i++) {
    if (arr[i] < heap[0]) {
      heap[0] = arr[i]
      heap = maxHeap(heap, k)
    }
  }
  console.log(heap)
}
main(arr, 5)