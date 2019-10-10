import {
  FETCH_STARWARS_FILM_ARR_PENDING,
  FETCH_STARWARS_FILM_SUCCESS,
  FETCH_STARWARS_FILM_ERROR,
  ADD_STARWARS_FILM_PENDING,
  ADD_STARWARS_FILM_SUCCESS,
  ADD_STARWARS_FILM_ERROR,
  CHECK_STARWARS_FILM_ADDED
} from '../actions/filmActions'

const initialState = {
  // same as success
  currentFilmFetched: null,
  fetchCurrentFilmPending: false,
  fetchCurrentFilmError: null,
  addFilmPending: false,
  addFilmError: null,
  addFilmSuccess: false,
  allFilmsArr: []
}

export function filmReducer(state = initialState, action) {
  // console.log('state', state)
  console.log('acton', action)
  switch (action.type) {
    // re: fetchCurrentFilmPending: false,
    case FETCH_STARWARS_FILM_ARR_PENDING:
      return {
        ...state,
        fetchCurrentFilmPending: true
      }
    // re:   currentFilm: null
    case FETCH_STARWARS_FILM_SUCCESS:
      // console.log('HELLO1', action.person)
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
      // console.log('HELLO2', action.person)
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

// get state from store and map  to views single

// displays the current person being fetched
export const fetchCurrentFilmSuccess = state => {
  return state.filmReducer.currentFilmFetched
}
// displays true/false
export const fetchCurrentFilmPending = state =>
  state.filmReducer.currentFilmPending
export const fetchCurrentFilmError = state =>
  // displays error
  state.filmReducer.fetchCurrentFilmError
// displays current person added to persons array
export const addFilmSuccess = state => state.filmReducer.addFilmSuccess
export const addFilmPending = state => state.filmReducer.addFilmPending
// displays error
export const addFilmError = state => {
  // consol e.log('state', state)
  return state.filmReducer.addFilmError
}
// returns persons array
export const allFilms = state => {
  return state.filmReducer.allFilmsArr
}
export default filmReducer
