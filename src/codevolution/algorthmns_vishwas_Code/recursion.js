//RECURSION  -- It is a problem solving technique where solutions depends on breaking same problem into
//smaller pieces of the same problem

// Fn = f n-1 + fn-2
// f 0 -0   fbase 1 = 1
//  so f base 2 =1



//Big O of recursive fibonnacci = BIGO(2^n)
//Big O of recursive factorial = BIGO(n)

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
  