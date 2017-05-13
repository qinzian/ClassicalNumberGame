var moves = 0;

function updateMoves(){
  moves++;
  $('#movesCounter').html('Total Moves: '+moves.toString());
}

function resetMoves(){
  moves = 0;
  $('#movesCounter').html('Total Moves: '+moves.toString());
}
