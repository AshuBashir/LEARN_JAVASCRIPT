// call method
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

// we want to use about of users1 from users2
users1.about.call(users2) // will give values of users2 to "this"
users1.about.call() // will give o/p undefined as we dint pass anything

users1.about.call(users2 , "guitar" , "tictac");
