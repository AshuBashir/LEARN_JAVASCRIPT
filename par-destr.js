//parameter destructuring
// they are used with object.
//extensively used in ReactJS

const person = {
    firstName : "Ashu",
    gender : "female",
}
// function getDetails(obj){
//  console.log(obj.firstName);
//  console.log(obj.gender);

// }


//// instead of above code, we can do parameter destructuring
function getDetails({firstName,gender}){
 console.log(firstName);
 console.log(gender);

}

getDetails(person);

