
//Video2 , 3,4,5.

//Algorithm are steps and instructions
//are language independent and may be applied to any other language.

//asyptotic notations are 3
// 1. Big O notation for worst case
// 2. Omega notation for best case
// 3. Thetr notation for average


//BIG O NOTATION- Describes worst case inform of algebra.
    //every operations is n
//big O of 2 for loops is 2n
// Big O of nested 2 loops is n^2 e.g in wordpair below

function wordpair(arr){
    for (i=0;i<arr.length;i++){
        for (j=0;j<arr.length;j++){
            console.log(arr[i]+ ' ' + arr[j]);
        }
    }
}
wordpair(['adam','okash','ali']);  //big all posible wordpair and BigO is 2^n where n is leght of arr i.e 3*3 to get 9 wordpair

//Incase of 2 arrays;

function wordpair2(arr,arr2){
    for (i=0;i<arr.length;i++){
        for (j=0;j<arr2.length;j++){
            console.log(arr[i]+ ' ' + arr2[j]);
        }
    }
}

wordpair2(['adam','okash'], ['king','legend',]);  //gets 4 because bigO is (n*m) n length of arr and m legth of arr2 


// incase the loops are 3 big o is O(n^3)
//incase input of loop reduces by half it becomes O logarithmic (logn)


//BigO OF Objects and Arrays

Objects

// insert/remove/access = O(1) Constant
// search/.keys/.values/.entries = O(n) linear


Array

//insert/remove at the end =O(1)
//insert/remove at the beginning =O(n)
//push/pop= O(1)
//shift/unshift/concat/slice/spice/forEaxh/Map/filter/reduce = O(n)
//search = O(n)
//Access =O(1)






//Space Complexity
//Arrays or strings take linear  complecity is O(n)
//numbers take constant space complexity O(1)

//Logarithmic Time Complexity states incase n is double or times 10 we do only one extra operation e.g

//log2 8 = 3 and log 2 16 = 4  so 3 +1 = 4
