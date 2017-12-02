$(document).ready(function(){
	$("#fadeIn").click(function(){
		$("#div1").slideUp();
		$("#div2").slideUp("slow");
		$("#div3").slideUp(500);
	});
	$("#fadeOut").click(function(){
		$("#div1").slideDown();
		$("#div2").slideDown("slow");
		$("#div3").slideDown(500);
	});
	$("#fadeToggle").click(function(){
		$("#div1").slideToggle();
		$("#div2").slideToggle("slow");
		$("#div3").slideToggle(500);
	});

});