"use strict";

console.log('arr' + '- object');
console.log(4 +'5'); // Унарный +, это плюс который ставится перед чем то!

//Инкримент и Дикримент - увеличивают и уменьшают значение на 1 (incr++, decr--)
let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(incr);
console.log(decr);

console.log(2*4 ===8);


//Операторы &&, ||
const isChecked = true,
    isClose = false;

console.log(isChecked || isClose);

const isChecked = true,
    isClose = false;

console.log(isChecked && isClose);

//Оператор отрицания !значение
const isChecked = true,
    isClose = false;

console.log(isChecked && !isClose);

//Порядок выполнения этих оперторов
console.log(2 + 2 * 2 !== '6');