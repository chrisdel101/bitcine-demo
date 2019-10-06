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
    console.log(test)
    fetch(test)
      .then(res => res.json())
      .then(res => {
        console.log('res', res)
        if (res.error) {
          throw res.error
        }
        dispatch(fetchStarWarsPeopleSuccess())
        return res
      })
      .catch(error => {
        dispatch(fetchStarWarsPeopleError(error))
      })
  }
}
