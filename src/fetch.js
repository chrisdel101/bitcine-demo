import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError,
  addStarWarsPersonSuccess,
  addStarWarsPersonError
} from './actions/personActions.js'
import endpoints from './endpoints'

export function fetchPeople(url) {
  // const test = `${endpoints.root}${endpoints.people(1)}`
  return dispatch => {
    dispatch(fetchStarWarsPersonPending())
    fetch(url)
      .then(res => res.json())
      .then(personRes => {
        console.log('personRes', personRes)
        if (personRes.error) {
          throw personRes.error
        }
        dispatch(fetchStarWarsPersonSuccess(personRes))
        // add to persons array here
        dispatch(addStarWarsPersonSuccess(personRes))
        if (!addStarWarsPersonSuccess(personRes).person) {
          dispatch(
            addStarWarsPersonError(
              new Error(
                'An Error at addStarWarsPersonError: no person returned'
              )
            )
          )
        }
        return personRes
      })
      .catch(error => {
        fetchStarWarsPersonError(error)
      })
  }
}
export function fetchMovie() {
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
