/*
  state1 - state1: default, nothing wrong
  state2 - invalid moves / error
  state3 - completion
  state4 - new record
*/
function instrImg(){
  this.state = 1;
  this.animation;
  this.frameNum = 0;
  //$('#instrImg')
  //$('#instr')

  this.setState = function(n){
    this.state = n;
    updateImg();
  }

  this.updateImg = function(){
    $('#instrImg').attr('src',"instrPics/state"+this.state.toString()+".png");
  }

  this.startAnimation = function(){
    this.animation = setInterval(nextFrame, 1000);
  }

  this.stopAnimation = function(){
    clearInterval(animation);
  }

  this.nextFrame = function(){
    $('#debug').html('animating');
    if (frameNum == 0){
      framNum = 1;
      $('#instrImg').rotate(10);
    } else if (frameNum == 1){
      frameNum = -1;
      $('#instrImg').rotate(-20);
    } else {
      $('#instrImg').rotate(10);

      if (Math.random() < 0.15){
        frameNum = 0;
      }
    }
  }
  
}
