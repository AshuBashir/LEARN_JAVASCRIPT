//computed properties.
const key1 = "objkey1";
const key2 = "objkey2";

const value1 = "myvalue1";
const value2 = "myvalue2";

const obj = {
    [key1] : value1,  // the [] for key is computed property.
    [key2] : value2,

}
console.log(obj);


// if we havent computed prop, we could do this in another way like this

const obj1 = {};
obj1[key1]= value1;
obj1[key2]= value2;
console.log(obj1);

