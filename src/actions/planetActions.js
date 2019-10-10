export const FETCH_STARWARS_PLANET_PENDING = 'FETCH_STARWARS_PLANET_PENDING'
export const FETCH_STARWARS_PLANET_SUCCESS = 'FETCH_STARWARS_PLANET_SUCCESS'
export const FETCH_STARWARS_PLANET_ERROR = 'FETCH_STARWARS_PLANET_ERROR'

export function fetchStarWarsPlanetPending() {
  return {
    type: FETCH_STARWARS_PLANET_PENDING
  }
}
export function fetchStarWarsPlanetSuccess(planet) {
  console.log('plan', planet)
  return {
    type: FETCH_STARWARS_PLANET_SUCCESS,
    planet: planet
  }
}
export function fetchStarWarsPlanetError(error) {
  return {
    type: FETCH_STARWARS_PLANET_ERROR,
    error
  }
}

// https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao
