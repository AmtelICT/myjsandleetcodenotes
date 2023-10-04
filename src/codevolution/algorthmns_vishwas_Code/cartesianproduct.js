

//CARTESIAN PRODUCT 


//question: given two finite sets find the cartesian product?


//Algorithm Logic

//1. it the pair product set e.g cartesian product of (a,b) where a=[2,3] and b=[4,6]
     //cart will be [2,4],[2,6],[3,4],[3,6]


//vishwas code
function cartesianProduct(arr1, arr2) {
    const result = []
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        result.push([arr1[i], arr2[j]])
      }
    }
    return result
  }
  
  const arr1 = [1, 2]
  const arr2 = [3, 4, 5]
  console.log(cartesianProduct(arr1, arr2)) // [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]
  