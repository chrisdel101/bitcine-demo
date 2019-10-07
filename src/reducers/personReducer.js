import {
  FETCH_STARWARS_PERSON_PENDING,
  FETCH_STARWARS_PERSON_SUCCESS,
  FETCH_STARWARS_PERSON_ERROR
} from '../actions/personActions'
const initialState = {
  pending: false,
  people: [],
  error: null
}

export function personReducer(state = initialState, action) {
  console.log('acton', action)
  switch (action.type) {
    case FETCH_STARWARS_PERSON_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_STARWARS_PERSON_SUCCESS:
      return {
        ...state,
        pending: false,
        person: action.payload
      }
    case FETCH_STARWARS_PERSON_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}

export const getPerson = state => state.person
export const getPersonPending = state => state.personPending
export const getPersonError = state => state.PersonError
export default personReducer
