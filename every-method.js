// every method
// callback function ---->  true/false (boolean)
// every method ----> true/false (boolean)
//every checks every element 
const numbers = [1,2,4,67,7];


let ans = numbers.every((number)=>{
    return number%2 ===0;
});
console.log(ans);


// realistic example

const userCart = [
    {productId: 1, productName : "mobile" , price :12000},
    {productId: 2, productName : "laptop" , price :22000},
    {productId: 3, productName : "watch" , price :32000},
    {productId: 4, productName : "television" , price :42000},

];

//check if every product's price is less than 50000

let answer = userCart.every((cartItem)=>{
    return cartItem.price < 50000;
});
console.log(answer);