//proto

function createUser(fName,lName,email,age,address){
    const user = Object.create(userMethods);
    user.fName =fName;
    user.lName= lName;
    user.email = email;
    user.age = age;
    user.address = address;
   ;     return user;


}
const userMethods = {
    about :function(){
        return `${this.fName} is ${this.age} years old`},
    is18 : function(){
        return this.age >=18},
    sing : function(){
        return ("Mujhko pehchaan lo, mai hu don");
        }
}



const user1 = createUser("Ashu" , "Sufie","aashubashir@gmail.com" , 23, "Rajouri kadal" );
console.log(user1);
const user2 = createUser("Iqsam" , "Sufie","iqsambashir@gmail.com" , 24, "aali kadal");
const user3 = createUser("mehnaz" , "Sufie","mehnazbashir@gmail.com" , 25, "ok kadal");

console.log(user1.about());
console.log(user3.about());
console.log(user2.is18());
console.log(user2.sing());
