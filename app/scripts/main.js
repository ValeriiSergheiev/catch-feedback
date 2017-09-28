$(document).ready(function() {
	
//hamburgers
$('.hamburger').click(function() {
	$(this).toggleClass('is-active');
});

//Sliders
$('.main-slider').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	arrows: false,
	fade: true,
	speed: 3000,
	autoplay: true,
	pauseOnHover: false,
	autoplaySpeed: 6000
});

//sidebar menu 
/*$('.sidebar-btn button').click(function() {
	//$('#sidenav').width(370);
	$('.sidenav').animate({width: "toggle"},500);
	//$('body').css('background-color', 'rgba(0, 0, 0, 0.6)');
	$('header').css('right', '370px');
});*/

});