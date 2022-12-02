/*
PS:An array arr a mountain if the following properties hold:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... < arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].
You must solve it in O(log(arr.length)) time complexity.
Example 1:
Input: arr = [0,1,0]
Output: 1
Example 2:
Input: arr = [0,2,1,0]
Output: 1
Example 3:
Input: arr = [0,10,5,2]
Output: 1
Algorithm:
In the mountain there'll be increasing/decreasing array where the max lies between (increase<mid>decrease).
while finding iterate in s<e
step1:find mid index in a array
step2:find if arr[mid]<arr[mid+1] then move start pointer to mid+1
step3:else move end to mid as in decreasing the elements lies can be mid/decreasing .
step4:return s
*/
function mountainPeak(arr){
    let start=0
    let end=arr.length-1
    let mid=parseInt(start+(end-start)/2)
    while(start<end){
        if(arr[mid]<arr[mid+1]){
            start=mid+1
        }else{
            end=mid
        }
        mid=parseInt(start+(end-start)/2)
    }
    return start
}
let arr=[3,4,5,1]
console.log(mountainPeak(arr))