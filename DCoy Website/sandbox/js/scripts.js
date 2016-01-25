$(document).ready(function(){

	$(".Photo").on("click",function(){
		var idName=($(this).attr("id"));
		$(".Bio").hide();
		$(".Bio."+idName).fadeIn();
	});
    $("#owl-demo").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:false
	});
});