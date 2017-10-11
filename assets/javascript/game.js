$(document).ready(function() {

// psuedo code:
// Random number between 19 and 120 generated for target score, in #target, element h2.
//  make it a variable named targetNumber.
// it is reset to another random number after every round of play.

var targetNumber = 0;

	function theTarget() {
		targetNumber = Math.floor((Math.random() * 101) + 1);
    	targetNumber += 18;
	}

	console.log(theTarget(targetNumber));
	$("h2").text(targetNumber);

//The total score in #usertotal is set to 0.  Put it in a variable, userTotal.
	var userTotal = 0;

	var wins = 0; 

	var losses = 0;


//put random values on each crystal at the start of every round of play. between 1 and 12.
//create a for loop 4 times,  - call the function 4 times, once for each crystal, before round of play
// run a random number generator, get the result and assign it as an attr to a crystal
	
	var crystalValue = [];

	for (var i = 0; i < 4; i++) {
		crystalValue[i] = Math.floor((Math.random() * 11) + 1);
		crystalValue[i] += 1;
		console.log(crystalValue[i]);
	}
	//now, add each value to a separate crystal button

		$("#buttonBlue").attr("crystalValue", crystalValue[0]);
		$("#buttonWhite").attr("crystalValue", crystalValue[1]);
		$("#buttonGreen").attr("crystalValue", crystalValue[2]);
		$("#buttonPurple").attr("crystalValue", crystalValue[3]);



// as each crystal is clicked, the event takes the value assigned to that crystal, and adds it 
//in the h2 element inside #usertotal. it's variable userTotal is added inside of each round of play

	$(".button").on("click", function() {

		var valueofCrystal = ($(this).attr("crystalValue"));
		valueofCrystal = parseInt(valueofCrystal);
		console.log("valueofCrystal is " + valueofCrystal);

		userTotal += valueofCrystal;
		console.log("userTotal = " + userTotal);
		$("h3").text(userTotal);

		if (userTotal === targetNumber) {
			wins++;
			console.log("Wins = " + wins)
		}

		if (userTotal > targetNumber) {
			losses++;
			console.log("Losses = " + losses)
		}

		$("#wins").text(wins);
		$("#losses").text(losses);


// userTotal is checked to see if it is equal to or greater than targetNumber after each click, and
// subsequent addition to userTotal.

// if is it equal, then add 1 to wins, the variable name wins in the <p> in #counter

// if it is greater than, then add 1 to losses, the variable named losses in the <p> in #counter.

// if either of these things happen, then the round is over, targetNumber is regenerated, and userTotal is 
//set to 0.  Crystals are given new randomly generated values.
	});
//user then clicks a crystal to start another round.

});