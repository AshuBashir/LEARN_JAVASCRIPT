//functions are like servants in programming
// there might as many servants in a pgm.
// a servant may help other servant as well.




function singSong (){
    console.log("HAPPY BIRTHDAY");

}

singSong();  // call/invoke/run

//2+4

function add(){
    result = (2+4);
    console.log(result);
}
add();

function sub(){
    return 8-5;
}
let returnedValue = sub();    // it will store *return 8-5* in returnedValue
console.log(returnedValue);


// we can pass parameters in a function, ie a reusable function
function division(num1, num2){
    return num1/num2;
}
let retValue = division(9,3);  // if we dont pass arguments , the result will be NaN. Bz undefined + undefined = NaN
console.log(retValue);


// //make odd even
// function isEven(num){
//     if (num %2 ===0) {
//     return true;        
//     } else {    // we can omit else here
//     return false; 
//     }
// }

// let comingValue = isEven(96558);
// console.log(comingValue);



// we can use return statement like this for above to make it more concise.
function isEven(num){
    return num%2 ===0;
}
let comingValue = isEven(96558);
console.log(comingValue);



//function: it will take input as string and output will return ist character

// function isString(str1){
//      return str1[0];
// }
// let comingVal = isString("Ashu");
// console.log(comingVal);

function isString(str1){
    return str1[str1.length-1];
}
let comingVal = isString("Ashu");
console.log(comingVal);


//function : input will be array and a target(number) , output : index of target if target present in array, if not return -1

function findTarget(array, target){
    for(let i =0; i<array.length;i++){
        if(array[i]=== target){
            return i;
        }
    }
    return -1;
}
 const myArray = [12,34,56,7,98,790] ;
let returnValue = findTarget(myArray, 790);
console.log(retValue);

// console.log(b); // // inayat task
// let b = 4;   // // if var is used, it will show undefined

function abc(){
    let a = 10;
}
console.log(a);




















