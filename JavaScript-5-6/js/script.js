"use strict"
var startDate =  0;
var date;
var hours;
var start;
var pauseDate = 0;
var isActive = false;
var int = null;
var start = ['00','00','00','000'];
var topdate;
function html (){

var div = document.createElement('div');
var p = document.createElement('p');
p.setAttribute('id', 'time');
p.innerHTML = start.join(':');
div.appendChild(p);
return document.body.appendChild(div);
}

function hmtlTimer(){
	date = Date.now();
 	start = ['00','00','00','000'];
	topdate =  new Date(date - startDate + pauseDate);
	start[3] = topdate.getMilliseconds();
	start[2] = (topdate.getSeconds() <10) ? '0'+ topdate.getSeconds(): topdate.getSeconds();
	start[1] = (topdate.getMinutes() <10) ? '0'+ topdate.getMinutes(): topdate.getMinutes();
	hours = topdate.getHours() - topdate.getTimezoneOffset()/-60;
	start[0] = (hours <10) ? '0'+ hours: hours;
	document.getElementById('time').innerHTML = start.join(':');
}

function creatingButton(textButton, id) {
	var button = document.createElement('button');
	button.setAttribute('type','submit');
	button.setAttribute('id', id);
  button.setAttribute('value', '#');
  button.innerHTML=textButton;
	console.log(button);
	return button;
}

var stop = creatingButton('Стоп', 'stop');
var split = creatingButton('split', 'split');
var st = creatingButton('Старт', 'start');


function setTimer(){
		startDate  = Date.now();
	return startDate;
       }

function stopTimer() {
 start = ['00','00','00','000'];
     clearInterval(int);
	 pauseDate = 0;
     document.getElementById('time').innerHTML = start.join(':');
	 st.innerHTML=("Старт");
	 isActive = false;
 }

function updateTimer(){
	st.innerHTML=("Старт");
	pauseDate = start[3] + (start[2]*1000)+ (start[1]*60*1000) + (start[0]*3600*1000);
	isActive = false;
	clearInterval(int);
	return pauseDate;
}

st.addEventListener('click', function() {
	  if (isActive === false){
		  setTimer();
		  int = setInterval(hmtlTimer,1);
          isActive = true;
		  st.innerHTML=("Пауза");
	  }
	else{
		updateTimer();
        isActive = false;
	}
});

split.addEventListener('click', function() {
	html();
});
stop.addEventListener('click', function() {
	stopTimer();
});

html();
document.body.appendChild(st);
document.body.appendChild(split);
document.body.appendChild(stop);
