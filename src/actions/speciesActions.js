export const FETCH_STARWARS_SPECIES_PENDING = 'FETCH_STARWARS_SPECIES_PENDING'
export const FETCH_STARWARS_SPECIES_SUCCESS = 'FETCH_STARWARS_SPECIES_SUCCESS'
export const FETCH_STARWARS_SPECICES_ERROR = 'FETCH_STARWARS_SPECICES_ERROR'

export function fetchStarWarsSpeciesPending() {
  return {
    type: FETCH_STARWARS_SPECIES_PENDING
  }
}
export function fetchStarWarsSpeciesSuccess(species) {
  return {
    type: FETCH_STARWARS_SPECIES_SUCCESS,
    species: species
  }
}
export function fetchStarWarsSpeciesError(error) {
  return {
    type: FETCH_STARWARS_SPECICES_ERROR,
    error
  }
}
