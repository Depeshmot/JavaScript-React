'use strict';

if (4 == 88) {
    console.log('ok!');
} else {
    console.log('Error');
}

const num = 50;

if(num < 49) {
    console.log('Error'); 
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ок');
}


//Тернаный оператор (в его работе участвуют 3 аргумента, он единственный на данный момент в JS)
(num === 50) ? console.log('Ок') : console.log('Error');


const num = 50;

switch (num) {
    case 49:
        console.log('Неверно');
        break;
    case 100:
    console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}