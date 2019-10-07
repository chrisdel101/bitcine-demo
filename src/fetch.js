import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError
} from './actions/personActions.js'
import endpoints from './endpoints'

export default function fetchPeople() {
  const test = `${endpoints.root}${endpoints.people(1)}`
  return dispatch => {
    dispatch(fetchStarWarsPersonPending())
    fetch(test)
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        if (res.error) {
          throw res.error
        }
        dispatch(fetchStarWarsPersonSuccess(res))
        return res
      })
      .catch(error => {
        dispatch(fetchStarWarsPersonError(error))
      })
  }
}
