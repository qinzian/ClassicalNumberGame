/*
  state0 - intro
  state1 - default, nothing wrong
  state2 - invalid move: need to randomize
  state3 - invalid move: adj blocks only
  state4+  completion(s)
*/
function instrImg(){
  this.state = 0;
  this.instructions = ['Solve the puzzle by putting the numbers in continuoursly ascending order',
                    '<br><br>~~~',
                    '<br>How about you press "Randomize" first',
                    '<br>wat u doin, pick adj blocks only, l2p zomgosh so trash',
                    'Wowie, a new record!',
                    'You can definitely set a new record ',
                    'You did it!',
                    'You can do better <br>I believe in you!',
                    'y u take so long',
                    '<br>mother of god <br>how were you so fast.... '];
  //$('#instrImg')
  //$('#instr')

  this.setState = function(n){
    this.state = n;
    this.updateStateImg();
    this.updateInstruction();
  }
  this.updateInstruction = function(){
    if (range(4,9).indexOf(this.state) !== -1){
      $('#instr').html('<br>'+this.instructions[this.state] +'<br>Let\'s play again!');
    } else {
      $('#instr').html(this.instructions[this.state]);
    }
  }

  this.updateStateImg = function(){
    $('#instrImg').attr('src',"instrPics/pic"+this.state+".png");
  }
}
var instructor = new instrImg();
