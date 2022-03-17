//lexical scope
const myVar = "value";
function myApp(){
    // const myVar = "value";
    function myFunc() {
        // const myVar = "value";
        console.log("inside my function" , myVar);
    }  // function declaration
        const myFunc2 = function(){} // functtion expression
        const myFunc3 = () =>{}  //arrow function
        console.log (myVar);
        myFunc();
}

myApp();
