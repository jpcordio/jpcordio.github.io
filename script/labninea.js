/*

    @author Joao Cordio

    LAB 8

	Script for:
	- Create a web page that prints all of the lyrics to '99 bottles of beer' https://www.songfacts.com/lyrics/traditional/99-bottles-of-beer

*/ 

//Main Function of Playing
function play(){

	for(i=99; i >= 0; i--){                      
		if (i != 0){
			document.getElementById("song").innerHTML += i + " bottles of beer on the wall, " + i + " bottles of beer.<br />Take one down and pass it around, " + (i-1) + " bottles of beer on the wall.<br /><br />";
		}
		else if (i == 0){
			document.getElementById("song").innerHTML += "No more bottles of beer on the wall, no more bottles of beer.<br />Go to the store and buy some more, 99 bottles of beer on the wall.<br />";
		}else{
			document.getElementById("song").innerHTML += "ERROR! Something went wrong!";
		}          
	}
}