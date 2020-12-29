const timerId = setTimeout(function() { // setTimeot устанавливает время когда функция выполнится
    console.log('Hello');
}, 2000); // ВАЖНО время в таких таймаутах устанавливается в мили секундах ( в данном примере 2 секунды)

// Тоже самое но только через конкретный аргумент text (просто знать что такой синтаксис существует)
const timerId = setTimeout(function(text) { // setTimeot устанавливает время когда функция выполнится
    console.log(text);
}, 2000, 'Hello'); // ВАЖНО время в таких таймаутах устанавливается в мили секундах ( в данном примере 2 секунды)

// Еще один вариант написания
const timerId = setTimeout(logger, 2000);

function logger () {
    console.log('Hello');
}

// Еще один вариант синтаксиса
setTimeout(logger, 2000);

function logger () {
    console.log('Hello');
}


// Читска таймера (ИНТЕРВАЛА)
const timerId = setTimeout(logger, 2000);

clearInterval(timerId);

function logger () {
    console.log('Hello');
}


// Пример 
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const timerId = setTimeout(logger, 2000); // После клика будет запускаться таймер
});

function logger () {
    console.log('Hello');
}

// Функция позволяющая скрипту повторяться через определенное кол=во времени setInterval
const btn = document.querySelector('.btn');
let  timerId;

btn.addEventListener('click', () => {
    timerId = setInterval(logger, 2000); 
});

clearInterval(timerId);

function logger () {
    console.log('Hello');
}


// Функция позволяющая скрипту повторяться через определенное кол=во времени setInterval
const btn = document.querySelector('.btn');
let  timerId;

btn.addEventListener('click', () => {
    timerId = setInterval(logger, 2000); 
});

clearInterval(timerId);

function logger ()  {
    if (i === 3) {
        clearInterval(timerId);
    }
    console.log('text');
    i++;
}

// Пример
const if = setTimeout(function log() {
    console.log('Hello');
    id = setTimeout(log, 500);

}, 500);

// Практика
const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation () {
    const elem = document.querySelector('.box');
    let pos = 0;

    const if = setInterval (frame, 10)
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);