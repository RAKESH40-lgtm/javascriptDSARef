/*
  Linear search v/s binary search:
  linearSearch->O(n)
  binarySearch->O(logn)
  Algorithm:
  step1:find mid by start and end
  step2:iterate over by start<=end
  step3: compare arr[mid]===key return mid
  step4:decide to move right or left from mid based on key>arr[mid] && key<arr[mid] update start(mid+1) and end(mid-1)
  step5:based on step4 repeat from step2
*/
function binarySearch(arr, size, key) {
    let start = 0//starting index
    let end = size - 1;//ending index
    // let mid=parseInt((start+end)/2)
    let mid = parseInt(start + (end - start) / 2)//to make optimize for out of range
    while (start <= end) {
        if (arr[mid] === key) {
            return mid
        }
        if (key > arr[mid]) {
            start = mid + 1//to update the start value
        } else {
            end = mid - 1//to update the end 
        }
        mid = parseInt(start + (end - start) / 2)//to update the mid
    }
    return -1//if not found then it return -1
}
let arr1 = [2, 4, 6, 8, 12, 18]
let arr2 = [3, 8, 11, 14, 16]
let size1 = arr1.length
let size2 = arr2.length
console.log(binarySearch(arr1, size1, 12))
console.log(binarySearch(arr2, size2, 3))