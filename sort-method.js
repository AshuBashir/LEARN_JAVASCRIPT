// sort method   ; it mutates the original array

// 5,6,4,23,456,47,33
//sort : 4,5,6,23,33,47,456

const numbers = [5,6,4,23,456,47,33];
// numbers.sort(); //JS sorts it considering it as a string, and takes the value of ASCII and sorts it accordingly on the basis of Ist digit
// console.log(numbers);

numbers.sort((a,b)=> {
    return a-b;     // a-b sorts in ascending order  & b-a sorts in descending order

});

console.log(numbers);   



// real world example for sort()
//price lowToHigh  highToLow

const userCart = [
    {productId: 1, productName : "mobile" , price :12000},
    {productId: 2, productName : "laptop" , price :200},
    {productId: 3, productName : "watch" , price :3200},
    {productId: 4, productName : "television" , price :42000},

];
// lowToHigh 
const lowToHigh = userCart.slice(0).sort((a,b)=>{
    return a.price-b.price;
});
console.log(lowToHigh);

console.log(userCart);






