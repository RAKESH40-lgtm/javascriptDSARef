/* 
   PS:Given an array find total number of occurence of element
   Algorithm:
   step1:find first and last position of elements
   step2:use (last-first)+1 for getting number of occurence of element
*/
function firstOccur(arr,size,key){
    let start=0
    let end=size-1;
    let mid=parseInt(start+(end-start)/2)
    let ans=-1
    while(start<=end){
        if(arr[mid]===key){
            ans=mid
            end=mid-1
        }else if(key>arr[mid]){
            start=mid+1
        }else if(key<arr[mid]){
            end=mid-1
        }
        mid=parseInt(start+(end-start)/2)
    }
    return ans
}
function lastOccur(arr,size,key){
    let start=0
    let end=size-1;
    let mid=parseInt(start+(end-start)/2)
    let ans=-1
    while(start<=end){
        if(arr[mid]===key){
            ans=mid
            start=mid+1
        }else if(key>arr[mid]){
            start=mid+1
        }else if(key<arr[mid]){
            end=mid-1
        }
        mid=parseInt(start+(end-start)/2)
    }
    return ans
}
let arr=[1,2,3,3,3,3,5]
let size=arr.length
let key=3
let s=(lastOccur(arr,size,key)-firstOccur(arr,size,key))+1
console.log(`number of occurence:${s}`)