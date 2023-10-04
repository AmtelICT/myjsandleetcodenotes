//video 6 

//Math Algothms 
//Fibonacci Sequence. it is a sequence which the number is a sum of previous 2 numbers and it the first 2 digits in the seq is 0 and 1
//e,g
//Fibonnacci (7)= [0,1,1,2,3,5,8]

function Fibonnacci(n){
    const fib= [0,1];
    for ( i=2;i<n;i++){

        fib[i]= fib[i-1]+ fib[i-2];
    }
    console.log(fib);
}

Fibonnacci(8);