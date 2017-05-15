$('#debug').html('started loading script.js');

var gaming = false;


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

function toggleDebugP(){
	$('#debugInfo').children().toggle();
}
//toggleDebugP();

$('#switchButton').disabled = true;
function startGaming(){
	$('#switchButton').disabled = false;
}


function switchButton(){
	$('#debug').html('clicked switch button');

	if (!gaming){ // switching if not gaming
		return;
	}

	if (select1 == -1){
		$('#instr').html('please select a block');
		$('#debug').html('select1 == -1');
	} else {
		switchAdjBlocks(select1);
		if (checkWinCondition()){
			stopTiming();
			updateBestTime();
			gaming = false;
			$('#debug').html('gaming = '+gaming.toString());
		}
	}

	refreshSelect();
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
