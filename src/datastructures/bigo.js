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


//Space Complexity
//Arrays or strings take linear  complecity is O(n)
//numbers take constant space complexity O(1)

//Logarithmic Time Complexity states incase n is double or times 10 we do only one extra operation e.g

//log2 8 = 3 and log 2 16 = 4  so 3 +1 = 4