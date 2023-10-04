
//N/B :BINARY SEARCH ONLY WORKS WITH SORTED ARRAYS  
//IT USUALY USES WHILE LOOP.


//QUESTION: FIND INDEX OF TARGET T ITEM IN ARRAY OF N ELEMENTS

//THE BIG O IS REDUCED BY HALF EVERYTIME SO BigO= O(logn)



//Binary Search we check first half of the array then incase target is middle return middleindex
// incase it is greater do the same check the middleindex of the right side array , if less so the same on 
// the left side array


//vishwas code
function binarySearch(arr, target) {
    let leftIndex = 0
    let rightIndex = arr.length - 1
  
    while (leftIndex <= rightIndex) {
      let middleIndex = Math.floor((leftIndex + rightIndex) / 2)  //return to lower number incase decimal
      if (target === arr[middleIndex]) {
        return middleIndex
      }
      if (target < arr[middleIndex]) {
        rightIndex = middleIndex - 1
      } else {
        leftIndex = middleIndex + 1
      }
    }
    return -1
  }
  
  console.log(binarySearch([-5, 2, 4, 6, 10], 10)) // 4
  console.log(binarySearch([-5, 2, 4, 6, 10], 6)) // 3
  console.log(binarySearch([-5, 2, 4, 6, 10], 20)) // -1
  


  //my code using do while
  
function binarySearchy(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1
   do {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)  //return to lower number incase decimal
    if (target === arr[middleIndex]) {
      return middleIndex
    }
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
    
  }
  while (leftIndex <= rightIndex) 

  return -1
   
}
  
console.log(binarySearchy([-5, 2, 4, 6, 10], 10)) // 4
console.log(binarySearchy([-5, 2, 4, 6, 10], 6)) // 3
console.log(binarySearchy([-5, 2, 4, 6, 10], 20)) // -1





// while loop example
//   const arr2=['ddd','ddsss','edssd'];
//   let i =0
//   let text=''
//   while(arr2[i]){
//     text= text+ arr2[i]
//     i++
//   }
//   console.log(text);

//do while loop example  
  //syntax
        // do {
        //   //code
        //   //i++
        // }
        // while(condition)


//remember do while execute once for start then checks condition
      let k = 2

      do{
        console.log('my name is adam')
        k++
      }
      while(k>3)

