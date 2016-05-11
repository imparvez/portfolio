$(window).scroll(function(){
	
	var wScroll = $(this).scrollTop();
	var headerPosTop = $("header").position().top;
	console.log(wScroll);
	if(headerPosTop <= wScroll) {
		$("header").addClass("sticky-nav");
	} else {
		$("header").removeClass("sticky-nav");
	}
});