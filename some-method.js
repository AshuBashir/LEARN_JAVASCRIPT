//some method

const numbers = [1,3,5,7,81,9,411];
// aim: to check any number which is odd

let ans = numbers.some((number)=>{
    return number% 2 === 0;
});
console.log(ans);

// realistic examples


const userCart = [
    {productId: 1, productName : "mobile" , price :12000},
    {productId: 2, productName : "laptop" , price :22000},
    {productId: 3, productName : "watch" , price :32000},
    {productId: 4, productName : "television" , price :42000},
    {productId: 5, productName : "macbook" , price :420000},

];

let cartValue = userCart.some((cartItem)=>{
    return cartItem.price >100000;
});
console.log(cartValue);
