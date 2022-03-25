// short syntax

const users1 = {
    firstName : "Ashu",
    age : 66,
    about : function(){
            console.log(this.firstName, this.age);
    }
};
// we can use the short syntax for above about method

const users2 = {
    firstName : "Ashu",
    age : 66,
    about (){
            console.log(this.firstName, this.age);
    }
};

users1.about();
users2.about();
