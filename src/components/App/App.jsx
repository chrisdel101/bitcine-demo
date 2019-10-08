import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
// import Page from '../Page/Page.jsx'
import { fetchPeople as fetchPeopleAction } from '../../fetch'
import { bindActionCreators } from 'redux'
import {
  fetchCurrentPersonSuccess,
  fetchCurrentPersonPending,
  fetchCurrentPersonError,
  addPersonSuccess,
  addPersonError,
  addPersonPending,
  viewPersonsArray
} from '../../reducers/personReducer'
import endpoints from '../../endpoints'
import utils from '../../utils'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  componentDidMount() {
    const { fetchPeople } = this.props
    function callFetch() {
      let i = 1
      while (i < 20) {
        const test = `${endpoints.root}${endpoints.people(i)}`
        fetchPeople(test)
          .then(res => {
            console.log('Response', res)
          })
          .catch(e => {
            console.error('Error in API call', e)
          })
        i++
      }
    }
    callFetch()
  }
  updatePageState(state) {
    // let arr
    if (utils.checkRoute('comments')) {
      let arr = state.fullComments
      let newState = this.paginate(arr)
      // console.log('new', newState.chunkComments)
      this.setState({
        chunkComments: newState.chunkComments,
        counter: newState.counter,
        indexes: newState.indexes
      })
    } else if (utils.checkRoute('shownew')) {
      let arr = state.fullShowNew
      // if nested arrays, index into
      if (Array.isArray(arr[0])) {
        arr = state.fullShowNew[0]
      }
      let newState = this.paginate(arr)
      console.log('new', newState)
      this.setState({
        chunkShowNew: newState,
        counter: newState.counter
      })
    } else {
      let arr = state.fullData
      let newState = this.paginateUp(arr)
      console.log('NEW', newState)
      // console.log('new', newState)
      // this.setState({
      //   chunkData: newState,
      //   counter: newState.counter
      // })
    }
  }
  paginateUp(arr) {
    console.log('Arr', arr)
    //increment and get current count
    let count = this.state.counter + 30
    // console.log('count', count)
    let sliceStart = count - 30
    // console.log('start', sliceStart)
    let sliceEnd = count
    /* console.log('end', sliceEnd) */
    let indexes = utils.range(sliceStart + 1, sliceEnd + 1, 1)
    let chunk = arr.slice(sliceStart, sliceEnd)
    /* console.log('chunk', chunk) */
    if (utils.checkRoute('comments')) {
      return {
        chunkComments: chunk,
        counter: count,
        indexes: indexes
      }
    } else if (utils.checkRoute('personUp')) {
      console.log('chunk', chunk)
      return {
        chunkShowNew: chunk,
        counter: count,
        indexes: indexes
      }
    } else {
      return {
        chunkData: chunk,
        counter: count,
        indexes: indexes
      }
    }
  }
  paginateDown(arr) {
    console.log('Arr', arr)
    //increment and get current count
    let count = this.state.counter - 30
    if (count > 0) return
    // console.log('count', count)
    let sliceStart = count - 30
    // console.log('start', sliceStart)
    let sliceEnd = count
    /* console.log('end', sliceEnd) */
    let indexes = utils.range(sliceStart + 1, sliceEnd + 1, 1)
    let chunk = arr.slice(sliceStart, sliceEnd)
    /* console.log('chunk', chunk) */
    if (utils.checkRoute('comments')) {
      return {
        chunkComments: chunk,
        counter: count,
        indexes: indexes
      }
    } else if (utils.checkRoute('personUp')) {
      console.log('chunk', chunk)
      return {
        chunkShowNew: chunk,
        counter: count,
        indexes: indexes
      }
    } else {
      return {
        chunkData: chunk,
        counter: count,
        indexes: indexes
      }
    }
  }
  testRender(props) {
    if (props.viewPersonsArray) {
      return this.paginateUp(props.viewPersonsArray)
    }
    return null
  }
  render() {
    console.log('props', this.props)
    return (
      <div className="App">
        <button onClick={() => this.updatePageState(this.state)}>Test</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  fetchCurrentPersonSuccess: fetchCurrentPersonSuccess(state),
  fetchCurrentPersonPending: fetchCurrentPersonPending(state),
  fetchCurrentPersonError: fetchCurrentPersonError(state),
  addPersonSuccess: addPersonSuccess(state),
  addPersonError: addPersonError(state),
  addPersonPending: addPersonPending(state),
  viewPersonsArray: viewPersonsArray(state)
})
// takes the fetchPerson call and dispatches it
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchPeople: fetchPeopleAction
    },
    dispatch
  )
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
