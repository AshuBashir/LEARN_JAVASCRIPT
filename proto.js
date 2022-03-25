// proto (OOPS Concept)
// if we need as many users, for that we create function

// 1 . .function(that function will create object)
// 2..  add key value pair
// 3 .. will return to object

function createUser(fName,lName,email,age,address){
    const user = {};
    user.fName =fName;
    user.lName= lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.fName} is ${this.age} years old`};
    user.is18 =  function(){
        return this.age >=18};
        return user;

}
const user1 = createUser("Ashu" , "Sufie","aashubashir@gmail.com" , 23, "Rajouri kadal");
console.log(user1);
const is18age = user1.is18();
console.log(is18age);   
const userInfo = user1.about();
console.log(userInfo);   






