// map method

const numbers = [1,5,7,8,9];

const square =function(number){
    return number*number;    // what is returned is stored in the array, so its crucial to return in map method.
}


const squareNumber = numbers.map(square);
console.log(squareNumber);


const users = [
    {firstName : "Ashu" , age:22},
    {firstName : "Iqsam" , age:23},
    {firstName : "Mehnaz" , age:24},
    {firstName : "Sahiba" , age:25},
    {firstName : "Ab.Wahid" , age:26},

];

 const userNames =users.map((user)=>{
    return user.firstName;
});
console.log(Array.isArray(userNames));
console.log(userNames);