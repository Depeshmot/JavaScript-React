'use strict';

function showFirstMessage() {
    console.log('Hello world');
}

showFirstMessage();




let num = 20 

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello bitches');
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret () {
    let num = 50;
    /* В этом месте может быть огромный код с логикой, вычеслениями например ЗП сотрудникам */


    /* Оператор функции return в конце возвращает результат работы этой функции */
    return num;
}

/*И этот результат мы можем куда то записать  */
const anotherNum = ret();
console.log(anotherNum);










/* Существует 3 типа функций*/


1.FUNCTION DECLARATION

function foo() {
    код
}


2.FUNCTION EXPRESSION

let foo = function() {
    код
}


3.СТРЕЛОЧЫНЕ ФУНКЦИИ

()=>

