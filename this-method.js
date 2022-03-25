// methods
// functions inside objects

// this

function personInfo(){
    console.log(`Person's name is ${this.firstName} and person's age is ${this.age}`);
}

const person1 = {
    firstName: "Ashu" , 
    age : 8,
    about : personInfo ,  // we are assigning personInfo as value to key "about" , we are not calling it
};

const person2 = {
    firstName: "Iqsam" , 
    age : 18,
    about : personInfo ,
};

const person3 = {
    firstName: "Sufieh" , 
    age : 108,
    about : personInfo ,
};

person1.about();  // when this fxn will be called, "this" will store person1 in it
person2.about();  // when this fxn will be called, "this" will store person2 in it
person3.about();  // when this fxn will be called, "this" will store person3 in it



