'use strict';

//numberOfFilms
//personalMovieDB
//Сколько фильмов вы уже посмотрели?
//Один из последних просмотренных фильмов
//На сколько оцените его?
//Просмотрено довольно мало фильмов
//Вы классический зритель
//Вы киноман
//Произошла ошибка, повторите сценарий


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('', ''),
            b = prompt('', '');
        if (a != null && b != null && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('');
    } else if (personalMovieDB.count >= 30) {
        console.log('');
    } else {
        console.log('');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 3; i++) {
        const genre = prompt(`Your favorite genres? ${i}`);
        personalMovieDB.genres[i - 1]= genre;
        console.log('Now Fuck off');
    }
}

writeYourGenres();