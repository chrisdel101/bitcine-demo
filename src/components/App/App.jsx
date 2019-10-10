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
// import {
//   fetchCurrentFilmSuccess,
//   fetchCurrentFilmPending,
//   fetchCurrentFilmError,
//   addFilmSuccess,
//   addFilmError,
//   addFilmPending,
//   viewFilmsArray
// } from '../../reducers/filmReducer'
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
    this.callFetchPersons('all')
    // this.callFetchFilms([
    //   'https://swapi.co/api/films/2/',
    //   'https://swapi.co/api/films/6/',
    //   'https://swapi.co/api/films/3/',
    //   'https://swapi.co/api/films/1/',
    //   'https://swapi.co/api/films/7/'
    // ])
  }
  // load all persons - all or single person
  callFetchPersons(type) {
    // return new Promise((resolve, reject) => {
    const url = `${endpoints.root}${endpoints.personsPage(
      this.state.currentPersonsPage
    )}`
    console.log('app', url)
    this.props
      .fetchPeople(url, type)
      .then(res => {
        console.log('res', res)
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
    console.log(e.target.innerHTML)
    console.log(e.target.classList)
    console.log(e.target.attributes)
    // icon component
    if (e.target.classList.contains('icon')) {
      if (e.target.innerHTML === 'arrow_forward_ios') {
        // paginate forward
        // this.paginateUp(this.props.viewPersonsArray)
      } else if (e.target.innerHTML === 'arrow_back_ios') {
        // paginate backward
        // this.paginateDown(this.props.viewPersonsArray)
        // return to index page on back arrow
      } else if (e.target.innerHTML === 'arrow_back') {
        window.location = '#/'
      }
    } else if (e.target.classList.contains('person-name-cell')) {
      // redner character page on name click
      const personObj = this.renderPersonPage(e)
      console.log('PER', personObj)
      // this.callFetchFilms(personObj.films)
    }
  }
  // renders page and returns person obj
  renderPersonPage(e) {
    const personNameKey = e.target.innerHTML
    const personObj = this.props.viewPersonsArray.find(person => {
      return Object.keys(person)[0] === personNameKey
    })
    const personSlug = slugify(personNameKey).toLowerCase()
    console.log(personObj)
    console.log(personSlug)
    this.setState({
      currentPersonObj: personObj
    })
    window.location = `#/person/${personSlug}`
    return personObj[personNameKey]
  }
  paginateDown(arr) {
    console.log('down', arr)
    let sliceEnd = this.state.currentCount - this.state.increment
    console.log('end', sliceEnd)
    // don't allow decrement pass list end
    if (sliceEnd <= 0) return
    let count = sliceEnd - this.state.increment
    console.log('end', count)
    // let indexes = utils.range(sliceStart + 1, count + 1, 1)
    let chunk = arr.slice(count, sliceEnd)
    console.log('chunk', chunk)
    this.setState({
      currentCount: sliceEnd,
      lastCount: count,
      currentPersonsChunk: chunk
    })
  }
  // pass in full state array
  paginateUp(arr) {
    console.log(arr)
    //increment and get current count
    let count = this.state.currentCount + this.state.increment
    console.log('count', count)
    let sliceStart = count - this.state.increment
    console.log('start', sliceStart)
    let sliceEnd = count
    if (sliceEnd > this.props.viewPersonsArray.length) return
    console.log('end', sliceEnd)
    // let indexes = utils.range(sliceStart + 1, sliceEnd + 1, 1)
    let chunk = arr.slice(sliceStart, sliceEnd)
    console.log('chunk', chunk)
    this.setState({
      currentCount: count,
      lastCount: sliceEnd,
      currentPersonsChunk: chunk
    })
    // if (utils.checkRoute('comments')) {
    //   return {
    //     chunkComments: chunk,
    //     counter: count,
    //     indexes: indexes
    //   }
    // } else if (utils.checkRoute('personUp')) {
    //   console.log('chunk', chunk)
    //   return {
    //     chunkShowNew: chunk,
    //     counter: count,
    //     indexes: indexes
    //   }
    // } else {
    //   return {
    //     chunkData: chunk,
    //     counter: count,
    //     indexes: indexes
    //   }
    // }
  }
  render() {
    // console.log('props', this.state)
    return (
      <div className="App">
        <Router
          allProps={this.props}
          onClick={this.handleClick}
          personsData={
            this.state.currentPersonsChunk
              ? this.state.currentPersonsChunk
              : null
          }
          indexTableCols={this.state.indexTableCols}
          personTableCols={this.state.personTableCols}
          currentPersonObj={this.state.currentPersonObj}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetchCurrentPersonSuccess: fetchCurrentPersonSuccess(state),
  fetchCurrentPersonPending: fetchCurrentPersonPending(state),
  fetchCurrentPersonError: fetchCurrentPersonError(state),
  fetchCurrentPersonsArrSuccess: fetchCurrentPersonsArrSuccess(state),
  fetchCurrentPersonsArrError: fetchCurrentPersonsArrError(state),
  fetchCurrentPersonsArrPending: fetchCurrentPersonsArrPending(state)
  // fetchCurrentFilmSuccess: fetchCurrentFilmSuccess(state),
  // fetchCurrentFilmPending: fetchCurrentFilmPending(state),
  // fetchCurrentFilmError: fetchCurrentFilmError(state),
  // addFilmSuccess: addFilmSuccess(state),
  // addFilmError: addFilmError(state),
  // addFilmPending: addFilmPending(state),
  // viewFilmsArray: viewFilmsArray(state)
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
