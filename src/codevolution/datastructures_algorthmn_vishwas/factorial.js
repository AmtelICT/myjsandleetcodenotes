//Factorial of Integers
// factorial of zero is 1
// factorial of 4 = 24 = 4*3*2*1

function factorial(n){

    let result = 1 ;//default for 0
    for (let i=2; i <= n; i++){ //start from 2 as 1 and 0 is 1 as well i can be <= n
        result = result * i;
    }
    console.log(result)
}

factorial(0);
factorial(7);