<script type="text/javascript">
    
    
	// user guess available
	var guessesLeft = 7;
	// user guesses
	var guess;
	// empty array for letters guessed by user
	var lettersGuessed = [];
    //
    var gameOver = guessesLeft - guess = 0;
	// var wins and losses
	var wins = 0;
    var losses = 0;
	// array of alphabet
	var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	// var for random letters chosen by computer
	var random;
	// random letter generator
	function randomLetter() {
		random = alphabet[Math.floor(Math.random() * alphabet.length)];
		console.log(random);
	}

    randomLetter();
   

    // this allows user to submit their choice in the form
    document.getElementById("submit").addEventListener("click", function(event){
    	event.preventDefault();


        // this grabs the data the was inputted into the form and console logs their selection
        guess = document.getElementById("form").value;
        console.log("guess", guess);

        // if user guesses correctly this states that they win and to increase win count by 1 while resetting game.
    	if (guess === random) {
    		console.log("you won!");
            alert("You may be Psychic after all..");
    		wins++;
    		guessesLeft = 7;
    		randomLetter();
    	}

        //if user guesses incorrectly this states that they lose and their loss counts increases by 1 and proceedes to restart game
    	else {
    		console.log("you lose!");
            alert("Sorry my Child, but you are NOT Psychic.");
    		losses++;
    		guessesLeft = 7;
    		randomLetter();
    	}
    	
    });

        // need to create a function to where user can only input a single character

        // 

    







	</script>