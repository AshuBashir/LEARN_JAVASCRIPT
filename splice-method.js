// splice method
// if we want to insert b/w an array, use splice method
// start, delete(it is count here ie no. of items), insert

const myArray = [ 23,45,6,7,8,899];


// delete ans insert together
myArray.splice(3,1,908);
console.log(myArray);

// delete only
myArray.splice(5,1);
console.log(myArray);