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

      var myNumber = '251'
      myNumber.toString(16) // fb

*/


// + Бонус, использовать 16-ричную систему исчесления и цвет HEX -> #FFCC00
document.body.style.backgroundColor = '#' + getRandomIntInclusive(0, 255).toString(16) + getRandomIntInclusive(0, 255).toString(16) + getRandomIntInclusive(0, 255).toString(16);

var app = document.querySelector('#app');

var block = document.createElement('div');

var p = document.createElement('p');

p.id = 'color_text';

block.appendChild(p);
p.innerHTML = 'parent color '+document.body.style.backgroundColor;
p.style.textAlign='center';

block.appendChild(p);

block.style.width ='200px';
block.style.height ='100px';

block.style.margin="0 auto";//  + Бонус выводить полученый цвет по центру страницы.

block.style.paddingTop='50px';

app.appendChild(block);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function btnClickFunct(){//  + Бонус, повесить обработчик на кнопку через метод onClick
  document.body.style.backgroundColor = '#' + getRandomIntInclusive(0, 255).toString(16) + getRandomIntInclusive(0, 255).toString(16) + getRandomIntInclusive(0, 255).toString(16);
  block.style.backgroundColor ='#' + getRandomIntInclusive(0, 255).toString(16) + getRandomIntInclusive(0, 255).toString(16) + getRandomIntInclusive(0, 255).toString(16);;
  p.innerHTML = 'parent color '+document.body.style.backgroundColor;
}
  
