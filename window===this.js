// console.log(this);
// console.log(window);





// function myFunc(){
//     console.log(this);
// }

// myFunc();  // output will be window object





function myFunc(){
    "use strict"
    console.log(this);
}

myFunc();  // output will be undefined bz, now it works in strict mode, it will not show window


// call method


function myFunc2(){
    console.log("Hello World");
}
myFunc2.call();





