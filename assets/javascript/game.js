var letterGenerator = function()
{
    var letter = "";
    var alphabet = "abcdefghijklmnopqrstuvwxyz";

	letter += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    console.log(letter);
}

var win = 0;
var loss = 0;
var guess = 9;


document.getElementById("winCount").innerHTML = win;
document.getElementById("lossCount").innerHTML = loss;
document.getElementById("guessCount").innerHTML = guess;

window.onkeyup = function(event){
	document.getElementById("letterList").innerHTML = event.key;
}