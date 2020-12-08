
// Динамическая типизация - это превращение одного типа данных в другой

// Примеры использования динамической типизации
console.log(typeof(null + ''));

const num = 5;

console.log('https;//vk.com/catalog/' + num);// Способо перейти в 5-ый каталог

const fontSize = 26 + 'px'; 


// To number

console.log(typeof(Number('4'))); // Старый способ

console.log(typeof(+  '5')); // Унарный +

console.log(typeof(parseInt('15px', 10)); // Метод parseInt



let answer = +prompt('Hello', '');


// too boolean

// 0, '', null, undefined, NaN; - всегда является ложью (false)

0, '', null, undefined, NaN; - ЛОЖЬ

Все остальное = ПРАВДА (true)

//
let  switcher = null;

if(switcher) {
    console.log('Working...');
}


//
switcher = 1;

if(switcher) {
    console.log('Working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)
console.log(typeof(!!'44444'));
