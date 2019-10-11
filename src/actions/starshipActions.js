export const FETCH_STARWARS_STARSHIP_ARR_PENDING =
  'FETCH_STARWARS_STARSHIP_ARR_PENDING'
export const FETCH_STARWARS_STARSHIP_SUCCESS = 'FETCH_STARWARS_STARSHIP_SUCCESS'
export const FETCH_STARWARS_STARSHIP_ERROR = 'FETCH_STARWARS_STARSHIP_ERROR'
export const ADD_STARWARS_STARSHIP_SUCCESS = 'ADD_STARWARS_STARSHIP_SUCCESS'
export const ADD_STARWARS_STARSHIP_ERROR = 'ADD_STARWARS_STARSHIP_ERROR'
export const ADD_STARWARS_STARSHIP_PENDING = 'ADD_STARWARS_STARSHIP_PENDING'
export const CHECK_STARWARS_STARSHIP_ADDED = 'CHECK_STARWARS_STARSHIP_ADDED'
export const CLEAR_STARWARS_STARSHIP = 'CLEAR_STARWARS_STARSHIP'

// todo - add pending and success
export function clearStarWarsStarships() {
  return {
    type: CLEAR_STARWARS_STARSHIP
  }
}
export function fetchStarWarsStarshipArrPending() {
  return {
    type: FETCH_STARWARS_STARSHIP_ARR_PENDING
  }
}
export function fetchStarWarsStarshipSuccess(starship) {
  return {
    type: FETCH_STARWARS_STARSHIP_SUCCESS,
    starship: starship
  }
}
export function fetchStarWarsStarshipError(error) {
  return {
    type: FETCH_STARWARS_STARSHIP_ERROR,
    error
  }
}
export function addStarWarsStarshipSuccess(starship) {
  // console.log('starship', starship)
  return {
    starship: starship,
    type: ADD_STARWARS_STARSHIP_SUCCESS
  }
}
export function addStarWarsStarshipPending() {
  return {
    type: ADD_STARWARS_STARSHIP_PENDING
  }
}
export function addStarWarsStarshipError(error) {
  return {
    type: ADD_STARWARS_STARSHIP_ERROR,
    error: error
  }
}
// TODO
export function checkStarWarsStarshipAdded(shipName) {
  return {
    shipName: shipName,
    type: CHECK_STARWARS_STARSHIP_ADDED
  }
}
