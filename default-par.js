// default parameters


// before default parameters, we would use if condition
function addTwo (n1,n2){
    if(typeof n2 === "undefined"){
        n2=0;
    }
    return n1+n2;

}

 const ans =addTwo(6);
 console.log(ans);


 // after default parameters

 function addTwo (n1,n2=0){
    return n1+n2;

}

 const ans1 =addTwo(6,8);  // if we pass only one parameter, then by default n2 will take 0, else parameter
 console.log(ans1);