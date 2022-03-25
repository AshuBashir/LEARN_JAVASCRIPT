const obj1={
    key1: "value1",
    key2: "value2",
};


// const obj2={
//     key3: "value3",

// };

// // create an empty object
// const obj2={};
//     obj2.key3 =  "value3";

// theres an another way in js to declare an empty object
const obj2 = Object.create(obj1);  // creates proto // this is called chaining
console.log(obj2);
obj2.key3 =  "value3";


console.log(obj2.key3) 
console.log(obj2.key1)   // it will show undefined
// but we want that obj2 first looks in it if there's any key 1 and if not go the obj1 and print the key



//note:
// _ _proto_ _ ===[[prototype]]  // are same
console.log(obj2.__proto__);