import {
  FETCH_STARWARS_FILM_ARR_PENDING,
  FETCH_STARWARS_FILM_SUCCESS,
  FETCH_STARWARS_FILM_ERROR,
  ADD_STARWARS_FILM_PENDING,
  ADD_STARWARS_FILM_SUCCESS,
  ADD_STARWARS_FILM_ERROR,
  CHECK_STARWARS_FILM_ADDED,
  CLEAR_STARWARS_FILMS
} from '../actions/filmActions'

const initialState = {
  currentFilmFetched: null,
  fetchCurrentFilmPending: false,
  fetchCurrentFilmError: null,
  addFilmPending: false,
  addFilmError: null,
  addFilmSuccess: false,
  allFilmsArr: []
}

export function filmReducer(state = initialState, action) {
  // console.log('acton', action)
  switch (action.type) {
    case CLEAR_STARWARS_FILMS:
      return {
        ...state,
        allFilmsArr: []
      }
    // re: fetchCurrentFilmPending: false,
    case FETCH_STARWARS_FILM_ARR_PENDING:
      return {
        ...state,
        fetchCurrentFilmPending: true
      }
    // re:   currentFilm: null
    case FETCH_STARWARS_FILM_SUCCESS:
      return {
        ...state,
        fetchCurrentFilmPending: false,
        currentFilmFetched: action.film
      }
    // re: fetchCurrentFilmError: null,
    case FETCH_STARWARS_FILM_ERROR:
      return {
        ...state,
        fetchCurrentFilmPending: false,
        addFilmSuccess: false,
        fetchCurrentFilmError: action.error
      }
    // re: allFilm: []
    case ADD_STARWARS_FILM_SUCCESS:
      return {
        ...state,
        addFilmSuccess: true,
        addFilmPending: false,
        // add Film to array
        allFilmsArr: [...state.allFilmsArr, action.film]
      }
    // re:currentFilmAddedPending: false
    case ADD_STARWARS_FILM_PENDING:
      return {
        ...state,
        addFilmPending: true
      }
    //  re: currentFilmAddedError
    case ADD_STARWARS_FILM_ERROR:
      return {
        ...state,
        addFilmSuccess: false,
        addFilmPending: false,
        addFilmError: action.error
      }
    // TODO
    case CHECK_STARWARS_FILM_ADDED:
      const filmAdded = state.allFilmsArr.some(film => {
        return film.title === action.title
      })
      return {
        addFilmSuccess: filmAdded,
        ...state
      }
    default:
      return state
  }
}

// displays the current person being fetched
export const fetchCurrentFilmSuccess = state =>
  state.filmReducer.currentFilmFetched
// displays true/false
export const fetchCurrentFilmPending = state =>
  state.filmReducer.currentFilmPending
// displays error
export const fetchCurrentFilmError = state =>
  state.filmReducer.fetchCurrentFilmError
// displays current person added to persons array
export const addFilmSuccess = state => state.filmReducer.addFilmSuccess
export const addFilmPending = state => state.filmReducer.addFilmPending
// displays error
export const addFilmError = state => state.filmReducer.addFilmError
// returns films array
export const allFilms = state => state.filmReducer.allFilmsArr

export default filmReducer
