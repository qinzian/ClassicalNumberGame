$('#debug').html('started loading script.js');

function b1(){ //clicked button
	$('#debug').html(blocks[1].toString());
	select(1);
}
function b2(){ //clicked button
	$('#debug').html(blocks[2].toString());
	select(2);
}
function b3(){ //clicked button
	$('#debug').html(blocks[3].toString());
	select(3);
}
function b4(){ //clicked button
	$('#debug').html(blocks[4].toString());
	select(4);
}
function b5(){ //clicked button
	$('#debug').html(blocks[5].toString());
	select(5);
}
function b6(){ //clicked button
	$('#debug').html(blocks[6].toString());
	select(6);
}
function b7(){ //clicked button
	$('#debug').html(blocks[7].toString());
	select(7);
}
function b8(){ //clicked button
	$('#debug').html(blocks[8].toString());
	select(8);
}
function b0(){ //clicked button
	$('#debug').html(blocks[0].toString());
	select(0);
}

$('#debug').hide();
$('#mousePos').hide();
function toggleDebugP(){
	$('#debug').toggle();
	$('#mousePos').toggle();
}



function switchButton(){
	$('#debug').html('clicked switch button');

	$('#output').html(' ');
	if (select1 == -1 || select2 == -1){
		$('#output').html('invalid switch, please select two blocks');
		refreshSelect();
	} else {
		switchAdjBlocks(select1,select2);
	}
	if (gaming && checkWinCondition()){
		$('#instr').html('You did it!! Let\'s play again!');
		gaming = false;
	}
}

function checkWinCondition(){
	for (var i = 0; i < blocks.length; i++) {
		if(blocks[i].getV() !== i){
			return false;
		}
	}
	return true;
}

$('#debug').html('done loading script.js');
