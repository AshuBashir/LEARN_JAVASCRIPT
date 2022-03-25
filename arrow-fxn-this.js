// arrow functions with "this" 
// arrow functions dont have their "this"



const users1 = {
    firstName : "Ashu",
    age : 66,
    about : ()=>{
        console.log(this);  // this will be window object
            console.log(this.firstName, this.age);
    }
};

users1.about();

