//THIS KEYWORD
//Refers to the object which function is called on, allows one redeclare the object e.g

function myname(name){
    console.log(`my name is ${name}`);

}

myname('adam ali');

//This key is determined by either  
  //1. Implicit Binding   (the object person has name) e.g
  const Person={
    name : 'Okash Abdul',
    saymyname:function(){
        console.log(`myname is ${this.name}`);
    }
  }
  Person.saymyname();
  //2. Explicit binding (the function is called out using call method) e.g
  const Jina={
    name:'lokaka kings'
  }
  function jinayangu(){
    console.log(`jina yangu ni ${this.name}`);
  }
  jinayangu.call(Jina);

  //3. New Binding

  function magac(name){
    this.name =name;
  }
  p1=new magac ('adams lokaka');
  p2 = new magac('ule mse');
  console.log (`my name is ${p2.name}`);

  // 4. Default Binding  ( gets you undefined as result) 

           // const ism="adamaloka"; //This will be global incase browser but for node use 
           // globalThis.ism='adamaloka'
  function ismi(){
    this.ism =ism;
    console.log(`ismi ${this.ism}`);
  }
 ismi();


  //N.B Incase all are used the order of presedence is New->Explicit->Implicit->Default Binding.
