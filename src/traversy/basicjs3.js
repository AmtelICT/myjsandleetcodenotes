//OOP 
//functions inside a class is called method e.g constructor
//when using method inside function put it in .prototype.methodname() so that it doest appear in object list e.g
// OOP function or Class name should start with Caps

function Person(firstname,lastname,dob){
    this.fname= firstname;
    this.lname = lastname;
    this.dob = new Date(dob);
   
    Person.prototype.fullname=function(){
        return `${this.fname} ${this.lname}`; //this is not qutetag but esc `
    },
    Person.prototype.yob= function(){
        return this.dob.getFullYear();
    }
}

const person1= new Person("adam","ali","8-28-1994");

console.log(person1.fullname())

    //OR USING CLASS

class Staff{
     
     constructor(firstname,lastname,dob){
         this.fname=firstname;
         this.lname=lastname;
         this.dob = new Date(dob);
     }
     getfull(){
        return `${this.fname} ${this.lname}`
     }
     getyob(){
        return this.dob.getFullYear()
     }
}    
    
const staff1= new Staff("okash","sero","8-28-1994");

console.log (staff1.getfull())

