import {
  FETCH_STARWARS_PEOPLE_PENDING,
  FETCH_STARWARS_PEOPLE_SUCCESS,
  FETCH_STARWARS_PEOPLE_ERROR
} from '../actions/actions'
const initialState = {
  pending: false,
  people: [],
  error: null
}

export function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_STARWARS_PEOPLE_PENDING:
      return {
        ...state,
        pending: true
      }
    case FETCH_STARWARS_PEOPLE_SUCCESS:
      return {
        ...state,
        pending: false,
        products: action.payload
      }
    case FETCH_STARWARS_PEOPLE_ERROR:
      return {
        ...state,
        pending: false,
        error: action.error
      }
    default:
      return state
  }
}

// export const getPeople = state => state.people
// export const getPeoplePending = state => state.pending
// export const getPeopleError = state => state.error
export default peopleReducer
