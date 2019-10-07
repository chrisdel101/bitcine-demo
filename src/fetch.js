import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError,
  addStarWarsPersonSuccess,
  addStarWarsPersonError
} from './actions/personActions.js'
import endpoints from './endpoints'

export default function fetchPeople() {
  const test = `${endpoints.root}${endpoints.people(1)}`
  return dispatch => {
    dispatch(fetchStarWarsPersonPending())
    fetch(test)
      .then(res => res.json())
      .then(personRes => {
        console.log('personRes', personRes)
        if (personRes.error) {
          throw personRes.error
        }
        dispatch(fetchStarWarsPersonSuccess(personRes))
        dispatch(addStarWarsPersonSuccess(personRes))
        return personRes
      })
      .catch(error => {
        dispatch(fetchStarWarsPersonError(error))
      })
  }
}
