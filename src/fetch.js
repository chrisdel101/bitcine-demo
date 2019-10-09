import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError,
  addStarWarsPersonSuccess,
  addStarWarsPersonError
} from './actions/personActions.js'
import endpoints from './endpoints'

// console.log(url)
// 	let arr = []
// 	return new Promise((resolve, reject) => {
// 		getTopIDs(url).then(array => {
// 			array.map((id, index) => {
// 				return id
// 			}).map((id, index) => {
// 				getStory(id).then(obj => {
// 					arr.push(obj)
// 				}).catch(e => console.error(e))
// 			})
// 		})
// 		setTimeout(function() {
// 			resolve(arr)
// 		}, 2000)
// 	})
export function fetchPeople(url) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(fetchStarWarsPersonPending())
      fetch(url)
        .then(res => {
          console.log(res)
          return res.json()
        })
        .then(personRes => {
          console.log('personRes', personRes)
          // console.log('DETAILS', personRes.detail === 'Not found')
          if (personRes.detail === 'Not found') {
            console.error('REJECTED')
            reject('rejected: no data found or 404')
            throw personRes.error
          }
          if (!addStarWarsPersonSuccess(personRes).person) {
            dispatch(
              addStarWarsPersonError(
                new Error(
                  'An Error at addStarWarsPersonError: no person returned'
                )
              )
            )
            reject('rejected: no data found or 404')
            throw personRes.error
          }
          dispatch(fetchStarWarsPersonSuccess(personRes))
          // add to persons array here
          dispatch(addStarWarsPersonSuccess(personRes))
          resolve(personRes)
          return personRes
        })
        .catch(error => {
          fetchStarWarsPersonError(error)
        })
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
          // console.error('REJECTED')
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
