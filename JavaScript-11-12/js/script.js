(function() {
  'use strict';
var questionnaire = {
//	questionnaire: {
		name: 'Безпрозванный Сергей Александрович',
		foto: ['js-jquery.jpg', 'python-javascript.jpg', 'python-js-php-mysql-html-css.jpg'],
		prof: 'SEO специалист',
		tell: '+380 (67)357-39-09',
		vk: 'ya_boss',
		feedback: 'Мне нравятся курсы фронденда от GOIT, качественно подобран программа обучения, менторы помогают во всех вопросах. Обязательно буду рекомендовать курсы от GOIT знакомым ',
		question: ['Хочу научиться качественно делать верстку сайтов','Выучить JS','Использование знаний для создания собственных проектов']
		
//	},
};
var container = document.getElementById('counter');



var html = document.getElementById('questiontest').textContent,
 template = _.template(html, {data: questionnaire});
   container.innerHTML += template( questionnaire);


})();
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