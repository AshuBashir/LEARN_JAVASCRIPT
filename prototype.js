// prototype

function hello(){
    console.log("Hello world my name is aysha");

}
hello();
console.log(hello.name);
// in Javascript, functions are as well as objects and functions


// you can add your own properties in a function and treat them as objects
hello.myOwnProperty = "very unique value";
console.log(hello.myOwnProperty);


// name property tells function name.


// when we create a function, it gives us a free space k/ prototype , which is an object

console.log(hello.prototype);  // {} {}

// prototypes are only provided by functions

// if(hello.prototype){
//     console.log("Prototype is present");
// }
// else{
//     console.log("Prototype is absent");

// }



// since prototype is the object of the function so we can add key value pairs in it or declare a function too
hello.prototype.age = "my age is 10";
hello.prototype.sing = function(){
    return" mai hu jiyaan ";
}
console.log(hello.prototype.sing());



