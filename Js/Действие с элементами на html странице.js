'use strict';

const box = document.getElementById('box'),
    btns  = document.getElementsByTagName('button'),
  circles = document.getElementsByClassName('circle'),
   hearts = document.querySelectorAll('heart'),
 oneHeart = document.querySelector('.heart');

// Если я хочу изменить стиль кнопки, то я обращаюсь к его CSS
box.style.backgroundColor = 'blue';
box.style.width = '30px'; // 
btns[1].style.backgroundColor = 'green';

// Если я хочу задать стили нескольким элементам - существует свойство TEXT
box.style.cssText = 'background-color: blue; width: 500px'; 

// Тоже самое мы можем сделать подставив переменные 
box.style.cssText = `background-color: blue; width: ${num}px`; 


// Это самый простой циклы при котором мы можем перебрать элементы и изменить их, циклы для перебора элементов особо не используются, для этого есть специальные методы
for(let = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'blue';
}

// Метод forEach
hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

