var time = 0;
var bestTime;

function updateTime(){
  time++;
  $('#timeCounter').html('Total time: '+time.toString());
}

function resetTime(){
  time = 0;
  $('#timeCounter').html('Total time: '+time.toString());
}

function updateBestTime(){
  if (time < bestTime){
    bestTime = time;
    $('#bestTimeCounter').html('Best Time: '+bestTime.toString());
    //$('#instr').html('You did it!! Let\'s play again');
  }
}
