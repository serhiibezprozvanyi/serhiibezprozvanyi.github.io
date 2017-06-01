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
function simple_tooltip(name){
$('input').each(function(i){
$("fieldset").append("<p class='"+name+"' id='"+name+i+"'>"+$(this).attr('title')+"</p>");
var my_tooltip = $("#"+name+i);

$(this).removeAttr("title").focus(function(){
my_tooltip.css({opacity:0.8, display:"block"}).fadeIn(400);
}).focusout(function(){
my_tooltip.fadeOut(400);
});
});
}
$(document).ready(function(){
simple_tooltip("tooltip");
});
