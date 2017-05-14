$('#debug').html('started loading block.js');

function block(n){
  this.loc = [-1,-1];
  this.v = n;

  this.setV = function(n){
    this.v = n;
  }
  this.getV = function(){
    return this.v;
  }
  this.getLabel = function(){
    return this.v;// == 0? '':this.v;
  }
  this.setLoc = function(u){
    this.loc = u;
  }
  this.getLoc = function(){
    return this.loc;
  }
  this.setC = function(u){
    this.loc[1] = u;
  }
  this.setR = function(u){
    this.loc[0] = u;
  }

  this.toString = function(){
    return 'v = '+this.v+'    loc(' + this.loc.toString() + ')';
  }

  this.adjTo = function(other){
    var d = Math.pow(Math.pow((this.loc[0]-other.loc[0]),2) + Math.pow((this.loc[1]-other.loc[1]),2),0.5);
    return d==1;
  }
}
$('#debug').html('done loading block.js');
