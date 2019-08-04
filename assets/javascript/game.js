var wins = 0;
var losses = 0;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guesses
var previous
var randomLetter
var evilQuote = ["Not even close.", "You might as well stop now.", "Are you even qualified to face me?", "What a pathetic attempt at survival", "I'm enjoying watching you flounder", "Watching you fail so bad... It almost makes me feel sorry", "Is there someone else there? someone... skilled?"]

restart = function () {
    guesses = 10; //resets number of guesses to 10
    previous = []; //clears the guesses so far
    randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)]; //generates a new random letter
    console.log(randomLetter) //logs the random letter
};

function enterGuess() {
document.getElementById("inputBox").value; //gets the value from the textbox
console.log(inputBox.value) //logs the player's guess

lowKey = document.getElementById("inputBox").value.toLowerCase();
console.log(lowKey)


if (alphabet.indexOf(lowKey) !== -1) { //checks to see if the player's guess is a single lowercase letter
    console.log("Yes") //logs if it is a single lowercase letter
previous.push(lowKey); //pushes the player's guess to an array



    guesses-- //takes away a guess

    if (lowKey === randomLetter) { //checks to see if the player's guess is correct
        document.getElementById("speechText").innerHTML = "What? No. How is this possible?" //The boss is aghast!
        console.log("You win") //logs your victory
        wins++ //adds to wins
        restart(); //resets the game
    }
    else if (guesses < 1) { //checks to see if the players guess is wrong and you are out of guesses and lost the game
        document.getElementById("speechText").innerHTML = "You never stood a chance against MY psychic brilliance." //#VillianGloating
        console.log("You lose") //logs your utter defeat
        losses++ //adds to your shame
        restart(); //restarts the game
    }
    else { //checks to see if the players guess is wrong, but still has some attempts left
        var randomQuote = evilQuote[Math.floor(Math.random() * evilQuote.length)] //selects a random villian quote

        document.getElementById("speechText").innerHTML = randomQuote //displays it above the boss
        console.log("Guess again") //logs that which you must do
    }

    //logs stats
console.log(wins)
console.log(losses)
console.log(guesses)
console.log(previous)

//displays stats
    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("yourGuess").innerHTML = "Your guesses: " + "<br>" + previous;

    
}

else { //checks to see if the player's guess is not a single lowercase letter

    console.log("No") //bad client, no.
    document.getElementById("speechText").innerHTML = "Your guess must be a single, lowercase letter" //Tells you your mistake
}

document.getElementById('inputBox').value = ""; //clears the value in the textbox
}
