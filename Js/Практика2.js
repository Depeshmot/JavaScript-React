/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания



const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


//РЕШЕНИЕ
//Автоматизируем вопросы при помощи оператора цикла for let i = 0;(все начинается с 0) i < 2;(цикл сработает 2 раза и цикл закончится тогда когда переменная i будет меньше двух) это значит, 
//что цикл выполнится тогда когда переменная i = 0 потом она увеличится i++, но на третий раз цикл не пойдет благодоря усвлоию i < 2.
for (let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    //Пишем УСЛОВИЯ: оператор отрицания для a != null, оператор отрицания для b !=null, оператор пустой строки для a != "", оператор пустрой строки для b != '', оператор для проверки кол-ва
    //символов для a.length < 50(если количества символов больше 50, то вопрос задается заново)
    if (a != null && b != null && a != '' && b != '' && a.length < 50) { 
        //Следующее условия: если пользователь ввел все верно, то все записывается в базу данных.
        personalMovieDB.movies[a] = b;
        //Если все ок, то выводим в консоль 'Done'
        console.log('done');
    //Если что то пошло не по сценарию, то выводим в консоль 'Error' и повторяем сценарий с вопросами
    } else {
        
        console.log('Error');
        //Возвращаем цикл на одно повторение назад, чтобы вернуться на один цикл назад используем оператор цикла ДЕКРИМЕНТ i--;
        i--;
    }
        

}

//Создаем следующее условие: если user ввел 10, то выдается соответствующее сообщение
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
    //Условие: если значение больше 10 но меньше 30, то выдается соответствующее сообщение
}   else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Вы классический зритель');
    //Условие: если значение больше 30, то выдается соответствующее сообщение
}   else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
    //Условие: если ни один из сценариев не выполнился, то выдается соответствующее сообщение
}   else {
    console.log('Произошла ошибка, повторите сценарий');
}


console.log(personalMovieDB);


//Ответ
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', '');
          b = prompt('На сколько оцените его?', ''); 
}

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
    }   else {
        console.log('Error');
    }   i--;   

    if (personalMovieDB.count < 10) {
        console.log('Просомтрено мало фильмов');
    }   else if (personalMovieDB.count <= 10 && personalMovieDB.count > 30) {
        console.log('Вы классический зритель');
    }   else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    }   else {
        console.log('Произошла ошибка');
    }

    console.log(personalMovieDB);


    //Задача. Выведите столбец чисел от 1 до 50.

for (var i = 1; i <= 50; i++) {
    document.write(i + "<br>");
}

