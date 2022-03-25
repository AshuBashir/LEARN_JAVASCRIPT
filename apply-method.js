// apply method

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



users1.about.apply(users2 ,[ "guitar" , "tictac"]);