var wins = 0;
var losses = 0;
var guesses = 10;
var previous = [" "];
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]


var randomNum = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(randomNum)
function enterGuess() {
document.getElementById("inputBox").value;
console.log(inputBox.value)
    guesses--

console.log(wins)
console.log(losses)
console.log(guesses)
console.log(previous)

    document.getElementById("wins").innerHTML = "wins: " + wins;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    document.getElementById("guessLeft").innerHTML = "Guesses left: " + guesses;
    document.getElementById("yourGuess").innerHTML = "Your guesses: " + previous;

    document.getElementById('inputBox').value = " ";
}

wins++
losses++
