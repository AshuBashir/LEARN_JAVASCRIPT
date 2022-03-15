//for of loop 
// loop means to iterate
const fruits = ["apple", "mango", "banana", "grapes", "pear"];
const fruits2 = [];

for(let fruit in fruits){
    console.log(fruit);  // it will return us the index
}


for(let fruit in fruits){
    console.log(fruits[fruit]);  //it will now return the fruits at "fruit" index.
}


for(let fruit in fruits){
    fruits2.push(fruits[fruit].toUpperCase());  // it will return us the index
}
console.log(fruits2);



