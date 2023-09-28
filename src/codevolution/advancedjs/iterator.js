//ITERATORS AND ITERABLES  PROTOCOLS

/*
NB: Iterators like for loop are difficult to use since they spefically rely on datatype/structure 
like  String,arrays,Maps, sets hence the need for iterator protocols e.g For of .To proof check the for loop below with string and array
*/

//using basic for loop
const str = 'okashabdullahi';
const arr =['1','2','3','4'];

for (i=0;i<str.length;i++){
    console.log(str.charAt(i));    //uses parenthesis
}

for (i=0 ; i< arr.length ;i++){
    console.log(arr[i]);
}
//note the string and array are different

//Using for of 
const str1 = 'okashabdullahi';
const arr1 =['1','2','3','4'];

for (const char of str1){
    console.log (char)
}
for (const item of arr1){
    console.log(item)
}


//ITERATOR, ITERABLE OBJECT AND ITERATOR PROTOCAL  

// -- An Onject that implement iterator protocal is called iterable
// -- An Iterable Object has to have as the key the method [symbol.iterator]
// -- That method should not accept argument and should return an object which conforms with the iterator protocol
// -- An Iterable Object should have a next() method which return 2 properties i.e value:(current elemebt) and done:(boolean true/fals)

// .. ABOVE RULES IN CODE

const Obj={
    [Symbol.iterator]:function(){
                      let step =0;
                      const iterator= {
                                         next: function() {
                                                step++
                                                            if (step ==1){
                                                                  return {value:"hello",done:false}
                                                                        }else if ( step==2) {return { value:"world",done:false}}
                                                                             {return {value:"undefined",done:true}}
                                                           },
                                                          
                                      }
                                      return iterator;
                                 }
}

for (word of Obj){
    console.log(word)
}