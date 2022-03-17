// important array methods

//forEach; takes input as a callback
//map  ; takes input as a callback too
//filter  ; takes input as a callback too
//reduce     ;takes input as a callback too

const numbers=[1,2,3,4,5];
// function multiplyArray(number,index){
//     console.log("Index is :" , index);
//     console.log(`${number}*2 = ${number*2}`);

// }


// multiplyArray(numbers[0],0);
// multiplyArray(numbers[1],1);
// // if we want to do it for each element, then we can use loop

// for(let i=0; i<numbers.length; i++){
//     multiplyArray(numbers[i], i);
// }


// // we can use instead forEach loop

// numbers.forEach(multiplyArray);  //callback



// numbers.forEach(function(number,index){
//     console.log(`index is : ${index} , number is ${number}`)
// });



// // // make a function that will mul by 2
// numbers.forEach(function(number,index){
//     console.log(number*2 , index);
// });

const users = [
    {firstName : "Ashu" , age:22},
    {firstName : "Iqsam" , age:23},
    {firstName : "Mehnaz" , age:24},
    {firstName : "Sahiba" , age:25},
    {firstName : "Ab.Wahid" , age:26},

];
users.forEach(function(user){       // forEach
    console.log(user.firstName);
});

users.forEach((user)=>{               //arrow functions
    console.log(user.firstName);
})

for (let user of users){
    console.log(user.firstName);   // for of; same job as of forEach

}