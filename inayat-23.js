const array = ["abc@gmail.com" , "defgh@gmail.com", "12ab@gmail.com", "a.bcd@gmail.com", "abcd_ef@gmail.com" , "afc@gmail.com"];
console.log(array.length);
var end = array.length
const valid = function(arr){
    for(let i =0 ;i <end; i++){
        if(arr[i].includes(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){

            return "valid"
        }
        else{
            return "invalid"
        }
    }

}
const results = valid(array);
console.log(results);