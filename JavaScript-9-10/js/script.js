"use strict"
$(function() {
	"use strict"
    $('.jcarousel').jcarousel({
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

$(document).ready(function() {
  $(".js-example-basic-single").select2({
	  width: "200px"

  });
	
	$('input').iCheck({
    checkboxClass: 'icheckbox_minimal-blue',
    radioClass: 'iradio_minimal-blue',
    increaseArea: '20%' // optional
  });
	
	
});
//$(document).ready(function(){
//$( ".sub-menu" ).mouseover(function() {
//	
//  $( "li").animate({
//    opacity: 0.9,
//   backgroundColor:"#F00",
//  }, "stop", function() {
//    // Animation complete.
//  });
//}).mouseout(function() {
//  $( "li" ).animate({
//    opacity: 1.0,
//   backgroundColor:"#0CF",
//  }, "stop", function() {
//    // Animation complete.
//	  
//   
//  });
//});
//});
//$(document).ready(function(){
////Плавное изменение цвета фона при наведении мыши
//$(".head-menu>li").hover(
//  function () {
//	$(this).stop().animate({
//	backgroundColor:"#03C"
//     }, 800 );
//  });
//	$(".head-menu>li").mouseout(function() {
//	$(this).stop().animate({
//	backgroundColor:"#0CF"
//	}, 800 );
//		
//});
//	
//	$(".sub-menu>li").mouseover(
//  function () {
//	$(this).stop().animate({
//	backgroundColor:"#03C"
//
//     }, 800 );
//  });
//	$(".sub-menu>li").mouseout(function() {
//	$(this).stop().animate({
//	backgroundColor:"#0CF"
//
//     }, 800 );
//
//});
//	
//
//
//	 });

$(function () {
  let $links = $('.head-menu>li>a'),
      $dropdown = $('.dropdown>li>a'),
      $sublinks = $('.sub-menu>li>a');

  $links.hover(function () {  // in
    $(this).stop().animate({
      backgroundColor: '#03C',
	color: '#fff',
    }, 300);
  }, function () {  // out
    $(this).stop().animate({
      backgroundColor: '#0CF',
		color: '#000',
    }, 300);
  });

  $dropdown.hover(function () { // in
    $(this).children('.sub-menu').stop().animate({
      height: '180px',
//	weight: '150px',
		backgroundColor: '#03C',
	color: '#fff',
	
    }, 300);
  }, function () {  // out
    $(this).children('.sub-menu').stop().animate({
      height: '180px',
		backgroundColor: '#03C',
	color: '#fff',
    }, 300);
  });

  $sublinks.hover(function () { // in
    $(this).stop().animate({
      backgroundColor: '#03C',
      color: '#fff',
    }, 300);
	
  }, function () {  // out
    $(this).stop().animate({
      backgroundColor: '#0CF',
      color: '#000'
    }, 300);
  });

});


