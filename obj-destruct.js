// object destructuring
const band = {
    bandName : "Bahubali band",
    famousSong : "Jiyo Bahubali" , 
    year : 2001,
    anotherFamousSong : "jay jay kara",

};
// const bandName = band.bandName;
// const famousSong = band.famousSong;
// console.log(bandName, famousSong);
  

// //we can use object destructuring instead of the above method

// const {bandName, famousSong} = band;  // this will store values in variables bandName and famousSong
// console.log(bandName);



// if we want to rename the variables , we can put colon like this
// const {bandName: var1, famousSong: var2} = band; 
// console.log(var1);  // if we print bandName , it will show error,bz now bandName isnt storing anything.



// if we want to put the rest key value pairs in another object, we can use ...
const {bandName, famousSong , ...restProperties} = band; 
console.log(bandName,famousSong); 
console.log(restProperties);

console.log(typeof(band));
console.log(typeof(restProperties));
let a = Array.isArray(restProperties);   // its output is false.
console.log(a);


