let firstName = "Ashu" ;
console.log(firstName[2]);

console.log(firstName.length) ;   //spaces are also included in the length 

console.log(firstName[firstName.length-1]) ;   //firstName.length will give length only and we put firstName at prefix again just to print that value.


// string methods
//Ist method : trim()

let secondName = "   Ashu     " ;
console.log(secondName.length) ;
let newString = secondName.trim() ;  //gives new string "Ashu"
console.log(newString) ;
console.log(newString.length) ;



//2nd method : touppercase()

let thirdName = "i am writing everything in small letters";
console.log(thirdName.toUpperCase());
// to lowercase()

let forthName = "hjghHJSHDHJJhjdshjd"
console.log(forthName.toLowerCase());

//slice method
let sliceString = firstName.slice(0,2);
console.log(sliceString);