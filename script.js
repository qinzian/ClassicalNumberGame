$('#debug').html('started loading script.js');

function mousedOver(n){
	$('#blockImgInfo').html(blocks[n].toString());
}

function toggleDebugP(){
	$('#debugInfo').children().toggle();
}
//toggleDebugP();

$('#debug').html('done loading script.js');
