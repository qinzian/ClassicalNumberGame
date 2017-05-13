var moves = 0;
var bestMove;

function updateMoves(){
  moves++;
  $('#movesCounter').html('Total Moves: '+moves.toString());
}

function resetMoves(){
  moves = 0;
  $('#movesCounter').html('Total Moves: '+moves.toString());
}

function updateBestMove(newBest){
  if (newBest < bestMove){
    bestMove = newBest;
    $('#bestMovesCounter').html('Best Move: '+bestMove.toString());
    //$('#instr').html('You did it!! Let\'s play again');
  }
}
