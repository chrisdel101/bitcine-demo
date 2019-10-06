export const FETCH_STARWARS_PEOPLE_PENDING = 'FETCH_STARWARS_PEOPLE_PENDING'
export const FETCH_STARWARS_PEOPLE_SUCCESS = 'FETCH_STARWARS_PEOPLE_SUCCESS'
export const FETCH_STARWARS_PEOPLE_ERROR = 'FETCH_STARWARS_PEOPLE_ERROR'

export function fetchStarWarsPeoplePending() {
  return {
    type: FETCH_STARWARS_PEOPLE_PENDING
  }
}
export function fetchStarWarsPeopleSuccess(person) {
  return {
    type: FETCH_STARWARS_PEOPLE_SUCCESS,
    person
  }
}
export function fetchStarWarsPeopleError(error) {
  return {
    type: FETCH_STARWARS_PEOPLE_ERROR,
    error
  }
}
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
