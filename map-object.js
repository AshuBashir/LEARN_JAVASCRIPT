// map object

//we can use strings,arrays,numbers as keys in map object


// // this syntax is called as object literal
// // key will be as strings or symbol
// const person = {
//     firstName : "Ashu",
//     age : 23,
//     1 : "one",
// }
// // console.log(person.firstName);
// // console.log(person["firstName"]);
// // console.log(person["1"]);

// for (let key in person){
//     console.log(typeof(key) , key);
// }


// // now map object method
const person = new Map();
console.log(person);
person.set('Aysha' , {PhoneNo: " 95969494949" , Address : "Hawal"});
console.log(person);
console.log(person.has('Aysha'));    
console.log(person.size);       

person.set(1 , "rollno");
console.log(person);

person.delete(1);

person.set("firstname" , "ayuu");
console.log(person);
person.get("Aysha");
console.log(person);

//keys(), values(), entries() are map iterators
console.log(person.keys());
console.log(person.values());
console.log(person.entries());
console.log(person.get("firstname"));

for (let key of person.keys()){
    console.log(key , typeof(key));
}

person.set([1,2,3,4] , "ONeTwoThreeFour");
console.log(person);


person.set({1: "one" , 2: "two"} , "ONeTwoThreeFour");
console.log(person);

for (let [key, value] of person){   // [key, value] : array destructuring as this for of will return array.
    console.log(key, value);
}


// // we can pass array as arguments too
const items = new Map([['firstName' , "Ashu"] , ["age" , 24]])
console.log(items);


// realistic example

const person1 = {
    id : 1, firstName : "Aysha" 
};
const person2 = {   
    id : 2, firstName : "Sufei" 
};

const addInfo = new Map();
addInfo.set(person1 , {age: 22 , gender:"female"});
addInfo.set(person2 , {age: 23 , gender:"male"});

console.log(person2.id);  //simple object   
console.log(person1.id);  //simple object
console.log(addInfo.get(person1).age);   // map object
console.log(addInfo.get(person2).gender);   // map object




