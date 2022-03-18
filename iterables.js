// iterables  eg strings , arrays

const firstName = "Ashu" ;
 for(let char of firstName){
     console.log(char);

 }

 const items = ["item1" , "item2" , "item3"];
 for(let item of items){
    console.log(item);

}

const users = {'key1': 'value1' , 'key2': 'value2' };
for(let item of users){
    console.log(item);  // will show error as objects arent iterable 

}

// array like objects
// which has length property and can be accessed by index.


const firstName1 = "Ashu";
console.log(firstName1.length);
console.log(firstName1[2]);
