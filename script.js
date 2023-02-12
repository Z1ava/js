'use strict';
const numberOfFilms = +prompt('Скільки фільмів ви вже подивились?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один із останніх переглянутих фільмів', ''),
      b = prompt('Ваша оцінка даного фільму', ''),
      c = prompt('Один із останніх переглянутих фільмів', ''),
      d = prompt('Ваша оцінка даного фільму', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);