$(document).ready(function(){
	
	var players = [];
	var markers = ["X","0"];
	players[0] = "X";
	players[1] = "O";
	var whoseTurn = 0;
	var scores =[0,0];
	var gameOver = false;
	

	var board = ['','','','','','','','',''];
	var wins = [
			//rows
			[0,1,2],
			[3,4,5],
			[6,7,8],
		
			//columns
			[0,3,6],
			[1,4,7],
			[2,5,8],
			
			//diag
			[2,4,6],
			[0,4,8]
		     ];

	
	// Playing the GAME
	$('#board li').on('click',function() {
		if(!gameOver){
			var positionClicked = $(this).attr("value");
		if (board[positionClicked] !== "")
			return;
		
		
		
		board[positionClicked] = players[whoseTurn];
			$(this).html("<span>" + board[positionClicked] + "</span>" );
				if(hasPlayerWon()){
					alert(  "Player " + players[whoseTurn] + " WINS!!" );
					gameOver = true;
					return;
		}
			if(!gameOver){toggle();
		
		}
		}
		
	});
	
	// Checks to see if player Won
	function hasPlayerWon() {
		for(var i = 0; i < wins.length; i++) {
			var winRow = wins[i];
		
			var value1 = board[winRow[0]];
			var value2 = board[winRow[1]];
			var value3 = board[winRow[2]];
			
			if(value1 === '' || value2 === '' || value3 === '')
				continue;
	
			
			if(value1 === value2 && value2 === value3) {
				return true;
			}
			
		}
		return false;
	}
	
	// Change between Players
	function toggle() {
		if (whoseTurn == 0) whoseTurn = 1;
		else whoseTurn = 0;
	}
	
	
	// RESET BOARD
	$('.reset').on("click", function(){
		location.reload()		    
		
		
	});
	
});


	
	




