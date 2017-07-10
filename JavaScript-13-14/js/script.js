'use strict';

var questions=[
{    
	"idQ": 0,
    "text": "Тег Title – что это такое?:",
    "answers": ["Title содержит информация, которую пользователь видит в заголовке браузера", 
				"Title содержит информация, которую пользователь видит в результате поиска", 
				"Title содержит информация, которую пользователь видит в заголовке браузера и в результате поиска"],
    "correctAnswer": 2 
},
{
    "idQ": 1,
	"text": "Не правильно составленный title",
    "answers": ["Title должен повторять H1",
          		"Основной запрос в title использовать 1 раз",
          		"Title должен быть 100 % уникальным"],
    "correctAnswer": 0
},
{
    "idQ": 2,
	"text": "Для чего используется ALT?",
    "answers": ["Прописывается в коде сайта, чтобы поисковые роботы могли лучше индексировать страницы",
          		"Прописывается на сайте, чтобы поисковые системы знали, что текст оптимизирован",
          		"Прописывается к картинкам, чтобы поисковые роботы могли их прочитать"],
    "correctAnswer": 2
},
];



localStorage.setItem('questions', JSON.stringify(questions));
localStorage.getItem('questions');




//var html = document.getElementById('questionseo').textContent.trim();
//var counter = document.getElementById("counter");
//var compiled = _.template(tmpl);
//
//
//	for (var i = 0; i < questions.length; i++) {
//	counter.innerHTML += compiled(questions[i].answers);
//}
//	
var correctQ = 0;
//var incorrect = 0;
var myAnswers = new Array;
var html = document.getElementById("questionseo").textContent.trim();
var counter = document.getElementById("counter");
var compiled = _.template(html);
for (var i = 0; i < questions.length; i++) {
	counter.innerHTML += compiled(questions[i]);
}

function optionAnswer(name,id){
	myAnswers[name] = id;
}
myAnswers = [];
var testResults = [];


//optionAnswer(0,3);
function checkingResult(){
	 
	for (var i =0; i < myAnswers.length ;i++){
		
		console.log('Правильній ответ: ' + questions[i].correctAnswer);
		if(myAnswers[i] == questions[i].correctAnswer){
			correctQ += 1;
			
//			console.log("Ответ: " + questions[i].text +  " Верный");
		}
		
	}
	
	
	alert("Результаты теста: \n Вы ответили правильно на  "+ correctQ+ " Вопрос");
	clearForm("questionTestSeo");
}
function clearForm(name) {
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked){
        f.elements[i].checked = false;
}
}
}