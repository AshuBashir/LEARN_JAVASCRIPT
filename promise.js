// Promise: Best program on promises
// resolve
// reject 
// pending 

function func1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("Function func1:Your promise has been resolved");
                resolve();
            }
            else {
                console.log("Function func1:Your promise has not been resolved, Sorry!!");
                reject();
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log("Ashu: Thank you for resolving");
}).catch(function(){
    console.log("Ashu: very bad idiot");
});

//inside then is resolved. resolve()
//function inside catch is reject
