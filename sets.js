// sets


//arrays defined in a set
const numbers = new Set([1,2,2,3]);   // set will only show 1,2,3
console.log(numbers);
console.log(numbers[2]);  // will show undefined

// strings
const str = new Set("abc");
console.log(str);

// empty set and add values


const array = ["item1", "item2", "item3"];
const num = new Set();
num.add(1);
num.add(134);
num.add(231);
num.add(array);
num.add(array);
num.add(["ashu" , "sufie"]);
console.log(num);

if(num.has(1)){
    console.log("1 is present");
}

// if we want to have unique elements
const myArray = [1,2,3,5,6,6,4,3,2,2,3];
const uniqueElements = new Set(myArray);
console.log(uniqueElements);
let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);



