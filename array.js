//intro to arrays
//arrays are reference type, refernce type are objects.
//they are ordered collection of elements
// let fruits = ["apple" , "mango" , "pear"];
// let numbers = [1,2,3,4,5];
// console.log(fruits);
// console.log(numbers);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// let obj = {};   //object literal
// console.log(Array.isArray(obj));


//push pop

//push adds at last
// let fruits1 = ["apple" , "mango" , "pear"];
// console.log(fruits1);
// fruits1.push("banana");
// console.log(fruits1);

//pop removes from last
// let fruits2 = ["apple" , "mango" , "pear"];
// console.log(fruits2);
// let poppedFruit = fruits2.pop(); //removes the last item
// console.log(fruits2);
// console.log("The popped fruit is :" , poppedFruit);


// shift unshift
//unshift inserts at start

let cats=["kerry","petty", "andrew"];
cats.unshift("robert");
console.log(cats);

removedCat = cats.shift();
console.log(cats);
console.log("The removed cat is:", removedCat);



