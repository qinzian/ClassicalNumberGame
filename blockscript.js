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
	$('#button'+i.toString()).attr('src',"numPics/num"+i+".png"); // $().src = path; doesn't work
}


function switchAdjBlocks(s){
	var b1 = blocks[s];
	var b2 = blocks[block0index];

	if (b1.adjTo(b2)){ // are adjacent
		// switch their value, v
		b2.setV(b1.getV());
		b1.setV(0);

		// switch labels on the buttons
		$('#button'+block0index.toString()).attr('src',"numPics/num"+b1.getV().toString()+".png");
		$('#button'+s.toString()).attr('src',"numPics/num0.png");


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
