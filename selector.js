$('#debug').html('started loading selector.js');

var gaming = false;
var select1 = -1;
var select2 = -1;
var firstSelect = true;

function select(item){
	if (gaming){
		firstSelect = blocks[item].getV() == 0;
	}

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
	$('#select1').html('block');
	$('#select2').html('block');
	select1 = -1;
	select2 = -1;
	firstSelect = true;
}
$('#debug').html('done loading selector.js');
