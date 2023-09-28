
///JSON
// remember keys in json have double quotes e.g  { "ff":[{"ff":"ff","gg":3},{"tt":true}]}  ..object in js can have or omit no bigdeal
// remember json dont have function as datatype

//To turn js object to json use JSON.stringify(object);  e.g

/*
var people = [
    {
    name:"adam",
    age: 30,
    address:{
        state:"Nakuru",
        estate:"kiamunyi"

    },
    siblings: [ "sumaya",
                   "hafsa",
                   "sundus"

                ],
    },
    {
    "name":"kings",
    "age":30,
    "address":{
        "state":"Nakuru2",
        "estate":"kiamunyi2"

    },
    "siblings": [ "sumaya2",
                   "hafsa2",
                   "sundus2"

                ],
    }
]

const peoples=JSON.stringify(people);
console.log(peoples);
console.log(peoples[1].name) //this get undefined as it is not object but json

//to return back json to js object we use JSON.parse();
const watu = JSON.parse(peoples);
console.log(watu[1].siblings[1]);

var output=""
for (let i=0; i<watu.length; i++){
    //console.log(watu[i].name)
    output += '<li> '+watu[i].name+'        </li>';
}
document.getElementById('lsi').innerHTML=output;

*/

//USING XHR TO LOAD DATA FROM people.json file 

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       var response = JSON.parse(xhttp.responseText);
       var watu= response.people;
       var output=""
        for (let i=0; i<watu.length; i++){
            //console.log(watu[i].name)
            output += '<li> '+watu[i].name+'        </li>';
        }
        document.getElementById('lsi').innerHTML=output;
    }
};
xhttp.open("GET", "people2.json", true);
xhttp.send();