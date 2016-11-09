



//sets letters to choose//
var computerChoices = ['a' , 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//global variables
var guessesLeft = 20;
var wins = 0;
var losses = 0;
//empty array that will contain the guessed letters
var lettersGuessed = [];



//starts the game when user presses a letter//
document.onkeyup = function(event){

	//this will create a random choise of the letter to be guess
	var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 console.log(letterToGuess);

	 var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	 console.log(userGuess);

	 
	 
	// var lettersGuessed = userGuess ;

	//this foor lop will create score and wil endthe game if user runs off guesses
	 if(userGuess == letterToGuess) {
	 	wins++;
	 	lettersGuessed.push(letterToGuess);

	 } else if (losses == 20){
	 	alert("you lost the game");
	 } else {
	 	guessesLeft--;
	 	losses ++;
	  }
	

//taking tallies and display in hmtl//
 	var html = "<p>wins: " + 
		wins + 
		"</p>" +
		"<p>losses: " + 
		losses + 
		"</p>" +
		"<p>Guesses Left: " + 
		guessesLeft + 
		"</p>"+
		"<p>Your guesses so far: " + 
		lettersGuessed + 
		"</p>";
		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html; }
	
	





		