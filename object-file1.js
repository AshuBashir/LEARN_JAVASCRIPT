

function createUser(fName,lName,email,age,address){
    const user = {};
    user.fName =fName;
    user.lName= lName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18= userMethods.is18;
        return user;

}
const userMethods = {
    about :function(){
        return `${this.fName} is ${this.age} years old`},
    is18 : function(){
        return this.age >=18},
}



const user1 = createUser("Ashu" , "Sufie","aashubashir@gmail.com" , 23, "Rajouri kadal" );
console.log(user1);
// const is18age = user1.is18();
// console.log(is18age);   
// const userInfo = user1.about();
// console.log(userInfo); 

const user2 = createUser("Iqsam" , "Sufie","iqsambashir@gmail.com" , 24, "aali kadal");
const user3 = createUser("mehnaz" , "Sufie","mehnazbashir@gmail.com" , 25, "ok kadal");

// if we want like 1 million users, about & is18 will get created that many times. so we made a sepafrate object for that


console.log(user1.about());
console.log(user3.about());
console.log(user2.is18());
