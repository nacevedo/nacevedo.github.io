"use strict"

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
    return false;
});

$('#name').hide().fadeIn(5000);

$('#abajoname').hide().fadeIn(10000)

/**
twttr.widgets.createTimeline(
  {
    sourceType: "profile",
    screenName: "TwitterDev"
  },
  document.getElementById("container")
);
**/

$('.skills').on('click', function() {
		$('.skills').toggle();
	});