// rest parameters




//   // ...c is rest parameter
// function myFunc(a,b,...c){  
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }
// myFunc(3,4,5,6,7,8,9);





function addAll(...numbers){
    console.log(numbers);
    console.log(Array.isArray(numbers));
    let total = 0;
    for (let number of numbers){
        total= total+number;   
    }
    return total;
}

let ans = addAll(2,3,6,7,8,9,77);
console.log(ans);