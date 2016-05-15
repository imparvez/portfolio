$(document).ready(function() {
	$(window).scroll(function() {
	    var wScroll = $(this).scrollTop();

	    if (wScroll >= 400) {
	        $(".nav-bar").addClass("sticky-nav");
	        $("section.education").css("padding-top", "75px");
	    } else {
	        $(".nav-bar").removeClass("sticky-nav");
	        $("section.education").css("padding-top", "0px");
	    }
	});

	$("nav a").on("click", function(){
		$this = $(this);
		var anchorVal = $this.text().toLowerCase();
		//console.log(anchorVal);
		if(anchorVal === "education") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
	    $('#'+ anchorVal +'').css("padding-top","75px");
		} else if(anchorVal === "expertise") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
	    $('#'+ anchorVal +'').css("padding-top","75px");
		} else if(anchorVal === "experience") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
	    $('#'+ anchorVal +'').css("padding-top","75px");
		} else if(anchorVal === "project") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
	    $('#'+ anchorVal +'').css("padding-top","75px");
		} else if(anchorVal === "contact") {
			$('html, body').animate({
	        scrollTop: $('#'+ anchorVal +'').offset().top
	    }, 500);
	    $('#'+ anchorVal +'').css("padding-top","75px");
		} else {
			return false;
		}
	})
});
