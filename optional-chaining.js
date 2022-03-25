//optional chaining

const user = {
    firstName : "Ashu" , 
    // address : {houseNumber : '13/1'}
};

// console.log(user.firstName);
// console.log(user.address.houseNumber);

console.log(user ?.firstName);
console.log(user ?.address ?.houseNumber);   // it will only check upto adress, bz thereby it will get to kno there is no address

