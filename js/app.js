var beavis;
var butthead;

function startGame() {
	beavis = new component(40, 40, "red", 120, 270);
    butthead = new component(40, 40, "blue", 120, 320);
    myGameArea.start();
    
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval (updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        });
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        });
    },
    clear: function() {
    	this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.x = x;
    this.y = y;    
    this.update = function() {
    	ctx = myGameArea.context;
    	ctx.fillStyle = color;
    	ctx.fillRect(this.x, this.y, this.width, this.height);
	};

 this.newPos = function() {
 	this.x += this.speedX;
 };
}

function updateGameArea() {
	myGameArea.clear();
	beavis.speedX = 0;
    if (myGameArea.key && myGameArea.key == 65) {beavis.speedX = 3; }
    beavis.newPos(); 
    beavis.update();
    butthead.speedX = 0;
    if (myGameArea.key && myGameArea.key == 76) {butthead.speedX = 3; }
    butthead.newPos(); 
    butthead.update();

 }
function isWinner() {
 	if (beavis > myGameArea) {
 		alert("Beavis won!");
 	
 	}
}
