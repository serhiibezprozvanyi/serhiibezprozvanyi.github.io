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
        answers: ['Вариант овтета 2.1', 'Вариант овтета 2.2', 'Вариант овтета 2.3', 'Вариант овтета 2.4']
      },
      {
        title: 'Вопрос #3',
        answers: ['Вариант овтета 3.1', 'Вариант овтета 3.2']
      }
    ]
  }
};

function nameTest(){
	var testH1 = document.createElement('h1');
//	testH1 = setAttribute('class', 'name');
	testH1.innerHTML = db.data.title;
	return testH1;
}

function testOutput(button) {
var parent = document.createElement('ul');
	parent.setAttribute("class", "ulOutput");
for (var i = 0, count = db.data.questions.length; i < count ;i++){
  var el = document.createElement('p');
  el.innerHTML = db.data.questions[i].title;
  parent.appendChild(el);
	for (var s = 0, count = db.data.questions[i].answers.length; s < count ;s++){
		var ell = document.createElement('li');
		ell.innerHTML = '<input type="checkbox" '+ 'id=' + (i+1 + '-' + (s+1)) +'>' + ' ' +db.data.questions[i].answers[s];
		parent.appendChild(ell);
	}
}
	return parent;
}


function input(){
	var inputs = document.createElement('input');
	inputs.setAttribute('type', 'checkbox');
	inputs.setAttribute("id", "Newinput");
	return  inputs;
}

function createButton(textButton) {
	var button = document.createElement('button');
	button.setAttribute('type','submit');
	button.setAttribute("class", "NewButton");
    button.setAttribute("value", "#");
    button.innerHTML=textButton;
	return button;
}

function createForm(content){
	var form = document.createElement('form');
	form.setAttribute('action','#')
	form.setAttribute('method','POST')
	form.appendChild(content);
	return form;
}

var formTest = createForm(testOutput());
  
document.body.appendChild(formTest);
 