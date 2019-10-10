export const FETCH_STARWARS_PERSON_PENDING = 'FETCH_STARWARS_PERSON_PENDING'
export const FETCH_STARWARS_PERSON_SUCCESS = 'FETCH_STARWARS_PERSON_SUCCESS'
export const FETCH_STARWARS_PERSON_ERROR = 'FETCH_STARWARS_PERSON_ERROR'
export const ADD_STARWARS_PERSONS_ARR_SUCCESS =
  'ADD_STARWARS_PERSONS_ARR_SUCCESS'
export const ADD_STARWARS_PERSONS_ARR_ERROR = 'ADD_STARWARS_PERSONS_ARR_ERROR'
export const ADD_STARWARS_PERSONS_ARR_PENDING =
  'ADD_STARWARS_PERSONS_ARR_PENDING'

export function fetchStarWarsPersonPending() {
  return {
    type: FETCH_STARWARS_PERSON_PENDING
  }
}
export function fetchStarWarsPersonSuccess(person) {
  console.log('pers', person)
  return {
    type: FETCH_STARWARS_PERSON_SUCCESS,
    person: person
  }
}
export function fetchStarWarsPersonError(error) {
  return {
    type: FETCH_STARWARS_PERSON_ERROR,
    error
  }
}
export function fetchStarWarPersonsArrSuccess(personsArr) {
  console.log('ARR', personsArr)
  // set api array to current array
  return {
    currentPersonsArr: personsArr,
    type: ADD_STARWARS_PERSONS_ARR_SUCCESS
  }
}
export function fetchStarWarPersonsArrPending(person) {
  return {
    type: ADD_STARWARS_PERSONS_ARR_PENDING
  }
}
export function fetchStarWarPersonsArrError(error) {
  return {
    type: ADD_STARWARS_PERSONS_ARR_ERROR,
    error: error
  }
}
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
