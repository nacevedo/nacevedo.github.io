"use strict"

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

$('#name').hide().fadeIn(5000);

$('#abajoname').hide().fadeIn(10000)





$('.skills-button').on('click', function() {
		$('.skills').toggle();
	});


$( document ).click(function() {
  $( "#toggle" ).toggle( "explode" );
});


$('.tweets-button').on('click', function() {
		$('.tweets').toggle();
	});
	

