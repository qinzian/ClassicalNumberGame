/*
  state0 - intro
  state1 - default, nothing wrong
  state2 - invalid move: need to randomize
  state3 - invalid move: adj blocks only
  state4+  completion(s)
*/
function instrImg(){
  this.state = 0;
  this.instructions = ['Solve the puzzle by rearraging all of the pieces back to their original order',
                    '<br><br>~~~',
                    '<br>How about you press "Randomize" first',
                    '<br>wat u doin, pick adj blocks only, l2p zomgosh so trash',
                    'Wowie, a new record!',
                    'You can definitely set a new record ',
                    'You did it!',
                    'You can do better <br>I believe in you!',
                    'y u take so long'];
  //$('#instrImg')
  //$('#instr')

  this.setState = function(n){
    this.state = n;
    this.updateStateImg();
    this.updateInstruction();
  }
  this.updateInstruction = function(){
    if (this.state < 4){
      $('#instr').html(this.instructions[this.state]);
    } else {
      $('#instr').html('<br>'+this.instructions[this.state] +'<br>Let\'s play again!');
    }
  }

  this.updateStateImg = function(){
    $('#instrImg').attr('src',"instrPics/pic"+this.state+".png");
  }
}
var instructor = new instrImg();
