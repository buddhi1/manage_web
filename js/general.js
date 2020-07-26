$(document).ready(function () {
	$("#teaching-content").hide();
    $(".show_hide").on("click", function () {
    	toggleSlider('.show_hide', '#teaching-content');
    });

    $("#teaching-content").on("click", function () {
    	toggleSlider('.show_hide', '#teaching-content');
    });

	$("#pub-shrink").hide();
	$(".show_hide2").on("click", function () {
    	toggleSlider('.show_hide2', '#pub-shrink'); 	
	});

	$("#pub-shrink").on("click", function () {
    	toggleSlider('.show_hide', '#pub-shrink');
    });

	$(".nav-link").on("click", function () {
		$('.nav-link').removeClass('nav-link-active');
        $(this).addClass('nav-link-active');   	
	});

	$(".to-top-icon").on("click", function () {
		$('.nav-link').removeClass('nav-link-active'); 	
	});
});

var toggleSlider = function(clk, chg) {
	txt = $(clk).text();
	if (txt == 'Read More') {
		$(clk).text('Read Less');
	} else {
		$(clk).text('Read More');
	}
    $(chg).slideToggle(900); 
}