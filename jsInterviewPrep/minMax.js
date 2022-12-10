let arr=[1,9,87,65,655]
let min=1
let max=-1
for(let i=0;i<arr.length;i++){
    if(arr[i]<min){
        min=arr[i]
    }
    if(arr[i]>max){
        max=arr[i]
    }
}
console.log(min,max)