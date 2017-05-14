$('#debug').html('started loading selector.js');

var select1 = -1;

function select(item){
	select1 = item;
	$('#select1').html("block"+blocks[item].getV().toString());
}

function refreshSelect(){
	$('#select1').html('block');
	select1 = -1;
}
$('#debug').html('done loading selector.js');
