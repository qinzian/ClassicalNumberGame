$('#debug').html('started loading generator.js');
var block0adj = [];
var possLoc = [];
var randomIter = 100;

function setRandomizeIteration(){
	var newIterAmt = parseInt(prompt("Amt(Iterations) when randomizing",randomIter));
	if (typeof newIterAmt == "number"){
		if (newIterAmt > 0){
			randomIter = newIterAmt;
			alert("Randomize() will perform "+randomIter+" swaps");
		}
	}
}

function randomize(){
  $('#debug').html('clicked randomize button');
  randomizeInit();

  var adjIndex;
  for (var i = 0; i <          randomIter      ; i++) {
    updateBlock0adj();
    adjIndex = Math.floor((Math.random()*block0adj.length)); // random block in block0adj[]

    switchAdjBlocks(block0adj[adjIndex]);
  }

  generating = false;
  gaming = true;
  $('#debug').html(block0.getLoc().toString());
}

function updateBlock0adj(){
  $('#debug').html('in updateBlock0adj');
  var block0 = blocks[block0index];

  block0adj = [];
  possLoc = [];
  //update u d l r sides of block0, nullBlock if block dne at the loc
  var currC = block0.getLoc()[1];
  var currR = block0.getLoc()[0];
  possLoc.push([currR-1,currC]);
  possLoc.push([currR+1,currC]);
  possLoc.push([currR,currC-1]);
  possLoc.push([currR,currC+1]);

  // get rid of null loc
  var loc;
  for (var i = 0; i < possLoc.length; i++) {
    loc = possLoc[i];

    if (hIndices.indexOf(loc[0]) !== -1 && wIndices.indexOf(loc[1]) !== -1){
      block0adj.push(loc[0]*width + loc[1]); // add in the blockIndex of loc
    }
  }
  //$('#debug').html(block0adj.toString());
}

function randomizeInit(){
  generating = true;
  gaming = false;
  resetTime();
  startTiming();
}
$('#debug').html('done loading generator.js');
