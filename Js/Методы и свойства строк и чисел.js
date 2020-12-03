'use strict';

const str = 'test';
const str = [1,2,3];

console.log(str.length); //Метод строка
console.log(str.toLocaleUpperCase()); //Метод Верхний регистр
console.log(str.toLocaleLowerCase()); //Метод Нижний регистр


const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));// Метод "Поиск под строки"


const logg = "Hello world";

console.log(logg.slice(0, 11));// Метод вырезание строки

console.log(logg.substring(0, 11));// Метод вырезание строки

console.log(logg.substr(0, 11));// Метод вырезание длинны строки (сколько символов необходимо вырезать)

const num = 12.2;
console.log(Math.round(num));




const test = '12.2px';
console.log(parseInt(test)); // Метод 
console.log(parseFloat(test)); // Метод вернутт в десятичном варианте с дробным значением