// object in array.
// very useful in real world applications

const users = [
    {userId:1, firstName: "Ashu", gender: "female"},
    {userId:2, firstName: "Iqsam", gender: "female"},
    {userId:3, firstName: "Raheem", gender: "male"},
]
// for ( let user of users){
//     console.log(user);
// }

// // we can also access individual properties.

for ( let user of users){
    console.log(user.userId);
}