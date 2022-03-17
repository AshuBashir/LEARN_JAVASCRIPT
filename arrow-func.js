// arrow functions

//used extensively in ReactJS

const singHBD = ()=> {
    console.log("Happy Birthday Aysha");
}
singHBD();


const sum = (num1,num2,num3) =>{
    return num1+num2+num3;
}

 let res =sum(89,3244,66);
 console.log(res);

 // we can write arrow functions this way too., ie we can remove return and {}
 const isEven = number => number %2 ===0;

 console.log(isEven(98));
