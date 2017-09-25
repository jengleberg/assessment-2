// starts game page and defines variables


var beavis = document.getElementById('beavis');
var butthead = document.getElementById('butthead');
var container = document.getElementById('container');

document.onkeydown = anim;

// Establishes starting points for players

var beavisLeft = 0;
var buttheadLeft = 0;

//Function that controls the repositioning 
// of the players to the left when a key is pressed
// Establishes alert when reaching the end of the container

function anim(e) {

if(e.keyCode == 39){
	beavisLeft +=20;
	beavis.style.left = beavisLeft + 'px';
	if (beavisLeft >= 550){
		alert("Beavis Wins!");
		
		
		
	}

}

if (e.keyCode == 37){
	buttheadLeft +=20;
	butthead.style.left = buttheadLeft + 'px';
	if (buttheadLeft >= 550){
		alert("Butthead Wins!");
		
		
	}
	

}



}

// Sends player to landing page to start new game

document.getElementById("newGame").onclick = function () {
	location.href = "landing.html";
};
