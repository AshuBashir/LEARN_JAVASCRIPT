// function returning function


function myFunc(){
    function hello(){
        console.log("hello world");
    }
    return hello;       
}
const ans = myFunc();
console.log(ans()); //function returning function. ans() is hello()

