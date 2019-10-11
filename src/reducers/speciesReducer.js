import {
  FETCH_STARWARS_SPECIES_PENDING,
  FETCH_STARWARS_SPECIES_SUCCESS,
  FETCH_STARWARS_SPECICES_ERROR
} from '../actions/speciesActions'

const initialState = {
  currentSpeciesFetched: null,
  fetchCurrentSpeciesPending: false,
  fetchCurrentSpeciesError: null
}

export function speciesReducer(state = initialState, action) {
  console.log('acton', action)
  switch (action.type) {
    case FETCH_STARWARS_SPECIES_PENDING:
      return {
        ...state,
        fetchCurrentSpeciesPending: true
      }
    case FETCH_STARWARS_SPECIES_SUCCESS:
      // console.log('HELLO1', action.person)
      return {
        ...state,
        fetchCurrentSpeciesPending: false,
        currentSpeciesFetched: action.species
      }
    case FETCH_STARWARS_SPECICES_ERROR:
      return {
        ...state,
        fetchCurrentSpeciesPending: false,
        fetchCurrentSpeciesError: action.error
      }
    default:
      return state
  }
}
// displays the current person being fetched
export const fetchCurrentSpeciesSuccess = state => {
  return state.speciesReducer.currentSpeciesFetched
}
// displays true/false
export const fetchCurrentSpeciesPending = state =>
  state.speciesReducer.fetchCurrentSpeciesPending
// displays error
export const fetchCurrentSpeciesError = state =>
  state.speciesReducer.fetchCurrentSpeciesError

export default speciesReducer
