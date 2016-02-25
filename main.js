
var controller;
var	EMPTY = "&nbsp;";
var	boxes = [];
var	turn;
var	score;
var	moves;
var table;
var board;
var xArray = [];
var oArray = [];

document.addEventListener('DOMContentLoaded', init);
function init() {
	document.querySelector('#newGame').addEventListener('click', createBoard);
	createBoard();
}

function createBoard() {
	controller = document.getElementById('gameSize').value;
	var cont = document.getElementById('container');
		if(board !== undefined) {
			while (cont.firstChild) {
  		cont.removeChild(cont.firstChild);
			};
		}

	board = document.createElement('table');
  board.setAttribute("border", 1);
  board.setAttribute("cellspacing", 0);
  table = document.getElementsByTagName('table');

	var identifier = 1;
	for (var i = 0; i < controller; i++) {
		var row = document.createElement('tr');
		board.appendChild(row);
		for (var j = 0; j < controller; j++) {
      var cell = document.createElement('td');
      cell.setAttribute('height', 120);
      cell.setAttribute('width', 120);
      cell.setAttribute('align', 'center');
      cell.setAttribute('valign', 'center');
      cell.setAttribute("id", identifier);
			cell.classList.add('col' + j,'row' + i);
			if (i == j) {
				cell.classList.add('diagonal0');
			}
			if (j == controller - i - 1) {
				cell.classList.add('diagonal1');
			}
			cell.identifier = identifier;
			cell.addEventListener("click", set);
			row.appendChild(cell);
			boxes.push(cell);
			console.log('cellID: ', cell.identifier);
			identifier ++;
		}
	}
	document.getElementById("container").appendChild(board);
	startNewGame();
}

function startNewGame() {
	score = {
		"X": 0,
		"O": 0
	};
	xArray = [];
	oArray = [];
	moves = 0;
	setFirstPlayer();
	boxes.forEach(function (square) {
		square.innerHTML = EMPTY;
	});
}

function setFirstPlayer () {
	var getRandom = Math.floor((Math.random() * 100) + 1);
	if(getRandom < 50) {
		turn = "X";
	} else {
		turn = "O";
	}
	document.getElementById('turn').innerHTML = turn;
}

function set() {
	if (this.innerHTML !== EMPTY) {
		return;
	}
	this.innerHTML = turn;
	moves += 1;
	score[turn]++;
	if(turn == "X") {
		xArray.push(this.id);
	} else if (turn == "O") {
		oArray.push(this.id);
	}
	turn = turn === "X" ? "O" : "X";
	
	console.log("Xs: ", xArray);
	console.log("Os: ", oArray);
	winConditions();
	document.getElementById('turn').textContent = turn;
	}

function winConditions () {
	if (controller == 3){
		win3(xArray, oArray);
	} else if (controller == 4) {
		win4(xArray, oArray);
	} else if (controller == 5) {
		win5(xArray, oArray);
	}
}

function win3 (x, o) {
	var w = [["1", "5", "9"],["3", "5", "7"],["1", "2", "3"],["4", "5", "6"],["7", "8", "9"],["1", "4", "7"],["2", "5", "8"],["3", "6", "9"]];

	checkForXWin(x);
	checkForOWin(o);

	function checkForXWin(movesArray){

	 for (i = 0; i < w.length; i++) {

	   winCounter = 0;

	   for (var j = 0; j < w[i].length; j++) {

	     if(movesArray.indexOf(w[i][j]) !== -1){
	       winCounter++;
	     }

	     if(winCounter == controller){
	       alert('Game over, X wins!');
	     }
	   }
	 }
	}

	function checkForOWin(movesArray){

	 for (i = 0; i < w.length; i++) {

	   winCounter = 0;

	   for (var j = 0; j < w[i].length; j++) {

	     if(movesArray.indexOf(w[i][j]) !== -1){
	       winCounter++;
	     }

	     if(winCounter == controller){
	       alert('Game over, O wins!');
	     }
	   }
	 }
	}
}

function win4 (x, o) {
	var w = [["1", "6", "11", "16"],["4", "7", "10", "13"],["1", "2", "3", "4"],["5", "6", "7", "8"],["9", "10", "11", "12"],["13", "14", "15", "16"],["1", "5", "9", "13"],["2", "6", "10", "14"],["3", "7", "11", "15"], ["4", "8", "12", "16"]];

	checkForXWin(x);
	checkForOWin(o);

	function checkForXWin(movesArray){

	 for (i = 0; i < w.length; i++) {

	   winCounter = 0;

	   for (var j = 0; j < w[i].length; j++) {

	     if(movesArray.indexOf(w[i][j]) !== -1){
	       winCounter++;
	     }

	     if(winCounter == controller){
	       alert('Game over, X wins!');
	     }
	   }
	 }
	}

	function checkForOWin(movesArray){

	 for (i = 0; i < w.length; i++) {

	   winCounter = 0;

	   for (var j = 0; j < w[i].length; j++) {

	     if(movesArray.indexOf(w[i][j]) !== -1){
	       winCounter++;
	     }

	     if(winCounter == controller){
	       alert('Game over, O wins!');
	     }
	   }
	 }
	}
}

function win5 (x, o) {
	var w = [["1", "7", "13", "19", "25"],["5", "9", "13", "17", "21"],["1", "2", "3", "4", "5"],["6", "7", "8", "9", "10"],["11", "12", "13", "14", "15"],["16", "17", "18", "19", "20"],["21", "22", "23", "24", "25"],["1", "6", "11", "16", "21"],["2", "7", "12", "17", "22"],["3", "8", "13", "18", "23"],["4", "9", "14", "19", "24"],["5", "10", "15", "20", "25"]];

	checkForXWin(x);
	checkForOWin(o);

	function checkForXWin(movesArray){

	 for (i = 0; i < w.length; i++) {

	   winCounter = 0;

	   for (var j = 0; j < w[i].length; j++) {

	     if(movesArray.indexOf(w[i][j]) !== -1){
	       winCounter++;
	     }

	     if(winCounter == controller){
	       alert('Game over, X wins!');
	     }
	   }
	 }
	}

	function checkForOWin(movesArray){

	 for (i = 0; i < w.length; i++) {

	   winCounter = 0;

	   for (var j = 0; j < w[i].length; j++) {

	     if(movesArray.indexOf(w[i][j]) !== -1){
	       winCounter++;
	     }

	     if(winCounter == controller){
	       alert('Game over, O wins!');
	     }
	   }
	 }
	}
}




























