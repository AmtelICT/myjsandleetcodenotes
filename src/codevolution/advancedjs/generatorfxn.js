//Generator Function

//JUST LIKE ITERATOR PROTOCOLS
//-- Its a function that can stop midway execution

function normalfunction(){
  console.log("hello");
  console.log("world")
}


//normalfunction()
//generator fxn
function* generatorFunction(){
    yield 'kichwa'
    yield 'kibov'
}

const Obj =generatorFunction()

for(word of Obj){
    console.log(word)
}