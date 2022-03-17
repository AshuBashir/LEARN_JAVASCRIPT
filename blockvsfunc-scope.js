// block scope vs function scope

// let and const are block scope
// var is function scope.

{                // {} is one block in JS
    let firstName = "Ashu";
    console.log(firstName);   // it will run

}

// console.log(firstName);  // will show error bz not in its block

{
    let firstName = "Iqsam";
    console.log(firstName);  // it will run

}


// var  ; it is function scope, ie we can access it outside the block as well.
// we can access var if defined in a function, at any block of that function.
{var myVar = "harshit";
console.log(myVar);     // will print harshit
}

{
    console.log(myVar);   // will print harshit

}


