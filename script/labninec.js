/*
    @author Joao Cordio

    LAB 9

	- Create a web page that asks a user how many subjects they take, and what marks they got in each subject. The application should then output their results
    Bonus: Tell the user their grade from A-F based on their results

	Found this on google, not sure how "letter grades" works:
		A	90–100%	4.0
		B	80–89%	3.0
		C	70–79%	2.0
		D	60–69%	1.0
		F	0–59%	0.0
*/ 


//Main Function Called from HTML
function check(){
	
	//Get how many subjects user informed
	let subjects = document.getElementById("subjects").value;

	//Will call the function to ask the grades, that will run X times informed by the user
	for(i=0;i<subjects;i++){
		askGrade(i);
	}

	//show the reset button
	document.getElementById("reset").className  = "btn btn-light";

}

//Function to ask the grades
function askGrade(quantity){

	//set quantity to show on the question
	quantity = quantity+1;
	let grade = prompt("Please enter your grade " + quantity);

	//Call function to get grade letter
	gradeLetter = checkAF(grade);

	//Show on HTML
	document.getElementById("result").innerHTML += "<p><span class='text-cranberry'>Grade " + quantity + ":</span> " + grade + " (" + gradeLetter + ")" + "</p></br>";
	
}

//Function to get the Letter
function checkAF(grade){
	if(grade <= 59){
		gradeLetter = "F";
	}else if (grade <= 69){
		gradeLetter = "D";
	}else if (grade <= 79){
		gradeLetter = "C";
	}else if (grade <= 89){
		gradeLetter = "B";
	}else{
		gradeLetter = "A";
	}
	return gradeLetter;
}

//Function to reset
function reset(){
	location.reload();
}