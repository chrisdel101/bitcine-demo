import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError,
  fetchStarWarPersonsArrSuccess,
  fetchStarWarPersonsArrPending,
  fetchStarWarPersonsArrError
} from './actions/personActions.js'
// import {
//   fetchStarWarsFilmPending,
//   fetchStarWarsFilmSuccess,
//   fetchStarWarsFilmError,
//   addStarWarsFilmSuccess,
//   addStarWarsFilmError
// } from './actions/filmActions.js'
import utils from './utils'
// call paginated people
export function fetchPeople(url, type) {
  console.log(url)
  console.log(type)
  return dispatch => {
    return new Promise((resolve, reject) => {
      if (type === 'all') {
        dispatch(fetchStarWarPersonsArrPending())
      } else if (type === 'single') {
        dispatch(fetchStarWarsPersonPending())
      }
      fetch(url)
        .then(res => res.json())
        .then(response => {
          console.log('personRes', response)
          // ERROR handling
          if (
            utils.isObjEmpty(response) ||
            !response.results ||
            !response.results.length
          ) {
            console.error('Promise REJECTED')
            if (type === 'all') {
              dispatch(
                fetchStarWarPersonsArrError(new Error('Error in fetchPeople()'))
              )
            } else if (type === 'single') {
              dispatch(
                fetchStarWarsPersonError(new Error('Error in fetchPeople()'))
              )
            }
            return reject('error in fetchPeople() or 404')
          }
          if (type === 'all') {
            dispatch(fetchStarWarPersonsArrSuccess(response.results))
          } else if (type === ' single') {
            dispatch(fetchStarWarsPersonSuccess())
          }
          return resolve(response)
        })
        .catch(error => {
          console.error('An error occured in fetchPeople', error)
        })
    })
  }
}
// export function fetchFilms(url) {
//   // console.log('URL', url)
//   return dispatch => {
//     return new Promise((resolve, reject) => {
//       dispatch(fetchStarWarsFilmPending())
//       fetch(url)
//         .then(res => {
//           return res.json()
//         })
//         .then(filmRes => {
//           // console.log('filmRes', filmRes)
//           if (filmRes.detail === 'Not found') {
//             console.error('promise REJECTED')
//             reject('rejected: no data found or 404')
//             throw filmRes.error
//           }
//           if (utils.isObjEmpty(filmRes)) {
//             dispatch(
//               addStarWarsFilmError(
//                 new Error(
//                   'An Error at addStarWarsFilmError: empty response obj'
//                 )
//               )
//             )
//             reject('rejected: addStarWarsFilmError: empty response obj')
//             throw filmRes.error
//           }
//           dispatch(fetchStarWarsFilmSuccess(filmRes))
//           // add to Films array here
//           dispatch(addStarWarsFilmSuccess(filmRes))
//           resolve(filmRes)
//           return filmRes
//         })
//         .catch(error => {
//           fetchStarWarsFilmError(error)
//         })
//     })
//   }
// }
