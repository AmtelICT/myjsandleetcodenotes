// //PRIME NUMBERS --numbers between 1 and 9
// It is number that is divisible by 1 and itself only .
// 0 OR 1 IS NOT A PRIME NUMBER

//My solution approach
function isPrime(n){
    
    if ( n< 2){
        console.log ( false)
    }
    for (i=2; i<n;i++){
        //chech if the number is divisible any number of i
        if (n % i===0){
            return false;
        }
    }
    return true;
}

console.log(isPrime(7));
console.log(isPrime(8));


//code of vishwas

// function isPrime(n) {
//     if (n < 2) {
//       return false
//     }
//     for (let i = 2; i <= Math.sqrt(n); i++) {   //any number n if is = a*b then a and be are either equal to or less that sqrt(n)
//       // if n is divisible by any number then it is not prime
//       if (n % i === 0) {
//         return false
//       }
//     }
//     return true
//   }
  
//   console.log(isPrime(1)) // false
//   console.log(isPrime(5)) // true
//   console.log(isPrime(4)) // false
  