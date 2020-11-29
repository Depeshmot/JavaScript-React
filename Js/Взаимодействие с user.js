"use strict";


//Команда alert
alert('Fuck you'); 


//Команда confirm
const result = confirm('На сколько сильно ты хочешь стать фронтом?');
console.log(result);


//Вся информация которая придет будет в виде string - нужно запомнить!!!


//Команда prompt
const answer = prompt('Сколько вам лет?', '18');
console.log(answer);


//Вопросы у user
const answer = [];

answer[0] = prompt('Как ваше имя?', '');
answer[1] = prompt('Как ваша фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');

document.write(answer);