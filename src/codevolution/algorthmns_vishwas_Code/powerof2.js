//Power of 2 

//NB While loop is good to check conditions

//using while loop codition

function isPowerOfTwo(n){
    if (n < 1){
        return false;
    }
    while(n > 1) {    //as long as n is greater than 1
        if (n % 2 !== 0){
            return false
        } 
       
        n = n / 2  //the iterate condition

    }
    return true;
}
 
console.log(isPowerOfTwo(17));
console.log(isPowerOfTwo(22));
console.log(isPowerOfTwo(2));
//Using Bitwise and & as incase Number(n) & (n-1)==0 incase binary of 8 is 1000 and 7 is 0111  then 8 &7 ==0 since 1 is only when both are 1 and 1

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
      return false
    }
    return (n & (n - 1)) === 0
  }



console.log(isPowerOfTwoBitWise(17));
console.log(isPowerOfTwoBitWise(22));
console.log(isPowerOfTwoBitWise(2));

//BIG O

///The code is splited into 2 so the BigO is O(logn)


//Code of Vishwas

// function isPowerOfTwo(n) {
//     if (n < 1) {
//       return false
//     }
//     while (n > 1) {
//       if (n % 2 !== 0) {
//         return false
//       }
//       n = n / 2
//     }
//     return true
//   }
  
//   function isPowerOfTwoBitWise(n) {
//     if (n < 1) {
//       return false
//     }
//     return (n & (n - 1)) === 0
//   }
  
//   console.log(isPowerOfTwo(1)) // true
//   console.log(isPowerOfTwo(2)) // true
//   console.log(isPowerOfTwo(5)) // false
  