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

function resetTime(){
  sec = 0;
  hsec = 0;
  $('#timeCounter').html(strf('Total time||   {}:{}',[sec,hsec]));
}

function updateBestTime(){
  $('#debug').html('in updateBestTime');
  var msg = ['Let\'s play again!'];

  var diff = sec+hsec/100 - bestTime;
  if (diff < 0){
    bestTime = sec+hsec/100;
    $('#bestTimeCounter').html(strf('Best time||   {}:{}',[sec,hsec]));

    msg.push('You set a new record!! ');
  } else if (diff < 10){
    msg.push('If only you were just a bit faster!! ');
  } else if (diff < 2){
    msg.push('SOOOOOO CLOOSE to a new record!! ');
  } else {
    msg.push('You did it!');
  }
  $('#instr').html(msg[1] + msg[0]);
}

function startTiming(){
  timeUpdater = setInterval(updateTime, 100);
}

function stopTiming(){
  //$('#debug').html('in stopTiming');
  clearTimeout(timeUpdater);
}
