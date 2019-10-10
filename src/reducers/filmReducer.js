import {
  FETCH_STARWARS_FILM_PENDING,
  FETCH_STARWARS_FILM_SUCCESS,
  FETCH_STARWARS_FILM_ERROR,
  ADD_STARWARS_FILM_PENDING,
  ADD_STARWARS_FILM_SUCCESS,
  ADD_STARWARS_FILM_ERROR
} from '../actions/filmActions'

const initialState = {
  currentFilm: null,
  fetchCurrentFilmPending: false,
  fetchCurrentFilmError: null,
  addFilmPending: false,
  addFilmSuccess: false,
  addFilmError: null,
  allFilms: []
}

export function filmReducer(state = initialState, action) {
  console.log('acton', action)
  switch (action.type) {
    // re: fetchCurrentFilmPending: false,
    case FETCH_STARWARS_FILM_PENDING:
      return {
        ...state,
        currentFilmPending: true
      }
    // re:   currentFilm: null
    case FETCH_STARWARS_FILM_SUCCESS:
      // console.log('HELLO1', action.person)
      return {
        ...state,
        currentFilmPending: false,
        currentFilm: action.film
      }
    // re: fetchCurrentFilmError: null,
    case FETCH_STARWARS_FILM_ERROR:
      return {
        ...state,
        currentFilmPending: false,
        fetchCurrentFilmError: action.error
      }
    // re: allFilm: []
    case ADD_STARWARS_FILM_SUCCESS:
      // console.log('HELLO2', action.person)
      return {
        ...state,
        addFilmPending: false,
        // add Film to array
        allFilms: [...state.allFilms, action.film]
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
        addFilmPending: false,
        addFilmError: action.error
      }
    default:
      return state
  }
}

// get state from store and map  to views single

// displays the current person being fetched
export const fetchCurrentFilmSuccess = state => {
  return state.filmReducer.currentFilm
}
// displays true/false
export const fetchCurrentFilmPending = state =>
  state.filmReducer.currentFilmPending
export const fetchCurrentFilmError = state =>
  // displays error
  state.filmReducer.fetchCurrentFilmError
// displays current person added to persons array
export const addFilmSuccess = state => state.filmReducer.currentFilm
export const addFilmPending = state => state.filmReducer.addFilmPending
// displays error
export const addFilmError = state => {
  // consol e.log('state', state)
  return state.filmReducer.addFilmError
}
// returns persons array
export const viewFilmsArray = state => state.personReducer.allFilms
export default filmReducer
