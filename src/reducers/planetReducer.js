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
  // console.log('state', state)
  console.log('acton', action)
  switch (action.type) {
    // re: fetchCurrentPlanetPending: false,
    case FETCH_STARWARS_PLANET_PENDING:
      return {
        ...state,
        fetchCurrentPlanetPending: true
      }
    // re:   currentFilm: null
    case FETCH_STARWARS_PLANET_SUCCESS:
      // console.log('HELLO1', action.person)
      return {
        ...state,
        fetchCurrentPlanetPending: false,
        currentPlanetFetched: action.planet
      }
    // re: fetchCurrentPlanetError: null,
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
// displays the current person being fetched
export const fetchCurrentFilmSuccess = state => {
  return state.planetReducer.currentPlanetFetched
}
// displays true/false
export const fetchCurrentPlanetPending = state =>
  state.planetReducer.fetchCurrentPlanetPending
export const fetchCurrentPlanetError = state =>
  // displays error
  state.planetReducer.fetchCurrentPlanetError

export default planetReducer
