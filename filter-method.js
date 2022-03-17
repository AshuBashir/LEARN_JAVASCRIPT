// filter method
const numbers = [3,4,6,7];

const isEven = function(number){
    return number%2 === 0;
}

const results = numbers.filter(isEven);
console.log(results);