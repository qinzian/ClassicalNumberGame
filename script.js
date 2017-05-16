$('#debug').html('started loading script.js');

function mousedOver(n){
	$('#blockImgInfo').html(blocks[n].toString());
}

function toggleDebugP(){
	$('#debugInfo').children().toggle();
}
toggleDebugP(); // hide debugZone on load

instructor.setState(0);

$('#debug').html('done loading script.js');
