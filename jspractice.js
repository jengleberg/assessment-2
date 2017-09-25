window.onload = start;
var beavis = document.getElementById('beavis');
var butthead = document.getElementById('butthead');
var container = document.getElementById('container');

document.onkeydown = anim;



var beavisLeft = 0;
var buttheadLeft = 0;


function anim(e) {

if(e.keyCode == 39){
	beavisLeft +=20;
	beavis.style.left = beavisLeft + 'px';
	if (beavisLeft >= 550){
		alert("Beavis Wins!");
		start();
		
		
	}

}



if (e.keyCode == 37){
	buttheadLeft +=20;
	butthead.style.left = buttheadLeft + 'px';
	if (buttheadLeft >= 550){
		alert("Butthead Wins!");
		start();
	}
	

}

}



document.getElementById("newGame").onclick = function () {
	location.href = "landing.html";
};
