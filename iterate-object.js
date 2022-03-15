//How to iterate through object.
const person ={
    name:"Ashu",
    age:24,
    "person hobbies": ["Pampering Birds", "Gardening" , "Learning about religional facts"] 
}

//for this we have different methods.
//for in loop
//object-keys

// //METHOD 1: for in loop
// for (let key in person){
//     console.log(key);  // will display key only
// }

// for (let key in person){
//     console.log(person[key]);  //if we pass it like person.key, it will show undefined bz there's no key in the person , however person[key] will take the values of the key and put it into the output
// }


// for (let key in person){
//     console.log(`${key} : ${person[key]}`); // to display key value pairs
// }
// // we can do it without backticks as well

// for (let key in person){
//     console.log(key, " : ",person[key]);
// }

//METHOD 2 - object-keys
console.log(typeof(person));
console.log(Object.keys(person));  // Object.key returns an array
let value =Array.isArray(Object.keys(person));
console.log(value);


//Using for of loop in object.keys
for(let key of Object.keys(person)){
console.log(person[key]);
}











