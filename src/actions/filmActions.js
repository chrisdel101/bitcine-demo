export const FETCH_STARWARS_FILM_PENDING = 'FETCH_STARWARS_FILM_PENDING'
export const FETCH_STARWARS_FILM_SUCCESS = 'FETCH_STARWARS_FILM_SUCCESS'
export const FETCH_STARWARS_FILM_ERROR = 'FETCH_STARWARS_FILM_ERROR'
export const ADD_STARWARS_FILM_SUCCESS = 'ADD_STARWARS_FILM_SUCCESS'
export const ADD_STARWARS_FILM_ERROR = 'ADD_STARWARS_FILM_ERROR'
export const ADD_STARWARS_FILM_PENDING = 'ADD_STARWARS_FILM_PENDING'

export function fetchStarWarsFilmPending() {
  return {
    type: FETCH_STARWARS_FILM_PENDING
  }
}
export function fetchStarWarsFilmSuccess(film) {
  return {
    type: FETCH_STARWARS_FILM_SUCCESS,
    film: {
      [film.title]: film
    }
  }
}
export function fetchStarWarsFilmError(error) {
  return {
    type: FETCH_STARWARS_FILM_ERROR,
    error
  }
}
export function addStarWarsFilmSuccess(film) {
  return {
    film: {
      [film.title]: film
    },
    type: ADD_STARWARS_FILM_SUCCESS
  }
}
export function addStarWarsFilmPending(film) {
  return {
    film: {
      [film.title]: film
    },
    type: ADD_STARWARS_FILM_PENDING
  }
}
export function addStarWarsFilmError(error) {
  return {
    type: ADD_STARWARS_FILM_ERROR,
    error: error
  }
}
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
