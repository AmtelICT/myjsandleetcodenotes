
//Bubble Sort  --it is the worst sorting algorithm.

//Bubble sort is an implementation example of both for and while loop simultaneously


//Question:given an array of n elements sort the arrays.

// Algorithm;

// 1.Compare adjacent elements of array and swap incase are not as intended order 
// 2.Repeat the instruction as you proceed to other elements in the arrar
// 3. Once the swap is over the array is okay.


//Big O of nested loops is n^2 so bubble sort BigO = o(n^2)


//vishwas code.

function bubbleSort(arr) {
    let swapped
    do {
      swapped = false
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          let temp = arr[i]
          arr[i] = arr[i + 1]
          arr[i + 1] = temp
          swapped = true
        }
      }
    } while (swapped)
  }
  
  const arr = [8, 20, -2, 4, -6]
  bubbleSort(arr)
  console.log(arr) // [-6, -2, 4, 8, 20]
  
//simplified vishwas

function bubbleSorty(arr) {
  let swapped =false
  do {
   
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped=false)  // as long as it is false repeat do loop
}

const arr2 = [8, 20, -2, 4, -6]
bubbleSorty(arr2)
console.log(arr) // [-6, -2, 4, 8, 20]






  //my code  

  //While loop only dont work hence need do while.

                                // function Bbleswap(arr2)
                                // {
                                //   let swap
                                //   while (swap) {
                                //       swap =false
                                //   for (i=0; i<arr2.length-1;i++){
                                //       if (arr2[i]>arr2[i+1])
                                //       {
                                //           let holder=arr2[i]
                                //           arr2[i]= arr2[i+1]
                                //           arr2[i+1]=holder
                                //           swap =true
                                //       }
                                //   }

                                //   }

                                // }
                                
                                // const unsorted=[2,6,4,7,3,8];
                                // Bbleswap(unsorted)
                                // console.log(unsorted);



                      