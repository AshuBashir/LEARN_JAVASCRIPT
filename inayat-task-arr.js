let array = [1,2,3,4,5,6];
let reversed= [];

console.log(array.length);
// for(let i=array.length-1; i>=0; i--){
//     reversed.push(array[i]);
// }
// console.log(reversed);

reversed=array.reverse();
console.log(reversed);



const array1 = [1,12,2,112];
array.sort((a,b) =>{
    return a-b;
});
console.log(array1);