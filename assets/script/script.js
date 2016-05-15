$(document).ready(function() {
	$(window).scroll(function() {
	    var wScroll = $(this).scrollTop();

	    if (wScroll >= 400) {
	        $(".nav-bar").addClass("sticky-nav");
	    } else {
	        $(".nav-bar").removeClass("sticky-nav");
	    }
	});

	$("nav a").on("click", function(){
		$this = $(this);
		var anchorVal = $this.text().toLowerCase();
		if(anchorVal === "education") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
		} else if(anchorVal === "expertise") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
		} else if(anchorVal === "experience") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
		} else if(anchorVal === "project") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
		} else if(anchorVal === "contact") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
		} else {
			return false;
		}
	});

	$(".kebab-menu").on("click", function(){
		$("nav ul").slideToggle("fast");
	});
});
