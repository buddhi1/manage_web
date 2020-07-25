$(document).ready(function () {
	$("#teaching-content").hide();
	$(".show_hide").on("click", function () {
        $('#teaching-content').slideToggle(900);   	
	});
    
	$("#pub-shrink").hide();
	$(".show_hide2").on("click", function () {
        $('#pub-shrink').slideToggle(900);   	
	});
});