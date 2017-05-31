"use strict"
$(document).ready(function(){
    $('.tabs_menu a').click(function(link) {
        link.preventDefault();
        $('.tabs_menu .active').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).attr('href');
        $('.tab').not(tab).css({'display':'none'});
        $(tab).fadeIn(300);
    });
});
