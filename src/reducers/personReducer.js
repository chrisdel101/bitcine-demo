import {
  FETCH_STARWARS_PERSON_PENDING,
  FETCH_STARWARS_PERSON_SUCCESS,
  FETCH_STARWARS_PERSON_ERROR,
  ADD_STARWARS_PERSONS_ARR_PENDING,
  ADD_STARWARS_PERSONS_ARR_SUCCESS,
  ADD_STARWARS_PERSONS_ARR_ERROR
} from '../actions/personActions'

const initialState = {
  // single person
  currentPerson: null,
  fetchCurrentPersonPending: false,
  fetchCurrentPersonError: null,
  // current char arr
  currentPersonsArr: null,
  fetchCurrentPersonsArrPending: false,
  fetchCurrentPersonsArrError: null
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
    // re: fetchCurrentPersonsArrPending: false,
    case ADD_STARWARS_PERSONS_ARR_PENDING:
      return {
        ...state,
        fetchCurrentPersonsArrPending: true
      }
    // re:   currentPersonsArr: null
    case ADD_STARWARS_PERSONS_ARR_SUCCESS:
      return {
        ...state,
        fetchCurrentPersonsArrPending: false,
        currentPersonsArr: action.currentPersonsArr
      }
    // re: fetchCurrentPersonsArrError: null,
    case ADD_STARWARS_PERSONS_ARR_ERROR:
      return {
        ...state,
        currentPersonPending: false,
        fetchCurrentPersonsArrError: action.error
      }
    default:
      return state
  }
}

// displays the current person being fetched
export const fetchCurrentPersonSuccess = state =>
  state.personReducer.currentPerson
// displays true/false
export const fetchCurrentPersonPending = state =>
  state.personReducer.currentPersonPending
export const fetchCurrentPersonError = state =>
  // displays error
  state.personReducer.fetchCurrentPersonError
// displays current person arr from api page
export const fetchCurrentPersonsArrSuccess = state =>
  state.personReducer.currentPersonsArr
export const fetchCurrentPersonsArrPending = state =>
  state.personReducer.fetchCurrentPersonsArrPending
// displays error
export const fetchCurrentPersonsArrError = state =>
  state.personReducer.fetchCurrentPersonsArrError

export default personReducer
