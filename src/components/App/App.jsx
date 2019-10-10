import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import Router from '../Router.jsx'
import { fetchPeople as fetchPeopleAction } from '../../fetch'
// import { fetchFilms as fetchFilmsAction } from '../../fetch'
import { bindActionCreators } from 'redux'
import {
  fetchCurrentPersonSuccess,
  fetchCurrentPersonPending,
  fetchCurrentPersonError,
  fetchCurrentPersonsArrSuccess,
  fetchCurrentPersonsArrError,
  fetchCurrentPersonsArrPending
  // viewPersonsArray
} from '../../reducers/personReducer'
import {
  fetchCurrentFilmSuccess,
  fetchCurrentFilmPending,
  fetchCurrentFilmError,
  addFilmSuccess,
  // addFilmError,
  // addFilmPending,
  allFilms
} from '../../reducers/filmReducer'
import {
  fetchCurrentPlanetSuccess,
  fetchCurrentPlanetPending,
  fetchCurrentPlanetError
} from '../../reducers/planetReducer'
import endpoints from '../../endpoints'
import slugify from 'slugify'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPersonsPage: 1,
      indexTableCols: ['Name', 'Birth Year', 'Height', 'Mass'],
      personTableCols: [
        'Name',
        'Birth Year',
        'Height',
        'Mass',
        'Hair Color',
        'Eye Color',
        'Gender',
        'Films',
        'Homeworld',
        'Skin Color',
        'Species',
        'Starship',
        'Vehicles'
      ],
      currentPersonObj: 'No Character Chosen'
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // console.log('this', this)
    // const { fetchPeople } = this.props
    this.callFetchPersons(
      'all',
      `${endpoints.root}${endpoints.personsPage(this.state.currentPersonsPage)}`
    )
    // this.callFetchFilms([
    //   'https://swapi.co/api/films/2/',
    //   'https://swapi.co/api/films/6/',
    //   'https://swapi.co/api/films/3/',
    //   'https://swapi.co/api/films/1/',
    //   'https://swapi.co/api/films/7/'
    // ])
  }
  // load all persons - all or single person
  callFetchPersons(type, url) {
    // console.log('app', url)
    this.props
      .fetchPeople(url, type)
      .then(res => {
        // console.log('res', res)
      })
      .catch(e => {
        console.error('Error in API call', e)
      })
  }
  // callFetchFilms(filmsArr) {
  //   return new Promise((resolve, reject) => {
  //     for (let i = 0; i < filmsArr.length; i++) {
  //       console.log(i)
  //       this.props.fetchFilms(filmsArr[i]).catch(e => {
  //         console.error('Error in API call', e)
  //       })
  //     }
  //   }).finally(() => {
  //     console.log('done')
  //   })
  // }
  handleClick(e) {
    // console.log(e.target.innerHTML)
    // icon component
    if (e.target.classList.contains('icon')) {
      if (e.target.innerHTML === 'arrow_forward_ios') {
        // paginate forward
        this.paginateUp()
      } else if (e.target.innerHTML === 'arrow_back_ios') {
        // paginate backward
        this.paginateDown()
        // return to index page on back arrow
      } else if (e.target.innerHTML === 'arrow_back') {
        window.location = '#/'
      }
    } else if (e.target.classList.contains('person-name-cell')) {
      // redner character page on name click
      const personObj = this.renderPersonPage(e)
      // console.log('PER', personObj)
      // this.callFetchFilms(personObj.films)
    }
  }
  // renders page and returns person obj
  renderPersonPage(e) {
    const personNameVal = e.target.innerHTML
    const personObj = this.props.fetchCurrentPersonsArrSuccess.find(person => {
      return person.name === personNameVal
    })
    // console.log(personObj)
    // fetch api data
    this.callFetchPersons('single', personObj.url)
    // add delay to render - TO DO - fix later
    setTimeout(() => {
      // render template
      window.location = `#/person/${slugify(personObj.name).toLowerCase()}`
    }, 400)
    return personObj
  }
  paginateDown() {
    //increment current page count
    this.setState({
      currentPersonsPage: this.state.currentPersonsPage - 1
    })
    if (this.state.currentPersonsPage && this.state.currentPersonsPage > 1) {
      setTimeout(() => {
        //  re-call api with number
        this.callFetchPersons(
          'all',
          `${endpoints.root}${endpoints.personsPage(
            this.state.currentPersonsPage
          )}`
        )
      })
    } else {
      console.error('Cannot paginate lower than page 1')
    }
  }
  // pass in full state array
  paginateUp() {
    //increment current page count
    this.setState({
      currentPersonsPage: this.state.currentPersonsPage + 1
    })
    setTimeout(() => {
      //  re-call api with number
      this.callFetchPersons(
        'all',
        `${endpoints.root}${endpoints.personsPage(
          this.state.currentPersonsPage
        )}`
      )
    })
  }
  render() {
    // console.log('props', this.state)
    return (
      <div className="App">
        <Router
          onClick={this.handleClick}
          personData={
            this.props.fetchCurrentPersonSuccess
              ? this.props.fetchCurrentPersonSuccess
              : null
          }
          filmsData={this.props.allFilms.length ? this.props.allFilms : null}
          planetData={
            this.props.fetchCurrentPlanetSuccess
              ? this.props.fetchCurrentPlanetSuccess
              : null
          }
          personsData={
            this.props.fetchCurrentPersonsArrSuccess
              ? this.props.fetchCurrentPersonsArrSuccess
              : null
          }
          indexTableCols={this.state.indexTableCols}
          personTableCols={this.state.personTableCols}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  // persons
  fetchCurrentPersonSuccess: fetchCurrentPersonSuccess(state),
  fetchCurrentPersonPending: fetchCurrentPersonPending(state),
  fetchCurrentPersonError: fetchCurrentPersonError(state),
  fetchCurrentPersonsArrSuccess: fetchCurrentPersonsArrSuccess(state),
  fetchCurrentPersonsArrError: fetchCurrentPersonsArrError(state),
  fetchCurrentPersonsArrPending: fetchCurrentPersonsArrPending(state),
  // films
  fetchCurrentFilmSuccess: fetchCurrentFilmSuccess(state),
  fetchCurrentFilmPending: fetchCurrentFilmPending(state),
  fetchCurrentFilmError: fetchCurrentFilmError(state),
  addFilmSuccess: addFilmSuccess(state),
  // addFilmError: addFilmError(state),
  // addFilmPending: addFilmPending(state),
  allFilms: allFilms(state),
  // planets
  fetchCurrentPlanetSuccess: fetchCurrentPlanetSuccess(state),
  fetchCurrentPlanetPending: fetchCurrentPlanetPending(state),
  fetchCurrentPlanetError: fetchCurrentPlanetError(state)
})
// takes the fetchPerson call and dispatches it
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPeople: fetchPeopleAction
      // fetchFilms: fetchFilmsAction
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
