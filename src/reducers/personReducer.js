import {
  FETCH_STARWARS_PERSON_PENDING,
  FETCH_STARWARS_PERSON_SUCCESS,
  FETCH_STARWARS_PERSON_ERROR,
  ADD_STARWARS_PERSON_SUCCESS,
  ADD_STARWARS_PERSON_ERROR
} from '../actions/personActions'

const initialState = {
  personPending: false,
  persons: [],
  personError: null
}

export function personReducer(state = initialState, action) {
  console.log('acton', action)
  switch (action.type) {
    case FETCH_STARWARS_PERSON_PENDING:
      return {
        ...state,
        personPending: true
      }
    case FETCH_STARWARS_PERSON_SUCCESS:
      // console.log('HELLO1')
      return {
        ...state,
        personPending: false,
        person: action.payload
      }
    case FETCH_STARWARS_PERSON_ERROR:
      return {
        ...state,
        personPending: false,
        error: action.error
      }
    case ADD_STARWARS_PERSON_SUCCESS:
      console.log('HELLO2', action.person)
      return {
        ...state,
        persons: [...state.persons, action.person]
      }
    default:
      return state
  }
}

// get state from store and map  to views
export const getPerson = state => state.persons
export const getPersonPending = state => state.personPending
export const getPersonError = state => state.personError
export const addPersonSuccess = state => state.person
export const addPersonError = state => state.personError
console.log('GET', getPerson)
export default personReducer
