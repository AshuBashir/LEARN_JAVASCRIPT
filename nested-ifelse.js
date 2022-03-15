//nested if else

let winningNumber = 17;
let guessedNumber = +prompt("Guess a number");
console.log(typeof (guessedNumber) , guessedNumber); //prompt takes input in string


    if(guessedNumber===winningNumber){
        console.log("Your Guess is Correct");
    }
    else{
        if(guessedNumber > winningNumber)
        {
            console.log("Too high");
        }else
        {
            console.log("Too low")
        }
    }

