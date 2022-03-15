//for loop in an array
let fruits = ["apple", "mango", "orange","papaya"];
console.log(fruits.length);
console.log(fruits[fruits.length-1]);
let fruits2=[];
for(let i =0;i<= fruits.length-1; i++){
    fruits2.push(fruits[i].toUpperCase());
}

console.log(fruits2);

