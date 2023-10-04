//QUICK SORT

//Algorithm Logic

//1. Pick an element in array as pivot e.g the last element
//2. create empty arrays left and right
//3.place all elements smaller than pivot into left array
//4. "     ''    "      bigger ''   ''      ''  right array
// 5. repeat the approach on individial left and right array by picking a pivot of last item individually
//6. concatinate the ...leftarray , Original Pivot and ...rightarray


//Big O

// Incase the array is sorted already then the quick sort takes worst case = O(n^2)
// but on average quick sort splits the arr n into 2 but with additional for loop = O(n(logn))

//vishwas Code 
function quickSort(arr) {
    if (arr.length < 2) return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  
  const arr = [8, 20, -2, 4, -6]
  console.log(quickSort(arr)) // [-6, -2, 4, 8, 20]

  //code by vishwas as well

  ///QUICK SORT IN PLACE

//   function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//       const pivot = partition(arr, left, right)
//       quickSort(arr, left, pivot - 1)
//       quickSort(arr, pivot + 1, right)
//     }
//     return arr
//   }
  
//   function partition(arr, left, right) {
//     const pivot = arr[right]
//     let i = left
//     for (let j = left; j < right; j++) {
//       if (arr[j] < pivot) {
//         swap(arr, i, j)
//         i++
//       }
//     }
//     swap(arr, i, right)
//     return i
//   }
  
//   function swap(arr, i, j) {
//     const temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   quickSort(arr)
//   console.log(arr) // [-6, -2, 4, 8, 20]
  