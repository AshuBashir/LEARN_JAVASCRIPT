const fruits = ["apple", "mango", "banana", "grapes", "pear"];
let i=0;
const newFruits=[];
console.log(fruits.length);
while(i< fruits.length){
    newFruits.push(fruits[i].toUpperCase());
    i++;
}
console.log(newFruits);
