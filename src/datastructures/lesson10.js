
function stringreversing (str){
    const arr= str.split('') //change to array
    const reversedarr= arr.reverse('')
    const reversedstr= reversedarr.join('') //change back to string
    console.log(reversedstr) ;
}
 
stringreversing('adamokash');