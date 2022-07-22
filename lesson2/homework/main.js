/*
	Задание 1.

	Написать функцию которая будет задавать СЛУЧАЙНЫЙ цвет для фона.
	Каждая перезагрузка страницы будет с новым цветом.
	Для написания используйте функцию на получение случайного целого числа,
	между минимальным и максимальным значением (Приложена снизу задания)

	+ Бонус, повесить обработчик на кнопку через метод onClick
	+ Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
	+ Бонус выводить полученый цвет по центру страницы.
  
	Необходимо создать блок через createElement задать ему стили через element.style
	и вывести через appendChild или insertBefore

	Необходимые материалы:
		Math.Random (Доки): https://developer.mozilla.org/uk/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		function getRandomIntInclusive(min, max) {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1)) + min;
		}
		__
		Работа с цветом:
		Вариант 1.
			Исользовать element.style.background = 'rgb(r,g,b)';
			где r,g,b случайное число от 0 до 255;

		Вариант 2.
			Исользовать element.style.background = '#RRGGBB';
			где, RR, GG, BB, значние цвета в 16-ричной системе исчесления
			Формирование цвета в вебе: https://ru.wikipedia.org/wiki/%D0%A6%D0%B2%D0%B5%D1%82%D0%B0_HTML
			Перевод в 16-ричную систему исчесления делается при помощи
			метода 
		  
			Number.toString( ) https://www.w3schools.com/jsref/jsref_tostring_number.asp,

			var myNumber = 251;
			myNumber.toString(16) // fb

*/


//*********** vesion-1 *********** /
function getRandomIntInclusive(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}


var rgbColor = document.body.style.backgroundColor =
	'rgb(' + getRandomIntInclusive(0, 255) + ', ' +
	getRandomIntInclusive(0, 255) + ', ' +
	getRandomIntInclusive(0, 255) + ')';

var text = document.querySelector('.text');
text.style.textAlign = 'center';
document.body.style.backgroundColor = rgbColor;
text.innerText = rgbColor;

function btn() {
	document.body.style.backgroundColor = rgbColor;
	text.innerText = document.body.style.backgroundColor =
		'rgb(' + getRandomIntInclusive(0, 255) + ', ' +
		getRandomIntInclusive(0, 255) + ', ' +
		getRandomIntInclusive(0, 255) + ')';
}


//*********** vesion-2 *********** /

// function getRandomIntInclusive(min, max) {
// 	return Math.floor(Math.random() * (max - min)) + min;
// }

// function rgbColor() {
// 	return 'rgb(' + getRandomIntInclusive(0, 255) + ', ' +
// 		getRandomIntInclusive(0, 255) + ', ' +
// 		getRandomIntInclusive(0, 255) + ')';
// }
// document.body.style.backgroundColor = rgbColor();

// let text = document.querySelector('.text');
// text.innerText = rgbColor();
// text.style.textAlign = 'center';

// function btn() {
// 	document.body.style.backgroundColor = rgbColor();
// 	text.innerText = rgbColor();
// }


//*********** vesion-3 списанная с вашего примера 'https://jsfiddle.net/hmgwxd8q/3/' *********** /

// function randomColor() {
// 	const rgbRandom = () => Math.floor(Math.random() * 256);
// 	return `rgb(${rgbRandom()},${rgbRandom()},${rgbRandom()})`;
// }
// var text = document.getElementById('text');
// document.body.style.backgroundColor = randomColor();
// text.innerText = randomColor();

// function btn() {
// 	document.body.style.backgroundColor = randomColor();
// 	text.innerText = randomColor();
// }


let app = document.getElementById('app'),
	header = document.createElement('header');

app.prepend(header);

header.style.display = 'flex';
header.style.width = '300px';
header.style.height = '50px';
header.style.justifyContent = 'space-around';
header.style.alignItems = 'center';
header.style.backgroundColor = 'green';
header.style.margin = '20px auto';

