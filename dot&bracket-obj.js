// difference between dot and bracket
const key = "email";  // email can be any email adress
const person ={
    name:"Ashu",
    age:24,
    "person hobbies": ["Pampering Birds", "Gardening" , "Learning about religional facts"] //spaces arent allowed in JS, but using "" , we can create a key with multiple words.
}
 console.log(person["person hobbies"]);  //multiple word key cant be accessed by dot , instead use [""] for mutliple keys.

// to add key in a person

// person.key = "aashubashir@gmail.com";  //to print key of a person
// console.log(person);
 
person[key] = "aashubashir@gmail.com";  //[key] will put the value of the key in the key, ie email and then will print the value of it.
console.log(person);