/*

    @author Joao Cordio

    LAB 8

Using if statements, create a rock, paper, scissors game.

https://wrpsa.com/the-official-rules-of-rock-paper-scissors/

You may use any method of user input and any method of visualisation (alerts, document.getElement etc), as you will be marked on the JavaScript logic around your if statements

When you have completed your game, please commit to GitHub and upload a text document with the link here

*/ 

//Main Function of Playing
function play(){

	//Get options Player (manually) and Computer (Automatically) - Rock is 1, Paper is 2, and Scissors is 3
	var player = document.getElementById("player").value;	
	var computer = getRandom();	

	//Hide select Options
	document.getElementById("player").className  = "d-none";

	getComputerOption(computer);

	//Check the winner
	if((player == 1 && computer == 3) || (player == 2 && computer == 1) || (player == 3 && computer == 2)){

		document.getElementById("alertWin").className  += "d-block";
		
		
	}else if ((player == 1 && computer == 2) || (player == 2 && computer == 3) || (player == 3 && computer == 1)){

		document.getElementById("alertLose").className  += "d-block";

	}else if ((player == 1 && computer == 1) || (player == 2 && computer == 2) || (player == 3 && computer == 3)){
		
		document.getElementById("alertDraw").className  += "d-block";

	}else{
		//If invalid resert options to the default and let player knows	
		playAgain()
		alert("Please select at least one option.");		
		return false;
	}

	//Hide and Show buttons: Play and Again?
	document.getElementById("buttonPlayAgain").className  = "";
	document.getElementById("buttonPlay").className  = "d-none";		
}

//Clicking on "Again?" set everything as default
function playAgain(){
	setDefaultComputer();
	setDefaultAlerts();
	document.getElementById("playerOption").src="imgs/blue-question-mark.png";
	document.getElementById("player").value  = 0;
	document.getElementById("player").className  = "";
	document.getElementById("buttonPlayAgain").className  = "d-none";
	document.getElementById("buttonPlay").className  = "";

}

//Return a randon number: 1, 2 or 3
function getRandom(){
	return Math.floor(Math.random() * 3) + 1;
}

//Set Player's option image
function getPlayerOption(){

	//Get player Option
	var player = document.getElementById("player").value;
	var img = "";

	//select the correct image
	if(player == 0){
		img = "imgs/blue-question-mark.png";
	}else if(player == 1){
		img = "imgs/rock-blue.png";
	}else if(player == 2){
		img = "imgs/paper-blue.png";
	}else if (player == 3){
		img = "imgs/scissors-blue.png";
	}else{
		alert("Sorry, something went wrong!");
	}
	
	//set image
	document.getElementById("playerOption").src=img;
	
}

//Set Computer's option image
function getComputerOption(computer){

	var img = "";

	if(computer == 0){
		img = "imgs/red-question-mark.png";
	}else if(computer == 1){
		img = "imgs/rock-red.png";
	}else if(computer == 2){
		img = "imgs/paper-red.png";
	}else if (computer == 3){
		img = "imgs/scissors-red.png";
	}else{
		alert("Sorry, something went wrong!");
	}

	document.getElementById("computerOption").src=img;
	
}

//Reset the Alerts to the Default Options
function setDefaultAlerts(){
	document.getElementById("alertWin").className  = "alert alert-primary d-none";
	document.getElementById("alertLose").className  = "alert alert-danger d-none";
	document.getElementById("alertDraw").className  = "alert alert-warning d-none";
}

//Reset Computer Option
function setDefaultComputer(){
	document.getElementById("computerOption").src="imgs/red-question-mark.png";
}