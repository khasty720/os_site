var scroll_to_speed = 1000;
var scroll_to_easing = 'easeOutQuint';	

/*** prevent hash jump ***/
if (location.hash) {          
	window.scrollTo(0, 0);
	setTimeout(function() {
		jQuery.scrollTo(jQuery(location.hash), scroll_to_speed, { easing : scroll_to_easing, offset : -jQuery('.navbar').outerHeight()+2+hash_jump_offset });
	}, 1);
} 

/*** external links ***/
$(document).on('click', '.external', function(){ jQuery(this).attr('target', '_blank');	});

/*** nav ***/
$('.left_rail ._nav a, .logo a').on('click', function(e){
	e.preventDefault();
	//console.log($('#section_' + $(this).data('scrollto')));
	$.scrollTo($('#section_' + $(this).data('scrollto')), scroll_to_speed, { easing : scroll_to_easing });
});

/* ***************************************************************************************** */
/* Sections
/* ***************************************************************************************** */
function set_sections(){
	var window_height = $(window).height();
	var window_width = $(window).width();
	
	$('section').each(function(){
		$(this).css('min-height', window_height);
	});
	
	/*** home ***/
	var padding_top_home = (window_height - $('.quote').outerHeight()) / 2;
	$('section.home').css('padding-top', padding_top_home);
	
	/*** portfilio ***/
	$('.portfolio_item').each(function(){
		var p = $(this);
		p.height(window_height).width(window_width);
		p.css('background', 'url("' + p.data('img') + '") no-repeat center center fixed').css('background-size', 'cover');
	});
	show_portfolio_item(0);

}

$( window ).resize(function() {
	set_sections();
});

set_sections();

/* ***************************************************************************************** */
/* Portfolio
/* ***************************************************************************************** */
/*** show item ***/
function show_portfolio_item(i){
	$('.portfolio_outer').data('i', i);
	$('.portfolio_item').hide().eq(i).fadeIn();
}

/*** next button ***/
$(document).on('click', '.portfolio_outer ._next', function(e){
	e.preventDefault();
	var i = $('.portfolio_outer').data('i');
	var new_i = i == parseInt($('.portfolio_item').length) - 1 ? 0 : i+1;
	show_portfolio_item(new_i);
});

/*** prev button ***/
$(document).on('click', '.portfolio_outer ._prev', function(e){
	e.preventDefault();
	var i = $('.portfolio_outer').data('i');
	var new_i = i == 0 ? parseInt($('.portfolio_item').length) - 1 : i-1;
	show_portfolio_item(new_i);	
});