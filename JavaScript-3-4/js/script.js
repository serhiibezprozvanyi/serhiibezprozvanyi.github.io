(function () {
  'use strict';

var db = {
  data: {
    title: 'Тест по какой-то теме',
    questions: [
      {
        title: 'Вопрос #1',
        answers: ['Вариант овтета 1.1', 'Вариант овтета 1.2', 'Вариант овтета 1.3']
      },
      {
        title: 'Вопрос #2',
        answers: ['Вариант овтета 2.1', 'Вариант овтета 2.2', 'Вариант овтета 2.3', 'Вариант овтета 2.4', 'Вариант овтета 2.5']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 3.1', 'Вариант овтета 3.2']
      }
    ]
  },
	questionsAndAnswers: function createQuestion(questionIndex) {
  var question = document.createElement('div');
  var ulQ = document.createElement('ul');
  var titleQuestion = document.createElement('h3');

    ulQ = document.createElement('ul');
	titleQuestion.innerHTML = questionIndex.title;
	question.appendChild(titleQuestion);	
		
		for (var s = 0, count = questionIndex.answers.length; s < count ;s++){
			var list = document.createElement('li');
			var input = document.createElement('input');
			var label = document.createElement('label');
			input.setAttribute('type', 'checkbox');
    		input.setAttribute("id", "Newinput");
			label.appendChild(input);
			label.appendChild(document.createTextNode(questionIndex.answers[s]));
			list.appendChild(label);
			
			ulQ.appendChild(list);
				
		}
		
  question.appendChild(ulQ);
		
  return question;
},
 creatingButton:	function createButton(textButton) {
	var button = document.createElement('button');
	button.setAttribute('type','submit');
	button.setAttribute("class", "NewButton");
    button.setAttribute("value", "#");
    button.innerHTML=textButton;
	return button;
},
formСreation:  function createForm(){

    var form = document.createElement('form');
    var title = document.createElement('h1');
	
    form.setAttribute('action','#')
    form.setAttribute('method','POST')

    title.innerHTML = this.data.title;
    form.appendChild(title);
	for (var s = 0, count = this.data.questions.length; s < count ;s++){
		console.log(this.questionsAndAnswers(this.data.questions[s]));
		form.appendChild(this.questionsAndAnswers(this.data.questions[s]));
		
	}
	form.appendChild(this.creatingButton('Отправить'));
    return form;
},
	
};
var formTest = db.formСreation();
document.body.appendChild(formTest);

})();