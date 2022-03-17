// find method of array  ; takes input as callback

// find returns first true value satisfying the condition

const myArray = ["hello", "cat", "doggo" , "see"];

function isLength3(string){
    return string.length ===3;
}

const ans = myArray.find(isLength3);
console.log(ans);

//realistic example
const userCart = [
    {productId: 1, productName : "mobile" , price :12000},
    {productId: 2, productName : "laptop" , price :22000},
    {productId: 3, productName : "watch" , price :32000},
    {productId: 4, productName : "television" , price :42000},

];
//if we want to find out the product with id3, we use find

let returnVal = userCart.find((user)=>{
    return user.productId===3;
});

console.log(returnVal);