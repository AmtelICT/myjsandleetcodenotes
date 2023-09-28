//closure = its a combination of function together with state of sorrounding..it is created every first time funct is called.

/*
function outer(){
    let x =0
    function inner(){
        x++;
        console.log(x)
    }
    //return inner() 
        //or just
        inner()                //check the bracks important
}
outer() //output is 1
outer() // output is 1 as its store in closure memory

*/
//same closure with memory kept

function outer(){
    let x =0
    function inner(){
        x++;
        console.log(x)
    }
    return inner  //check the return and no bracks important
                    
}
const fn = outer()
fn()
fn()
fn()
