/// SCOPE 
//block scope= variable cannot be accessed outside curly braces
//function scope =var declared inside funct cant be accessed out
//global scope = " " can be access in block or funct

let x=10

function outer(){
    let y=11;
    function inner(){
        let z=12;
        console.log (x,y,z);
    }
   // return inner()
    //or just
    inner()
}

outer()