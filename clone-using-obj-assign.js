// clone using Object-assign
// heap memory have address
const obj = {
    key1: "value1", 
    key2: "value2", 

};
// console.log(obj);

// // const obj2 = {...obj};   // here we did cloning using slice , so it wont add elements in obj2 if we add in obj
// const obj2 = obj;        // elements added to obj will also get added to obj
// console.log(obj2);

// obj.key3 = "value3";
// console.log(obj);
// console.log(obj2);


// // we can use Object.assign instead of spread operator.

const obj2 = Object.assign({}, obj);
console.log(obj2);



