export const FETCH_STARWARS_FILM_ARR_PENDING = 'FETCH_STARWARS_FILM_ARR_PENDING'
export const FETCH_STARWARS_FILM_SUCCESS = 'FETCH_STARWARS_FILM_SUCCESS'
export const FETCH_STARWARS_FILM_ERROR = 'FETCH_STARWARS_FILM_ERROR'
export const ADD_STARWARS_FILM_SUCCESS = 'ADD_STARWARS_FILM_SUCCESS'
export const ADD_STARWARS_FILM_ERROR = 'ADD_STARWARS_FILM_ERROR'
export const ADD_STARWARS_FILM_PENDING = 'ADD_STARWARS_FILM_PENDING'
export const CHECK_STARWARS_FILM_ADDED = 'CHECK_STARWARS_FILM_ADDED'
export const CLEAR_STARWARS_FILMS = 'CLEAR_STARWARS_FILMS'

// todo - add pending and success
export function clearStarWarsFilms() {
  return {
    type: CLEAR_STARWARS_FILMS
  }
}
export function fetchStarWarsFilmsArrPending() {
  return {
    type: FETCH_STARWARS_FILM_ARR_PENDING
  }
}
export function fetchStarWarsFilmSuccess(film) {
  return {
    type: FETCH_STARWARS_FILM_SUCCESS,
    film: film
  }
}
export function fetchStarWarsFilmError(error) {
  return {
    type: FETCH_STARWARS_FILM_ERROR,
    error
  }
}
export function addStarWarsFilmSuccess(film) {
  // console.log('film', film)
  return {
    film: film,
    type: ADD_STARWARS_FILM_SUCCESS
  }
}
export function addStarWarsFilmPending(film) {
  return {
    type: ADD_STARWARS_FILM_PENDING
  }
}
export function addStarWarsFilmError(error) {
  return {
    type: ADD_STARWARS_FILM_ERROR,
    error: error
  }
}
// TODO
export function checkStarWarsFilmAdded(filmTile) {
  return {
    title: filmTile,
    type: CHECK_STARWARS_FILM_ADDED
  }
}
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
