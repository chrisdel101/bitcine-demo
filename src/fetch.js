import {
  fetchStarWarsPersonPending,
  fetchStarWarsPersonSuccess,
  fetchStarWarsPersonError,
  fetchStarWarPersonsArrSuccess,
  fetchStarWarPersonsArrPending,
  fetchStarWarPersonsArrError
} from './actions/personActions.js'
import {
  fetchStarWarsFilmsArrPending,
  fetchStarWarsFilmSuccess,
  fetchStarWarsFilmError,
  addStarWarsFilmSuccess,
  addStarWarsFilmPending,
  clearStarWarsFilms
  // addStarWarsFilmError,
  // checkStarWarsFilmAdded
} from './actions/filmActions.js'
import {
  fetchStarWarsPlanetPending,
  fetchStarWarsPlanetSuccess,
  fetchStarWarsPlanetError
} from './actions/planetActions.js'
import {
  fetchStarWarsSpeciesPending,
  fetchStarWarsSpeciesSuccess,
  fetchStarWarsSpeciesError
} from './actions/speciesActions.js'
import utils from './utils'

// call paginated people
export function fetchPeople(url, type) {
  // console.log(url)
  // console.log(type)
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
          // console.log('personRes', response)
          // ERROR handling
          if (utils.isObjEmpty(response)) {
            console.error('Promise REJECTED')
            if (type === 'all') {
              if (!response.results || !response.results.length) {
                console.error('Error: Empty persons array')
              }
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
          // index page
          if (type === 'all') {
            dispatch(fetchStarWarPersonsArrSuccess(response.results))
            // resolve()
            // character page
          } else if (type === 'single') {
            dispatch(fetchStarWarsPersonSuccess(response))
            fetchFilms(response.films, dispatch)
            fetchPlanet(response.homeworld, dispatch)
            fetchSpecies(response.species[0], dispatch)
          }
          resolve(response)
        })
        .catch(error => {
          console.error('An error occured in fetchPeople', error)
        })
    })
  }
}
export function fetchFilms(filmsUrlsArr, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(clearStarWarsFilms())
    dispatch(fetchStarWarsFilmsArrPending())
    filmsUrlsArr.forEach(filmUrl => {
      fetch(filmUrl)
        .then(res => res.json())
        .then(response => {
          // console.log('film res', response)
          // ERROR handling
          if (utils.isObjEmpty(response)) {
            console.error('Promise REJECTED')
            // if (!response.results || !response.results.length) {
            console.error('Error: Empty persons array')
            // }
            dispatch(fetchStarWarsFilmError(new Error('Error in fetchFilm()')))
            // }
            return reject('error in fetchFilm() or 404')
          }

          dispatch(fetchStarWarsFilmSuccess(response))
          dispatch(addStarWarsFilmPending)
          dispatch(addStarWarsFilmSuccess(response))
          // TODO
          // dispatch(checkStarWarsFilmAdded(response.title))
          return resolve(response)
        })
        .catch(error => {
          console.error('An error occured in fetchFilms', error)
        })
    })
  })
}
export function fetchPlanet(planetUrl, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(fetchStarWarsPlanetPending())
    fetch(planetUrl)
      .then(res => res.json())
      .then(response => {
        console.log('planet res', response)
        // ERROR handling
        if (utils.isObjEmpty(response)) {
          console.error('Promise REJECTED')
          console.error('Error: Empty planet response')
          dispatch(
            fetchStarWarsPlanetError(new Error('Error in fetchPlanet()'))
          )
          return reject('error in fetchPlanet() or 404')
        }
        dispatch(fetchStarWarsPlanetSuccess(response))
        return resolve(response)
      })
      .catch(error => {
        console.error('An error occured in fetchPlanet', error)
      })
  })
}
export function fetchSpecies(speciesUrl, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(fetchStarWarsSpeciesPending())
    fetch(speciesUrl)
      .then(res => res.json())
      .then(response => {
        console.log('planet res', response)
        // ERROR handling
        if (utils.isObjEmpty(response)) {
          console.error('Promise REJECTED')
          console.error('Error: Empty species response')
          dispatch(
            fetchStarWarsSpeciesError(new Error('Error in fetchSpecies()'))
          )
          return reject('error in fetchSpecies() or 404')
        }
        dispatch(fetchStarWarsSpeciesSuccess(response))
        return resolve(response)
      })
      .catch(error => {
        console.error('An error occured in fetchSpecies', error)
      })
  })
}
