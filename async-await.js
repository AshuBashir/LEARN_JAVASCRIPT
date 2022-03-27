// async function func(){
//     return "Ashu";
// }
// console.log("Before calling func");
// const res = func()
// console.log("After calling func");

// console.log(res);
// console.log("Last Line of This Js");


async function ashu(){
console.log("Inside ashu Function")
const response = await fetch('https://api.github.com/users');
console.log("Before response");

const users = await response.json();
console.log("Users resolved");
return users;
}

console.log("Before calling ashu");
const answer= ashu();
console.log("After calling ashu");
console.log(answer);
answer.then(data => console.log(data));
console.log("Last line of the js file")