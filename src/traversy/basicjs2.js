//1.conditionals
// === check the datatype as well e.g

//const num=10;
const num='10'; //string

if(num===10)
{
    console.log('num is 10');
}else if ( typeof num === String){
     console.log('num is string')
}
else {
    console.log('num is not string')
}

//2. Ternary

const x=11;

const color= x>10 ? 'blue' : "red";

console.log(color)

//3.Switches

const y=35;
const T=60

const age= y>30 && T<30? 'old' : "young";

switch (age) {
    case 'old':
        {console.log('your are mature')}
        break;
    case 'young' :
        {console.log('your are young')}      
        break;

    default:{
        console.log('your are not there')
    }
        break;
}

///&& and || or 

//error NaN mean Not A Number

//3. Functions

function Addnum(num1,num2){
    return num1+num2;
}
console.log(Addnum(5,6));

     //Or
const Addnums = (num1,num2) => num1+num2; 
console.log(Addnums(7,4))    
//const Addnumss = num1=>num1+10;
//console.log(Addnums(7))

