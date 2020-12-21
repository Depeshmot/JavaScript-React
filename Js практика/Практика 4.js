'use strict';
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов', ''),
            b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        }   else if (personalMovieDB.count <= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        }   else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        }   else {
            console.log('Что то пошло не так');
        }
        
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }   else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`).toLocaleLowerCase();

            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные');
                i--;// Откатываемся на одну операцию назад
            }   else {
                personalMovieDB.genres[i - 1] = genre;
            }  
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`); // Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
        });
    }
};

//start
//rememberMyFilms
//detectPersonalLevel
//showMyDB
//toggleVisibleMyDB
//writeYourGenres

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('', '');

        while(personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('', '');
        }
    },
    rememberMyFilms: function() {
        for(let i = 0; i < 2; i++) {
            const a = prompt('', ''),
                b = prompt('','');
            if(a != null && b != null && a != '' && b != '') {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('');
        } else if (personalMovieDB.count  >= 10 && personalMovieDB.count < 30) {
            console.log('');
        } else if (personalMovieDB.count >= 30) {
            console.log('');
        } else {
            console.log('');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.privat)  {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`,'');
            
            if(genre === null || genre === '') {
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};