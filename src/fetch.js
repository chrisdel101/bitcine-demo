import {
  FETCH_STARWARS_PEOPLE_PENDING,
  FETCH_STARWARS_PEOPLE_SUCCESS,
  fetchProductsError
} from './actions/actions.js'
import endpoints from './endpoints'

function fetchPeople() {
  const test = `${endpoints.root}${endpoints.people(1)}`
  return dispatch => {
    dispatch(fetchPeoplePending())
    console.log('HELLO')
    fetch(test)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw res.error
        }
        console.log('res', res)
        dispatch(fetchPeopleSuccess())
        return res
      })
      .catch(error => {
        dispatch(fetchPeopleError(error))
      })
  }
}

module.exports = {
  fetchPeople
}
