import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError,
  addStarWarsPersonSuccess,
  addStarWarsPersonError
} from './actions/personActions.js'
import {
  fetchStarWarsFilmPending,
  fetchStarWarsFilmSuccess,
  fetchStarWarsFilmError,
  addStarWarsFilmSuccess,
  addStarWarsFilmError
} from './actions/filmActions.js'

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
          // console.log(res)
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
export function fetchFilms(url) {
  return dispatch => {
    return new Promise((resolve, reject) => {
      dispatch(fetchStarWarsFilmPending())
      fetch(url)
        .then(res => {
          // console.log(res)
          return res.json()
        })
        .then(filmRes => {
          console.log('filmRes', filmRes)
          // console.log('DETAILS', filmRes.detail === 'Not found')
          if (filmRes.detail === 'Not found') {
            console.error('REJECTED')
            reject('rejected: no data found or 404')
            throw filmRes.error
          }
          if (!addStarWarsFilmSuccess(filmRes).person) {
            dispatch(
              addStarWarsFilmError(
                new Error(
                  'An Error at addStarWarsFilmError: no person returned'
                )
              )
            )
            reject('rejected: no data found or 404')
            throw filmRes.error
          }
          dispatch(fetchStarWarsFilmSuccess(filmRes))
          // add to Films array here
          dispatch(addStarWarsFilmSuccess(filmRes))
          resolve(filmRes)
          return filmRes
        })
        .catch(error => {
          fetchStarWarsFilmError(error)
        })
    })
  }
}
