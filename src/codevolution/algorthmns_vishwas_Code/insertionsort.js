// INSERTION SORT


//Algorithm Logic

//1. Virtually split the array into sorted and unsorted part..begining is only first element is sorted
//2. Assume the first element(i=0) is sorted and the rest are not.
//3. select an unsorted element on right and compare to  sorted element(s) on the left.
//4.if the element(s) in the sorted part are smaller than the selected unsorted element
     // proceed to next unsorted element else shift larger element(s) of the sorted part
     // to right until it get to where supposed.
//5. Then insert the selected element at right index.
//6. repeat until all unsorted elements are sorted.     


//vishwas code

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let numberToInsert = arr[i]
      let j = i - 1
      while (j >= 0 && arr[j] > numberToInsert) //this is the condition,i.e loop only when 
                                                 //the sorted element j is greater than selected element
                                                 // at if not keep it to right side
      
      {
        arr[j + 1] = arr[j]    //moving the sorted element to right incase bigger
        j = j - 1              //changing the index of unsorted selected element one step to left.
      }

      arr[j + 1] = numberToInsert     //final incase loop condition false, right position of arr[i]  will be arr[j+1] 
                                       //i.e sorted +1 incase is larger than original sorted j
    }
  }
  
  const arr = [8, 20, -2, 4, -6]
  insertionSort(arr)
  console.log(arr) // [-6, -2, 4, 8, 20]
  


//Others code without while loop

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i]
    let j
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentValue
  }
  return arr
}
console.log(insertionSort2([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]

//BIG O
//Nested loops so its quadratic i.e = O(n^2)