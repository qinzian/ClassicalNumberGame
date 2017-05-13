$('#debug').html('started loading blockscript.js');

var width = 3;
var wIndices = range(width);
var height = 3;
var hIndices = range(height);

var blocks = []; // repr a width by height box
var block0index = 0;


for (var i = 0; i < width*height; i++) {
	blocks.push(new block(i));
	blocks[i].setLoc([parseInt(i/width),i%width]);
	$('#button'+i.toString()).html(blocks[i].getV().toString());
}


function switchAdjBlocks(s1,s2){
	var b1 = blocks[s1];
	var b2 = blocks[s2];
	var tmpB1 = [blocks[s1].getV()];

	if (b1.adjTo(b2)){ // are adjacent
		// switch their value, v
		b1.setV(b2.getV());
		b2.setV(tmpB1[0]);

		// switch labels on the buttons
		$('#button'+s1.toString()).html(blocks[s1].getV().toString());
		$('#button'+s2.toString()).html(blocks[s2].getV().toString());

		if (b1.getV() == 0){
			block0index = s1;
		} else if (b2.getV() == 0){
			block0index = s2;
		}
		$('#debug').html('block0index: '+block0index.toString());
	} else { // aren't adjacent
		$('#instr').html('please only switch adjacent blocks');
		$('#debug').html(strf('invalid switch b/w BUTTONS {}&{}; they\'re not adj',[s1,s2]));
	}
	refreshSelect();

	if (gaming){
		updateMoves();
		select(block0index);
	}
}

$('#debug').html('done loading blockscript.js');
