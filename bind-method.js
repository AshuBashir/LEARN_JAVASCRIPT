// bind method
const users1 = {
    firstName : "Ashu",
    age : 66,
    about : function(hobby, favMusician){
            console.log(this.firstName, this.age, hobby, favMusician);
    }
};

users1.about();



const users2 = {
    firstName : "Iqsam",
    age : 88,
};



let funct = users1.about.bind(users2 , "guitar" , "tictac");
funct();

// // don't do this mistake
const myFunc = users1.about.bind(users1); // if we write only users1.about and assign it to myFunc, it will show undefined, bz we dint call about(), ie why we put bind method along such that it binds users1 with about method

myFunc(); 
