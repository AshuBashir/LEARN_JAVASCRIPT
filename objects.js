//objects are also reference types in JS.

// const person = {name: "Ashu" , age: 24};
// console.log(typeof(person), person);
// console.log(person.name);

//we can make arrays in objects as well
const person ={
    name:"Ashu",
    age:24,
    hobbies : ["Pampering Birds", "Gardening" , "Learning about religional facts"]
}
console.log(person);

//how to access data from objects.  
// using dot
console.log(person.name);
console.log(person.hobbies);
console.log(person.age);

//using []
console.log(person["name"]);
console.log(person["hobbies"]);
console.log(person["age"]);



// how to add key value pair to object
// using dot 
person.gender = "female";
console.log(person);

//




