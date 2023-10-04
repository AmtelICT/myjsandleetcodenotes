//LINEAR SEARCH

//question: given array of n elements and item t ,find the index of t ,if not found return -1



//Big0 =O(n)

//vishwas code
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i
      }
    }
    return -1
  }
  
  console.log(linearSearch([-5, 2, 10, 4, 6], 10)) // 2
  console.log(linearSearch([-5, 2, 10, 4, 6], 6)) // 4
  console.log(linearSearch([-5, 2, 10, 4, 6], 20)) // -1
  