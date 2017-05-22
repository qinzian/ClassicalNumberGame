//$('#debug').html('started loading blockscript.js');

var width = 3;
var wIndices = range(width);
var height = 3;
var hIndices = range(height);

var blocks = []; // repr a width by height box
var block0index = 0;

var gaming = false;
var generating = false;

// load img for each block
for (var i = 0; i < width*height; i++) {
	blocks.push(new block(i));
	blocks[i].setLoc([parseInt(i/width),i%width]);
	$('#button'+i.toString()).attr('src',"numPics/num"+i+".png"); // $().src = path; doesn't work
}


function switchAdjBlocks(s){
	if (!gaming && !generating){
		instructor.setState(2);
		return;
	}

	var b1 = blocks[s];
	var b0 = blocks[block0index];

	if (b1.adjTo(b0)){ // are adjacent
		// switch their value, v, and switch labels on the buttons
		b0.setV(b1.getV());
		$('#button'+block0index.toString()).attr('src',"numPics/num"+b1.getV().toString()+".png");

		b1.setV(0);
		$('#button'+s.toString()).attr('src',"numPics/num0.png");


		block0index = s;
		//$('#debug').html('block0 at index:'+block0index.toString());
		instructor.setState(1);

		if (gaming){
			checkWinCondition();
		}

	} else { // aren't adjacent
		instructor.setState(3);
		//$('#debug').html(strf('invalid switch b/w blocks{}&{}',[b1.getV(),b0.getV()]));
	}
}

function checkWinCondition(){
	var solved = false;

	if (blocks[0].getV() == 0){
		for (var i = 1; i < blocks.length; i++) {
			if(blocks[i].getV() !== i){
				return;
			}
		}
		solved = true;
	} else if (blocks[8].getV() == 0){
		for (var i = 0; i < blocks.length-1; i++) {
			if(blocks[i].getV() !== i+1){
				return;
			}
		}
		solved = true;
	}

	if (!solved){
		return;
	}
	// solved the puzzle!
	stopTiming();
	updateBestTime();
	gaming = false;
	//$('#debug').html('gaming = '+gaming.toString());
}
//$('#debug').html('done loading blockscript.js');
