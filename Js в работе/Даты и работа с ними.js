const now = new Date();

console.log(now);

// Мы можем четко настроить дату
const now = new Date(2020, 5, 1, 20);

console.log(now);

// Любая дата которая хранится в JavaScripte хранится в мили секундах 2000 = 2 секунды

const now = new Date(0);

console.log(now);

// Существуют множество методов с Date, здесь будут примеры самые популярные:

const now = new Date(); 

console.log(now.getFullYear()); // Метод - узнать текущий год
console.log(now.getMonth()); // Метод - узнать текущий месяц
console.log(now.getDate()); // Метод - узнать 
console.log(now.getHours()); // Метод - узнать 
console.log(now.getSeconds()); // Метод - узнать 
console.log(now.getMilliseconds()); // Метод - узнать 
console.log(now.getDay()); // Метод - узнать номер дня недели

// ВАЖНОЕ ДОПОЛНЕНИЕ все методы возвращают значения в соответствие с местным часовым поясом
// но если добавить UTC то он прибавляет

console.log(now.getUTCHours()); // Метод - узнать

console.log(now.getTimezoneOffset()); // Метод - получает разницу между часовым поясом и UTC

console.log(now.getTime());

// Методы установки даты (set)

console.log(now.setHours(18));

// Метод parce
const now = new Date('2020-05-01'); 
    new Date.parse('2020-05-01');



// ПРимер проверить производительность нашей системы
    let start = new Date();

    for (let i = 0; i < 100000; i++) {
        let some = i ** 3;
    }

    let end = new Date();

    alert(`Цикл отработал за ${end - start} миллисекунд`);