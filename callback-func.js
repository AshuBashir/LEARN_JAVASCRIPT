// callback functions

function myFunc(callback){   //here csllback comprises func2, and when we call callback(); it means we are calling func2
    console.log ("hello there")
    callback( "AYSHA");
}

function myFunc2(name){
    console.log("Inside my function");
    console.log(`My name is ${name}`);
}

myFunc(myFunc2);   // we are passing a whole function to a function, which is k/ callback


