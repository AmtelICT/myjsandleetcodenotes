//----Hii lesson utarudia sijaelewa

//oh okay nimepata  --lazima the target index itakuja kuwa middle of either the lesser ones or greater 
//then hapo ndo ina returniwa kama middleindex which is equal to the target incase hakuna then return -1

//Recursive Binary binarySearch

//Nb you can return a function inside another function and call it parameters.


//Big O reduces by half so BigO= O(logn)


//VIshwas code
function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)    
  }
  
  function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) {
      return -1
    }
  
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) {
      return middleIndex
    }
  
    if (target < arr[middleIndex]) {
      return search(arr, target, leftIndex, middleIndex - 1)
    } else {
      return search(arr, target, middleIndex + 1, rightIndex)
    }
  }
  
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) // 4
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) // 3
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) // -1
  
//My Test
//You  can recall a returned fuction somewhere else in the parent function
