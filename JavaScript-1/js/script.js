"use strict";
/*
function reverseString(text) {
	var arr = [];
	for (var i = text.length - 1; i >= 0 ; i--){
		arr.push(text.charAt(i));
	}
		console.log( arr.join(''));
}

reverseString(prompt('Введите текст', ''));


function findLongestWord(findWord) {
	var text = findWord.split(' ');
	var nomber = 0;
	var index = 0;
	for (var i = 0;  i < text.length  ;i++){
		if (text[i].length > nomber) {
			nomber = text[i].length;
			index = i;
			console.log(index);	
		}
	}
	var result = text[index] +':'+ nomber;
	console.log(result);
}

findLongestWord(prompt('Введите текст через провел', ''));


function factorialize(number) {
	var factorial = 1;
	for(var i = 1 ; i  <= number ; i++){
		factorial *= i;
	}
// return factorial;
	console.log('Факториал часла: '+factorial);
}

factorialize(prompt("Факториал часла:", ''));


function pow(base, exponent) {
	var summ = 1;
 if (base > 0){	
	for (var i=0;  exponent > i; i++){
			summ *= base;
		}
		console.log(summ);
	//	return summ;
	}else{
	console.log("0");
	}
}

pow(prompt("Введите число:", ''), prompt("Введите степень:", ''));
*/
// Добавление пользователей в базу
var firstName = [];

var nomberName = prompt("Сколько имен добавить в базу?:  ", '5');
//alert(typeof(nomberName));
//while('number' !== typeof(nomberName)) {
//	nomberName = +prompt("Ошибка, введите пожалуйста число:? ", '');
//	alert(typeof(nomberName));
//}

for (var i =0;i < nomberName; i++){
	firstName.push(prompt("Введите имя для добавления:", ''));
}

//var searchName = prompt("Введите имя для Поиска:", '');
searchName(prompt("Введите имя для Поиска:", ''));
function searchName(name) {
	top:
	for (var i=0;i < firstName.length ; i++){
		if (firstName[i].toLowerCase() === name.toLowerCase()){
			console.log(firstName[i].toUpperCase() +', вы успешно вошли!!!');
			console.log(i);

		}else if ( i >= firstName.length -1){
			alert('Пользователя не существует ' + name.toUpperCase());
		}else{
			continue top;
		}


	}
}