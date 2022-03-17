//reduce method
const numbers = [1,2,3,4,5,6];
// aim: sum of all numbers in the array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;

});

console.log(sum);


// the pgm logic will go like this.   acccumulator stores ist value and currentValue stores next immediate value and return stores their added value, which in the next step gets stored in the accumulator


//accumulator ,     currentValue  , return
//   1                   2            3
//   3                   3            6
//   6                   4            10
//   10                    5           15
//   15                  6            21




const userCart = [
    {productId: 1, productName : "mobile" , price :12000},
    {productId: 2, productName : "laptop" , price :22000},
    {productId: 3, productName : "watch" , price :32000},
    {productId: 4, productName : "television" , price :42000},

];

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{    //currentProduct will be having the ist entire object.
    return totalPrice+ currentProduct.price ;

} , 0);   // totalPrice will be first assigned 0
console.log(totalAmount);




