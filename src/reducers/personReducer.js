import {
  FETCH_STARWARS_PERSON_PENDING,
  FETCH_STARWARS_PERSON_SUCCESS,
  FETCH_STARWARS_PERSON_ERROR,
  ADD_STARWARS_PERSON_PENDING,
  ADD_STARWARS_PERSON_SUCCESS,
  ADD_STARWARS_PERSON_ERROR
} from '../actions/personActions'

const initialState = {
  currentPerson: null,
  fetchCurrentPersonPending: false,
  fetchCurrentPersonError: null,
  addPersonPending: false,
  addPersonSuccess: false,
  addPersonError: null,
  allPersons: []
}

export function personReducer(state = initialState, action) {
  // console.log('acton', action)
  switch (action.type) {
    // re: fetchCurrentPersonPending: false,
    case FETCH_STARWARS_PERSON_PENDING:
      return {
        ...state,
        currentPersonPending: true
      }
    // re:   currentPerson: null
    case FETCH_STARWARS_PERSON_SUCCESS:
      // console.log('HELLO1', action.person)
      return {
        ...state,
        currentPersonPending: false,
        currentPerson: action.person
      }
    // re: fetchCurrentPersonError: null,
    case FETCH_STARWARS_PERSON_ERROR:
      return {
        ...state,
        currentPersonPending: false,
        fetchCurrentPersonError: action.error
      }
    // re: allPersons: []
    case ADD_STARWARS_PERSON_SUCCESS:
      // console.log('HELLO2', action.person)
      return {
        ...state,
        addPersonPending: false,
        // add person to array
        allPersons: [...state.allPersons, action.person]
      }
    // re:currentPersonAddedPending: false
    case ADD_STARWARS_PERSON_PENDING:
      return {
        ...state,
        addPersonPending: true
      }
    //  re: currentPersonAddedError
    case ADD_STARWARS_PERSON_ERROR:
      console.log('HIHIHIH', action.error)
      return {
        ...state,
        addPersonPending: false,
        addPersonError: action.error
      }
    default:
      return state
  }
}

// get state from store and map  to views single

// displays the current person being fetched
export const fetchCurrentPersonSuccess = state => {
  return state.personReducer.currentPerson
}
// displays true/false
export const fetchCurrentPersonPending = state =>
  state.personReducer.currentPersonPending
export const fetchCurrentPersonError = state =>
  // displays error
  state.personReducer.fetchCurrentPersonError
// displays current person added to persons array
export const addPersonSuccess = state => state.personReducer.currentPerson
export const addPersonPending = state => state.personReducer.addPersonPending
// displays error
export const addPersonError = state => {
  // consol e.log('state', state)
  return state.personReducer.addPersonError
}
// returns persons array
export const viewPersonsArray = state => state.personReducer.allPersons
export default personReducer
