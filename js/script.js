$(document).ready(function(){
//when link clicked details pop up

	$(".Navigation").on("click",function(){
		var idName=($(this).attr("id"));
		//hide visible Details
		$(".Details").hide();
		//show Details
		$(".Details."+idName).fadeIn();
	});

});