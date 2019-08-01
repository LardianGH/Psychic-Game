var wins = 0;
var losses = 0;
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var guesses
var previous
var randomNum

restart = function () {
    guesses = 10;
    previous = [];
    randomNum = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(randomNum)
};

function enterGuess() {

document.getElementById("inputBox").value;

if (alphabet.indexOf(inputBox.value) !== -1) { //checks to see if the playuer's guess is a single letter
    console.log("Yes")
previous.push(inputBox.value);



    guesses--

    if (inputBox.value === randomNum) { //checks to see if the player's guess is correct
        document.getElementById("speechText").innerHTML = "What? No. How is this possible?"
        console.log("You win")
        wins++
        restart();
    }
    else if (guesses < 1) {
        document.getElementById("speechText").innerHTML = "You never stood a chance against MY psychic brilliance."
        console.log("You lose")
        losses++
        restart();
    }
    else {
        document.getElementById("speechText").innerHTML = "Not even close"
        console.log("Guess again")
    }

console.log(wins)
console.log(losses)
console.log(guesses)
console.log(previous)

    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("yourGuess").innerHTML = "Your guesses: " + "<br>" + previous;

    
}

else if (alphabet.indexOf((inputBox.value)) === -1){
    console.log("No")
    document.getElementById("speechText").innerHTML = "Your guess must be a letter"
}
document.getElementById('inputBox').value = "";
}
// wins++
// losses++
