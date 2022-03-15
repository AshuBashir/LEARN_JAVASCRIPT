// Array destructuring
const myArray = ["item1", "item2" , "item3" , "item4"];
// let myVar1 = myArray[0];
// let myVar2 = myArray[1];
// console.log("value of myVar1", myVar1);
// console.log("value of myVar2", myVar2);
let [myVar1, myVar2, ...myArray1] = myArray;   // here we cant use const bz they are variables 
myVar1= "Value changed" ;
 console.log("value of myVar1", myVar1);   // if there are only one items or less items than the no. of variables declared, it will show undefined.
 console.log("value of myVar2", myVar2);
 console.log(myArray1);   

// let myArray1= myArray.slice(2); // to put remaining items in a separate array.
// console.log(myArray1);


//for above slicing we can use spread method. . .