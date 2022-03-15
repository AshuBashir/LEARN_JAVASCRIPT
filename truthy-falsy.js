// if else condition

let age = 20;
if(age>18){
    console.log("User can play the game");
}
else{
    console.log("User cant play the game");
}

let no = 14;
if (no%2===0) {
    console.log("even");
} else {
    console.log("odd");
}

// falsy values
     // ""
     //null 
     //undefined
     //0


let fName= ""; //if we put "" null undefined or 0, everytime else condition will play up bz all of these are falsy values
if (fName) {
    console.log(fName);
} else {
    console.log("Fname is kind of empty");   
}


