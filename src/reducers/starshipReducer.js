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
  // console.log('acton', action)
  switch (action.type) {
    case CLEAR_STARWARS_STARSHIP:
      return {
        ...state,
        allStarshipsArr: []
      }
    case FETCH_STARWARS_STARSHIP_ARR_PENDING:
      return {
        ...state,
        fetchCurrentStarshipPending: true
      }
    case FETCH_STARWARS_STARSHIP_SUCCESS:
      return {
        ...state,
        fetchCurrentStarshipPending: false,
        currentStarshipFetched: action.starship
      }
    case FETCH_STARWARS_STARSHIP_ERROR:
      return {
        ...state,
        fetchCurrentStarshipPending: false,
        addStarshipSuccess: false,
        fetchCurrentStarshipError: action.error
      }
    case ADD_STARWARS_STARSHIP_SUCCESS:
      return {
        ...state,
        addStarshipSuccess: true,
        addStarshipPending: false,
        allStarshipsArr: [...state.allStarshipsArr, action.starship]
      }
    case ADD_STARWARS_STARSHIP_PENDING:
      return {
        ...state,
        addStarshipPending: true
      }
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
