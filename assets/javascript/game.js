// The psychic game
// created by Marc F. Munic

// win and loss are global varaiables that will change, and only reset when page is refreshed
var win = 0;
var loss = 0;

function game(){

// guess, arraryletter, letter are needed to reset every time the game starts
	var alphabet = "abcdefghijklmnopqrstuvwxyz";//use string is easier than inputting ever letter in an array
	var letterGenerator = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	var letter = letterGenerator;//computers letter
	console.log(letter);

// for the hint system
	var letterValue = alphabet.indexOf(letter);
	console.log(letterValue);

//to be displayed
	var guess = 9;
	var arrayLetter = [] //users guess
	var arrayHint = [] //hint system

	document.getElementById("winCount").innerHTML = win;
	document.getElementById("lossCount").innerHTML = loss;
	document.getElementById("guessCount").innerHTML = guess;
	document.getElementById("letterList").innerHTML = arrayLetter;
	document.getElementById("hintList").innerHTML = arrayHint;

	window.onkeyup = function(event){
		var eventValue = alphabet.indexOf(event.key);
		console.log(eventValue);

		//validate
		if (alphabet.includes(event.key) && !arrayLetter.includes(event.key)){

			if (guess > 0){
				guess -= 1;
				arrayLetter.push(event.key);

				document.getElementById("guessCount").innerHTML = guess;
				document.getElementById("letterList").innerHTML = " "+arrayLetter;
				
				//hint system
				if (eventValue > letterValue){
					arrayHint.push("before "+event.key);
					document.getElementById("hintList").innerHTML = arrayHint;
					} else if (eventValue < letterValue){
						arrayHint.push("after "+event.key);
						document.getElementById("hintList").innerHTML = arrayHint;
				}//end of hint system

				//Win
				if (event.key == letter) {
					win += 1;
					document.getElementById("winCount").innerHTML = win;
					game();
				}//end of if win

				//Loss
				if (guess == 0) {
					loss += 1;

					document.getElementById("lossCount").innerHTML = loss;
					game();
				} 
			}//end of if if loss
		}//end of if validate
	}//end of onkeyup function
}//end of game function
