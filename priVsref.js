let num1 = 6;
let num2 = num1;

//primitive types
// console.log("value of num1 is:" ,num1);
// console.log("value of num2 is:" ,num2);

// num1++;
// console.log("After incrementing num1")
// console.log("value of num1 is:" ,num1);
// console.log("value of num2 is:" ,num2);

//reference types (which inc.array)
let array1 = ["item1", "item2"];
let array2 = array1;
console.log("array1",array1);
console.log("array2",array2);
array1.push("item3");
console.log("after pushing element into the array1");
console.log("array1",array1);
console.log("array2",array2);
