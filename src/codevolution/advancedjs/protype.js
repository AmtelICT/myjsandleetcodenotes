//PROTOTYPE AND INHERITANCE

//Rem JS is a dynamic lang hence allow us to attach property to Object at anytime.

//CODE WITHOUT PROTOTYPE
const person=function(fname,lname){
   this.fname=fname;
   this.lname=lname;
}
const p1 = new person('adam','ali');
const p2 =new  person('lokaka', 'kings');

p1.getfullname =function (){
    return  this.fname +' ' + this.lname;  //string concat
}


console.log(p1.getfullname());  //only works for constructor fxn p1

//CODE WITH PROTOTYPE 
const jina=function(fname,lname){
    this.fname=fname;
    this.lname=lname;
 }
 const p3 = new jina('adam','ali');
 const p4 =new  jina('lokaka', 'kings');
 
 jina.prototype.getfullname =function (){
     return  this.fname + ' ' + this.lname;  //string concat
 }
 
 
 console.log(p3.getfullname());  //only works for any constructor fxn p3 or p4
 console.log(p4.getfullname()); 


 //PROTYPE INHERITANCE

 const Student = function (admno, form){
    this.admno = admno;
    this.form=form;
 }
 Student.prototype.getadmandform=function(){
    return (`this student admission number is ${this.admno} and is in form ${this.form}`);

 }
            

const Prefect = function (admno,form,badge) {
        //To inherit from student their admno and form 
        Student.call(this, admno, form)
        this.badge=badge;
}
Prefect.prototype.eatspecial= function(){
    return (`This Prefect adm number ${this.admno} of form ${this.form} eats banana everyday and has badge of ${this.badge}`);
}
    /*
    const Pre1 = new Prefect (23,'form4','Headboy');
     console.log (Pre1.eatspecial());   //It is inherited okay but getadmandform() dont inherit until
    */
     
   Prefect.prototype = Object.create(Student.prototype);
   const Pre1 = new Prefect (23,'form4','Headboy');
     console.log (Pre1.getadmandform());

 //CLASS 
 

 //CODE WITH CLASS WITHOUT PROTOTYPE

 class City{
      constructor(location,population){
        this.loc=location;
        this.pop = population;
      }
      getpopandloc(){
        return (`this city is in ${this.loc} and has ${this.pop} people`)
      }
 }
  const city1= new City ('Kenya','40 Million');
  console.log(city1.getpopandloc());


//PROTYPE INHERITANCE WITH CLASS INSTEAD OF FUNCTIONS---we use extends and super() to inherit

class Mwanafunzi{
    constructor (darasa,umri){
        this.dar =darasa;
        this.umri=umri;
    }
    darnaumri(){
        return (`Huyu mwanafunzi ni wa darasa la ${this.dar} na ana umri wa ${this.umri}` )
    }
}
class Kiranja extends Mwanafunzi {
    constructor(darasa,umri,badge){
        super(darasa,umri)  
        this.bag= badge;
    }
    darumribagi(){
        return (`Huyu kiranja ni wa darasa la ${this.dar} ana umri wa ${this.umri} na yeye ni ${this.bag}`);
    }
}

const Kiranja1= new Kiranja ('nane','miaka 14','HeadBoy');
console.log(Kiranja1.darumribagi());
console.log(Kiranja1.darnaumri());