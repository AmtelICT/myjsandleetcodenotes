//FUNCTION CURRYING min 22:33
/*
FUNCTION CURRYING --it is a technic in functional programming where a function with multiple argument 
is transform to nested fct taking one arg at a time
*/


     //normal way
function sum (a,b,c){
    return a+b+c;
}
console.log (sum(2,4,5));

     //currying way

function curry(fn){
    return function (a){
        return function (b){
            return function(c){
                return fn(a,b,c);

            }
        }
    }
}
const curriedSum = curry(sum);
console.log(curriedSum(3)(5)(8));
  //Or
  const add3= curriedSum(3)
  const add5= add3(5)
  const add8=add5(8)
  console.log(add8)