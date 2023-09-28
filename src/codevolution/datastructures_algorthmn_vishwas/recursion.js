




//FACTORIAL RECURSION

function recursiveFactorial(n) {
    if (n === 0) {
      return 1
    }
    return n * recursiveFactorial(n - 1)
  }
  
  console.log(recursiveFactorial(0)) // 1
  console.log(recursiveFactorial(1)) // 1
  console.log(recursiveFactorial(5)) // 120

  
  //FIBBONACCI RECURSION

  function recursiveFibonacci(n) {
    if (n < 2) {
      return n
    }
    return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
  }
  
  console.log(recursiveFibonacci(0)) // 0
  console.log(recursiveFibonacci(1)) // 1
  console.log(recursiveFibonacci(7)) // 8
  