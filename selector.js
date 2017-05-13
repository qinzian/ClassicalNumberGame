$('#debug').html('started loading selector.js');

var select1 = -1;
var select2 = -1;
var firstSelect = true;

function select(item){
	if (firstSelect){
		select1 = item;
		$('#select1').html("block"+blocks[item].getV().toString());

		firstSelect = false;
	}	else {	//1 box is already selected
		select2 = item;
		$('#select2').html("block"+blocks[item].getV().toString());

		firstSelect = true;
	}
}

function refreshSelect(){
	$('#select1').html('');
	$('#select2').html('');
	select1 = -1;
	select2 = -1;
	firstSelect = true;
}
$('#debug').html('done loading selector.js');
