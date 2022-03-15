// nested destructuring

const users = [
    {userId:1, firstName: "Ashu", gender: "female"},
    {userId:2, firstName: "Iqsam", gender: "female"},
    {userId:3, firstName: "Raheem", gender: "male"},
]
const [user1,user2,user3] = users;  // this is array destructuring.
console.log(user1);

// const [{firstName}, , {gender}] = users;  //nested destructuring ; obj within array. it will print the firstname of user1, left the second, print the gender of the user3
// console.log(firstName);
// console.log(gender);

// if we want to change the firstName(property key) of the user1, we can do it as 

const [{firstName: myFirstName, userId}, , {gender}] = users;  
console.log(myFirstName);
console.log(userId);
console.log(gender);

