const arr = [1, 2, 3, 6, 8];

arr.pop(); // Метод удаляет последний эллемент с нашего массива 
arr.push(10); // Метод который добавляет элемент в конец массива, для этого нам нужно знать что добавлять в метод, пусть будет 10

console.log(arr);

for (let i = 0; i < arr.length; i++) { // Для того чтобы перебрать массив, мы можем использовать цикл,этот цикл будет отрабатывать до тех пор пока не закончаться элементы внутри массива
    console.log(arr.[i]);
} 

// Метод  for off
const arr = [1, 2, 3, 6, 8];

for (let value of arr) {
    console.log(value);
}

// Метод forEach
const arr = [1, 2, 3, 6, 8];

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// 
const arr = [1, 2, 3, 6, 8];

console.log(arr.length); // Овтет 4 (Узнаем количества элементов 0.1.2.3.4)


// Метод формирования массива при помощи того что вводит пользователь 
const str = prompt('', '');
const products = str.split(', ');
console.log(products);

// Метод объединения элеменов массива join
const str = prompt('', '');
const products = str.split(', ');
console.log(products.join(';'));

// Метод сортировки элементов sort
const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join(';'));

//Метод sort........Часто использоваемый шаблон в программирование 
const arr = [1, 2, 3, 6, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//Псевдомассивы 


let arr = ['Я', 'читаю', 'книгу', 'прямо', 'сейчас'];

arr.splice(-0, 3, 'очень', 'интересно');

console.log(arr);

let arr = ['1, 2'];

let pushArr = arr.push('3,4');