//let vs const
//let can be reassigned while const cant be reassigned

//let age= 10;
//console.log( age)

//to check data type use typeOf
//split string to array use .split eg. 

//const stri= "it,comp,lab"
//console.log( stri.split(','))

//object are called with . eg person.firstname while arrays use index eg hobbies[2]

                  //arrays
const todo=[
    {
        id:1,
        text:"username",
        present:true
    },
    {
        id:2,
        text:"firstname",
        present:false
    }
]

todo[1].email="test@gmail.com"

//console.log(todo[1])

//const todoJson= JSON.stringify(todo)
//console.log(todoJson)
/*
for(i=0;i<todo.length;i++){
    console.log(todo[i].text)
}

   OR 
   */

   /*
   for (key of todo){
    console.log(key.text);
   }

Or using ForEach

*/
todo.forEach(function(key)
{
    console.log(key.text)
}
);

//or using Map

const Mapedtodo = todo.map(function(key){
    return key.text;
})
console.log(Mapedtodo)

//or Using Filter

const Filteredtodo= todo.filter(function(key){
    return key.present===true;
}
);
console.log(Filteredtodo);

//or use filter with map together
const Filteredmaptodo= todo.filter(function(key){
    return key.present===true;
}
).map(function(key){
    return key.text;
})
console.log(Filteredmaptodo)




//appending a var to input data to
// += is append sign
//demo below but not tested
const students=[
    {
        id:1,
        name:"kaka",
        present:true
    },
    {
        id:2,
        name:"lokaka",
        present:false
    }
]
var form1 =""

for (var i=0; i<students.length;i++){
    form1 += students[i];
}

