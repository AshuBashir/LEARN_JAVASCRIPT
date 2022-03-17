// use map to double the numbers of the array and use filter to filter out greater than 10, output should be numbers greater than 10.

const array = [1,2,3,4,5,6];

const array1 =array.map((number)=>{
    return number + number;

})

console.log(array1);


const array3 =array1.filter((number)=>{
    return number>=10;

})
console.log(array3);


