// print no.s from 0---10


let i =0;
while(i <=10){
    console.log(i);
    i++;
}
console.log(`current value of i is ${i}`)
console.log("Ashu is tired");



//sum of first ten natural numbers

let num = 10;
let total =0;
let j=0;
while(j<=num){              // this method takes linear time
total= total+ j;
j++
}
console.log(total);


//sum of first n natural numbers = (n*(n+1))/2
// so above code can be done in this way too

let number =15;
let gTotal = (number*(number+1))/2;      // this method is fast, takes constant time
console.log(gTotal);
