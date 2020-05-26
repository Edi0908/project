const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов ?', ''),
    b = prompt('На сколько оцените его ?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
  } else {
    alert('Упс, что-то пошло не так !');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  alert('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  alert('Вы киноман');
} else {
  alert('Произошла ошибка');
}
console.log(personalMovieDB);
