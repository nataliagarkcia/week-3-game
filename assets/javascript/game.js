



//sets letters to choose//
var computerChoices = ['a' , 'b' , 'c' , 'd ', 'e' ,'f' , 'g', 'h' , 'i' , 'j', 'k' , 'l', 'm', 'n' ,'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' ,'w' , 'x' , 'y' , 'z'];


var guessesLeft = 9;
var wins = 0;
var losses = 0;



//starts the game when user presses a letter//
document.onkeyup = function(event){

	 var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	 var letterToGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 
	 var lettersGuessed = userGuess ;

	 if(userGuess == letterToGuess) {
	 	wins++;
	 }

     else if (losses < 9){
	 	losses ++; 

	 }
	 else {
	 	lettersGuessed++;
	 	guessesLeft--;
	 }

	 

//taking tallies and display in hmtl//
 	var html = "<p>Guess what letter i'm thinking of</p>" +
		"<p>wins: " + 
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
	
	





		