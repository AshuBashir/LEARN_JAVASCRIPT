//typeof operator
let age = 22;
let firstName= "Ashu";
console.log(typeof(age));
console.log(typeof firstName);


//convert no. to a string
age = age + "";
console.log(typeof(age));

//convert string to a number
let myString = +"767";
console.log(typeof(myString));


let age1 = 18;
age1 = String(age1);
console.log(typeof(age1));

let age2 = '18';
age2 = Number(age2);
console.log(typeof(age2));


//string concatenation

let string1= "Ashu";
let string2= "Bashir";
let fullName = string1+ " " + string2;
console.log(fullName);



let string3= "67";
let string4= "45";
let fullTotal = +string3 + +string4;  //to convert given string into numbers by adding + in the prefix
console.log(fullTotal);



let a = 25;
let name = "Ashu";
let aboutMe = "My name is" + name + "and my age is" +a ;
let aboutMee= `My name is ${name} and my age is ${a}`;   //using backticks, so no need to place double quotes everywhere

console.log(aboutMe);
console.log(aboutMee);




// undefined

let undefinedName;
console.log(typeof undefinedName);

//null
let myVariable = null;
console.log(myVariable);
console.log(typeof null);   //shows object but is actually a bug\


//Bigint
let myNum1 =BigInt(123);
let myNum2 = 234n;
console.log( myNum1, myNum2);
console.log( myNum1 + myNum2);


//boolean & comparisons operator
// booleans are either true or false

let n1 = 748;
let n2 = 84789;
console.log (n1<n2);

// == vs ===
// == checks only value
// === checks both type awa value


let n3 = 748;
let n4 = '748';
console.log (n3===n4);

// similarly != vs !==
console.log (n3!=n4);
console.log (n3!==n4);




