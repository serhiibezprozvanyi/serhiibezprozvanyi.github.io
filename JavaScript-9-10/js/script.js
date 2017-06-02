
$(function() {
	"use strict"
    $('.jcarousel').jcarousel({
		center: true,
         animation: {
        duration: 800,
        easing:   'linear',
        complete: function() {
        }
		
    }
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });
});