var sec = -1;
var hsec = 0;
var bestTime = 300.0;
var timeUpdater;

function updateTime(){
  hsec++;
  if (hsec == 10){
    sec += 1;
    hsec = 0;
  }
  $('#timeCounter').html(strf('Total time||   {}:{}',[sec,hsec]));
}

function updateBestTime(){
  var diff = sec+hsec/100 - bestTime; // time in seconds
  if (diff < 0){
    bestTime = sec+hsec/100;
    $('#bestTimeCounter').html(strf('Best time||   {}:{}',[sec,hsec]));
    instructor.setState(4);

  } else if (diff < 3){   // close
    instructor.setState(5);
  } else if (diff < 10){  // normal
    instructor.setState(6);
  } else if (diff < 15){  // bad
    instructor.setState(7);
  } else {                // rly bad 
    instructor.setState(8);
  }
}

function startTiming(){
  timeUpdater = setInterval(updateTime, 100);
}

function stopTiming(){
  //$('#debug').html('in stopTiming');
  clearInterval(timeUpdater);
}

function resetTime(){
  stopTiming();
  sec = 0;
  hsec = 0;
  $('#timeCounter').html(strf('Total time||   {}:{}',[sec,hsec]));
}
