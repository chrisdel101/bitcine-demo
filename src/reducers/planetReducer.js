import {
  FETCH_STARWARS_PLANET_PENDING,
  FETCH_STARWARS_PLANET_SUCCESS,
  FETCH_STARWARS_PLANET_ERROR
} from '../actions/planetActions'

const initialState = {
  currentPlanetFetched: null,
  fetchCurrentPlanetPending: false,
  fetchCurrentPlanetError: null
}

export function planetReducer(state = initialState, action) {
  // console.log('acton', action)
  switch (action.type) {
    case FETCH_STARWARS_PLANET_PENDING:
      return {
        ...state,
        fetchCurrentPlanetPending: true
      }
    case FETCH_STARWARS_PLANET_SUCCESS:
      return {
        ...state,
        fetchCurrentPlanetPending: false,
        currentPlanetFetched: action.planet
      }
    case FETCH_STARWARS_PLANET_ERROR:
      return {
        ...state,
        fetchCurrentPlanetPending: false,
        fetchCurrentPlanetError: action.error
      }
    default:
      return state
  }
}
export const fetchCurrentPlanetSuccess = state =>
  state.planetReducer.currentPlanetFetched
export const fetchCurrentPlanetPending = state =>
  state.planetReducer.fetchCurrentPlanetPending
export const fetchCurrentPlanetError = state =>
  state.planetReducer.fetchCurrentPlanetError

export default planetReducer
