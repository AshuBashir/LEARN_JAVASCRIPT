// spread operator(used in cloning)
// const array1 = [1,2,3];
// const array2 = [5,6,7];
// const myNewArray = [...array1, ...array2];
// console.log(myNewArray);


//SPREAD OPERATOR(...) IN OBJECTS   
const obj1 ={
    key1: "value1",
    key2: "value2"
};
const obj2 ={
    key3: "value3",
    key4: "value4"
};
const newObject ={...obj1, ...obj2, key5 : "value5"};
console.log(newObject);

// we can create key value pairs just by passing iterators to newobject and put the spread operator at the prefix, like follows

const newObject1 = {... "abcd"};
const newObject3 = {... ["item1","item2"]};
console.log(newObject1);   // keys will be 0,1,2,3 and values will be a,b,c,d ie we can use this to convert string or arrays into objects

console.log(newObject3); 