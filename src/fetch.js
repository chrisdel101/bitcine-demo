import {
  fetchStarWarsPeoplePending,
  fetchStarWarsPeopleSuccess,
  fetchStarWarsPeopleError
} from './actions/actions.js'
import endpoints from './endpoints'

export default function fetchPeople() {
  const test = `${endpoints.root}${endpoints.people(1)}`
  return dispatch => {
    dispatch(fetchStarWarsPeoplePending())
    fetch(test, { mode: 'no-cors' })
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        console.log('res', res)
        dispatch(fetchStarWarsPeopleSuccess())
        return res
      })
      .catch(error => {
        dispatch(fetchStarWarsPeopleError(error))
      })
  }
}
