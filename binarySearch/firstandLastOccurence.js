/*
  First and Last position of elements in sorted Array
  PS: You have been given a sorted Arr/list consisting of 'N' elements.You are also given an integer 'K',Now you're task is to find first (left-most occurence) and last(right-most occurence) of K in arr
  TC1:
  2
  6 3
  0 5 5 6 6
  8 2
  0 0 1 1 2 2 2 2
  4 7
  Algorithm:
  step1:use binarsearch for this kind and find mid 
  step2:if mid===key then store that answer and if you want first occur then move end to left and start to right for last occur
  step3:repeat the above till find and return the answer
*/
function firstOccur(arr,size,key){
    let start=0
    let end=size-1
    let mid=parseInt(start+(end-start)/2)
    let ans=-1
    while(start<=end){
        if(arr[mid]===key){
            ans=mid  //if answer found then store that to some variable
            end=mid-1  //and check for left most by this i.e first occur.
        }else if(key>arr[mid]){
            start=mid+1//if key>arr[mid] then move left as key>arr[mid]

        }else if(key<arr[mid]){
            end=mid-1//if key<arr[mid] then move to right as key<arr[mid]
        }
        mid=parseInt(start+(end-start)/2)
    }
    return ans
}
function lastOccur(arr,size,key){
    let start=0
    let end=size-1
    let mid=parseInt(start+(end-start)/2)
    let ans=-1
    while(start<=end){
        if(arr[mid]===key){
            ans=mid  //if answer found then store that to some variable
            start=mid+1  //and move to  right most by this i.e last occur .
        }else if(key>arr[mid]){
            start=mid+1//if key>arr[mid] then move left as key>arr[mid]

        }else if(key<arr[mid]){
            end=mid-1//if key<arr[mid] then move to right as key<arr[mid]
        }
        mid=parseInt(start+(end-start)/2)
    }
    return ans
}
let arr=[0,5,5,6,6]
let size=arr.length
let key=5
console.log(firstOccur(arr,size,key)+","+lastOccur(arr,size,key))