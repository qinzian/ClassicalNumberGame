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
  $('#debug').html('in updateBestTime');
  var msg = ['<br>Let\'s play again!'];

  var diff = sec+hsec/100 - bestTime; // time in seconds
  if (diff < 0){
    bestTime = sec+hsec/100;
    $('#bestTimeCounter').html(strf('Best time||   {}:{}',[sec,hsec]));

    msg.push('You set a new record!! ');
  } else if (diff < 3){
    msg.push('SOOOOOO CLOOSE to a new record!! ');
  } else if (diff < 8){
    msg.push('If only you were bit faster!! ');
  } else if (diff < 15){
    msg.push('You did it!');
  } else {
    msg.push('oh come on man, u can do better, I believe in you!')
  }
  $('#instr').html('<br>'+msg[1] + msg[0]);
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
