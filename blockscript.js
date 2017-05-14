$('#debug').html('started loading blockscript.js');

var width = 3;
var wIndices = range(width);
var height = 3;
var hIndices = range(height);

var blocks = []; // repr a width by height box
var block0index = 0;

var select1 = -1;


for (var i = 0; i < width*height; i++) {
	blocks.push(new block(i));
	blocks[i].setLoc([parseInt(i/width),i%width]);
	$('#button'+i.toString()).html(blocks[i].getLabel().toString());
}


function switchAdjBlocks(s){
	var b1 = blocks[s];
	var b2 = blocks[block0index];
	var tmpB1 = blocks[s].getV();

	if (b1.adjTo(b2)){ // are adjacent
		// switch their value, v
		b1.setV(b2.getV());
		b2.setV(tmpB1);

		// switch labels on the buttons
		$('#button'+s.toString()).html(b1.getLabel().toString());
		$('#button'+block0index.toString()).html(b2.getLabel().toString());

		block0index = s;
		$('#debug').html('block0index is now:'+block0index.toString());
		$('#instr').html('~~~');

	} else { // aren't adjacent
		$('#instr').html('please only switch adjacent blocks');
		$('#debug').html(strf('invalid switch b/w BUTTONS {}&{}; they\'re not adj',[s1,s2]));
	}
	refreshSelect();
}

function select(item){
	select1 = item;
	$('#select1').html("block"+blocks[item].getV().toString());
}

function refreshSelect(){
	$('#select1').html('block');
	select1 = -1;
}
$('#debug').html('done loading blockscript.js');
