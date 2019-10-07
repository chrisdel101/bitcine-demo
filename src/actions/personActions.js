export const FETCH_STARWARS_PERSON_PENDING = 'FETCH_STARWARS_PERSON_PENDING'
export const FETCH_STARWARS_PERSON_SUCCESS = 'FETCH_STARWARS_PERSON_SUCCESS'
export const FETCH_STARWARS_PERSON_ERROR = 'FETCH_STARWARS_PERSON_ERROR'

export function fetchStarWarsPersonPending() {
  return {
    type: FETCH_STARWARS_PERSON_PENDING
  }
}
export function fetchStarWarsPersonSuccess(person) {
  return {
    type: FETCH_STARWARS_PERSON_SUCCESS,
    person: {
      [person.name]: person
    }
  }
}
export function fetchStarWarsPersonError(error) {
  return {
    type: FETCH_STARWARS_PERSON_ERROR,
    error
  }
}
// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
