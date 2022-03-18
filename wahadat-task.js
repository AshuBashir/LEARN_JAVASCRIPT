// objects

const persons =[
{name:"Ashu", age:23},
{name:"Iqsam", age:22},
{name:"Abdul", age:25},
{name:"Ashu", age:23},
{name:"Iqsam", age:22},
{name:"Abdul", age:25},
{name:"Ashu", age:23},
{name:"Iqsam", age:22},
{name:"Abdul", age:25},
{name:"Ashu", age:23},
{name:"Iqsam", age:22},
{name:"Abdul", age:25},
{name:"Ashu", age:23},
{name:"Iqsam", age:22},
{name:"Abdul", age:25},
];

const person1 = [];
let end = persons.length;
let index1 = 3;
let index2 = 8;

for(let i =0; i< end; i++){
    if(i ==index1 || i==index2){
        person1.push(persons[i]);
    }
}

console.log(person1);
