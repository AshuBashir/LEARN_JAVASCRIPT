// intro to for loop

for(let i =0; i<10; i++){
    console.log(i);
}

// console.log(i);      //this line will give error bz let works only in the loop . however it is not the case with var

// same pgm as above

for(var j=0; j<10; j++){
    console.log(j);
}

console.log(j); 


let total =0;
let number =10;
for(let i=0;i<=number;i++){
    total=total+i
}
console.log(total);