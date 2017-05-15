$('#debug').html('started loading script.js');

function b1(){
	switchAdjBlocks(1);
}
function b2(){
	switchAdjBlocks(2);
}
function b3(){
	switchAdjBlocks(3);
}
function b4(){
	switchAdjBlocks(4);
}
function b5(){
	switchAdjBlocks(5);
}
function b6(){
	switchAdjBlocks(6);
}
function b7(){
	switchAdjBlocks(7);
}
function b8(){
	switchAdjBlocks(8);
}
function b0(){
	$('#debug').html('clicked img0');
	switchAdjBlocks(0);
}

function db0(){
	$('#blockImgInfo').html(blocks[0]);
}
function db1(){
	$('#blockImgInfo').html(blocks[1]);
}
function db2(){
	$('#blockImgInfo').html(blocks[0]);
}
function db3(){
	$('#blockImgInfo').html(blocks[0]);
}
function db4(){
	$('#blockImgInfo').html(blocks[0]);
}
function db5(){
	$('#blockImgInfo').html(blocks[0]);
}
function db6(){
	$('#blockImgInfo').html(blocks[0]);
}
function db7(){
	$('#blockImgInfo').html(blocks[0]);
}
function db8(){
	$('#blockImgInfo').html(blocks[0]);
}

function toggleDebugP(){
	$('#debugInfo').children().toggle();
}
//toggleDebugP();

$('#debug').html('done loading script.js');
