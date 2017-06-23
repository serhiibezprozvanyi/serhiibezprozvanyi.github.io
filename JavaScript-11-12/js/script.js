

(function() {
  'use strict';
var questionnaire = {
//	questionnaire: {
		name: 'Безпрозванный Сергей Александрович',
		foto: ['1.jpg', '2.jpg', '3.png','4.png','5.png','6.png','7.jpg','8.jpg','9.jpg','10.png','11.png','11.png','13.png','14.png','15.png'],
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


