/*const c= 10

adder (4,5)

function adder (a,b)
{
    var sum= a+b +c;
    console.log(sum);
}
*/

/*
const f = (a,b)=>{
    return sum = (a+b);
}

console.log (f(3,4))
*/

/*
///spread operator
//let array1=[1,2,3,4]
//let array2 =[5,6,7,8]

//console.log (...array1,...array2)

function add (...args){

    return sum = (args[0]+args[1]);
}

const a= add(6,9)

console.log(a)


/*  increment with closure hidden state
function createCounter(){

    let value = 0;

    function increment(){
        return ++value;

    }
    return {
        ufala:increment
    }

}

//console.log(createCounter().ufala())

const test = createCounter();

console.log (test.ufala()) //this prints 1
console.log (test.ufala()) ///this will print 2 becas let value is in closer and the state is hidden updated.

*/
/*
var test = function tabs (n)
{
    return function kili() {
        return ++n  /// this post increment which return 10 first but ++n return 11 first
    }
}

//const sasa = test(10);


//console.log (sasa())
*/

/*
class Tabi {
     
    constructor (n)
    {
       this.n =n;
    }
    increment(){
        return this.n++;
    }
}
 
const kaka = Tabi(9);
//kaka.increase(); 
console.log(kaka.increment());


*/
/*
var kiss =function (n)
{
    let jina = n;
    return function ()
    {
        return jina++;
    };

};

const cooco =kiss(10);
console.log(cooco());
*/

/*
function test (init){

    let count =init;
    function increment(){
        return ++count;
    }
    function decrement(){
         return --count;
    }
    function reset ()
    {
        let count =init;
        return count;

    }

    return {
        increment:increment,
        decrement:decrement,
        reset:reset
    }
}
const kiki=test(10);
console.log(kiki.increment());

           OR 
 
 class Test {
    
    constructor(init){
        this.init=init
    }
    increment(){
        return ++this.init;
    };
    decrement() {
        return --this.init;
    }
    reset(){
        return this.init;
    }
 }          

 console.log(new Test(10).reset())

 */

 