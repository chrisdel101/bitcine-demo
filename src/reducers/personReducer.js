import {
  FETCH_STARWARS_PERSON_PENDING,
  FETCH_STARWARS_PERSON_SUCCESS,
  FETCH_STARWARS_PERSON_ERROR,
  ADD_STARWARS_PERSON_SUCCESS,
  ADD_STARWARS_PERSON_ERROR
} from '../actions/personActions'

const initialState = {
  currentPerson: null,
  currentPeronFetchPending: false,
  currentPersonFethcError: null,
  currentPersonAddedPending: false,
  persons: []
}

export function personReducer(state = initialState, action) {
  console.log('acton', action)
  switch (action.type) {
    case FETCH_STARWARS_PERSON_PENDING:
      return {
        ...state,
        currentPeronPending: true
      }
    case FETCH_STARWARS_PERSON_SUCCESS:
      console.log('HELLO1', action.person)
      return {
        ...state,
        currentPeronPending: false,
        currentPerson: action.person
      }
    case FETCH_STARWARS_PERSON_ERROR:
      return {
        ...state,
        currentPeronPending: false,
        error: action.error
      }
    case ADD_STARWARS_PERSON_SUCCESS:
      // console.log('HELLO2', action.person)
      return {
        ...state,
        persons: [...state.persons, action.person]
      }
    case ADD_STARWARS_PERSON_ERROR:
      return {
        ...state,
        error: action.error
      }

    default:
      return state
  }
}

// get state from store and map  to views single

// displays the current person being fetched
export const fetchProductsSuccess = state => {
  console.log('state', state)
  return state.personReducer.currentPerson
}
// displays true/false
export const getcurrentPeronPending = state =>
  state.personReducer.currentPeronPending
export const getPersonError = state => state.personReducer.currentPersonError
// displays error
// displays current person added to persons array
export const addPersonSuccess = state => state.personReducer.addPersonSuccess
export const addPersonError = state => state.personReducer.currentPersonError
// displays error
// displays all persons in array
export const viewAllPersons = state => {
  // console.log('state', state)
  return state.personReducer.persons
}
export default personReducer
