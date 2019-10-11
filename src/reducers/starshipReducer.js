import {
  FETCH_STARWARS_STARSHIP_ARR_PENDING,
  FETCH_STARWARS_STARSHIP_SUCCESS,
  FETCH_STARWARS_STARSHIP_ERROR,
  ADD_STARWARS_STARSHIP_PENDING,
  ADD_STARWARS_STARSHIP_SUCCESS,
  ADD_STARWARS_STARSHIP_ERROR,
  CHECK_STARWARS_STARSHIP_ADDED,
  CLEAR_STARWARS_STARSHIP
} from '../actions/starshipActions'

const initialState = {
  // same as success
  currentStarshipFetched: null,
  fetchCurrentStarshipPending: false,
  fetchCurrentStarshipError: null,
  addStarshipPending: false,
  addStarshipError: null,
  addStarshipSuccess: false,
  allStarshipsArr: []
}

export function starshipReducer(state = initialState, action) {
  // console.log('state', state)
  // console.log('acton', action)
  switch (action.type) {
    case CLEAR_STARWARS_STARSHIP:
      return {
        ...state,
        allStarshipsArr: []
      }
    // re: fetchCurrentStarshipPending: false,
    case FETCH_STARWARS_STARSHIP_ARR_PENDING:
      return {
        ...state,
        fetchCurrentStarshipPending: true
      }
    // re:   currentFilm: null
    case FETCH_STARWARS_STARSHIP_SUCCESS:
      // console.log('HELLO1', action.person)
      return {
        ...state,
        fetchCurrentStarshipPending: false,
        currentStarshipFetched: action.starship
      }
    // re: fetchCurrentFilmError: null,
    case FETCH_STARWARS_STARSHIP_ERROR:
      return {
        ...state,
        fetchCurrentStarshipPending: false,
        addStarshipSuccess: false,
        fetchCurrentStarshipError: action.error
      }
    // re: allFilm: []
    case ADD_STARWARS_STARSHIP_SUCCESS:
      // console.log('HELLO2', action.person)
      return {
        ...state,
        addStarshipSuccess: true,
        addStarshipPending: false,
        // add Film to array
        allStarshipsArr: [...state.allStarshipsArr, action.starship]
      }
    // re:currentFilmAddedPending: false
    case ADD_STARWARS_STARSHIP_PENDING:
      return {
        ...state,
        addStarshipPending: true
      }
    //  re: currentFilmAddedError
    case ADD_STARWARS_STARSHIP_ERROR:
      return {
        ...state,
        addStarshipSuccess: false,
        addStarshipPending: false,
        addStarshipError: action.error
      }
    // TODO
    case CHECK_STARWARS_STARSHIP_ADDED:
      const starshipAdded = state.allStarshipsArr.some(ship => {
        return ship.title === action.title
      })
      return {
        addStarshipSuccess: starshipAdded,
        ...state
      }
    default:
      return state
  }
}
export const fetchCurrentStarshipSuccess = state =>
  state.starshipReducer.currentStarshipFetched
export const fetchCurrentStarshipPending = state =>
  state.starshipReducer.fetchCurrentStarshipPending
export const fetchCurrentStarshipError = state =>
  state.starshipReducer.fetchCurrentStarshipError
export const addStarshipSuccess = state =>
  state.starshipReducer.addStarshipSuccess
export const addStarshipPending = state =>
  state.starshipReducer.addStarshipPending
export const addStarshipError = state => state.starshipReducer.addStarshipError
export const allStarships = state => state.starshipReducer.allStarshipsArr

export default starshipReducer
