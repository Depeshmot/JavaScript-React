'use strict';



// CallBack функция - это функция, которая должна выполниться полсе того как  другая функция завершило свое выполнение

function first() {
    //Do something

    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});

// Пример

function doHomework (subject) {
    alert(`Starting my ${subject} homework.`);
}

doHomework('math');

//добавляем callback функцию

function doHomework (subject, callback) {
    alert(`Starting ,y ${subject} homework.`);
    callback();
}

doHomework('math', function() {
    alert('Finished my home work');
});

// Другой варинат решения

function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
}
function alertFinished(){
    alert('Finished my homework');
}
doHomework('math', alertFinished);

function makeFood (ingridients, callback) {
    alert(`I making ${ingridients} wis salat`);
    callback();
}

function watchFilm () {
    alert('and after that, I go to sleep');
}

makeFood('bekon with eggs', watchFilm);