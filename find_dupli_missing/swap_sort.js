// Swap Sort logic to find missing and duplicate numbers
// 1. Place each number at its correct index: arr[i] → arr[arr[i] - 1]
// 2. After sorting:
//    - If arr[i] != i+1 → arr[i] is duplicate, i+1 is missing
// let arr=[2,3,1,5,1] // arr[0] place to its right place arr[0]-1 : 2-1 : 1 this right place
let arr=[2,5,9,6,9,3,8,9,7,1]// arr[0] place to its right place arr[0]-1 : 2-1 : 1 this right place

function swapSort(arr){
   let i=0
   let temp=0
   let n=0
   while(i<arr.length){
    if(arr[i]!==arr[arr[i]-1]){ // 2!=3
      n=arr[i]
      temp=arr[i]              //[]
      arr[i]=arr[n-1]
      arr[n-1]=temp
    //   i++
    //   console.log(arr)
    }
        i++
    
   }
    // console.log(arr)
   for(let j=0;j<arr.length;j++){
     if(arr[j]!==j+1){
        let str=`missing number ${j+1} and duplicate number ${arr[j]}`
       return  str
     }
   }


}

let res=swapSort(arr)
console.log(res)

//===========

// [2,5,9,6,9,3,8,9,7,1]

// [1,2,3,9,5,6,7,8,9,9]

