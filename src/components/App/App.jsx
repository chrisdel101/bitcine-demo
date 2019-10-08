import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import Page from '../Page/Page.jsx'
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
      numToLoad: 66,
      increment: 30,
      currentCount: 0,
      lastCount: 0
    }
  }
  componentDidMount() {
    // console.log('this', this)
    // const { fetchPeople } = this.props
    this.callFetch()
  }
  callFetch() {
    let i = 1
    while (i < this.state.numToLoad) {
      const test = `${endpoints.root}${endpoints.people(i)}`
      this.props
        .fetchPeople(test)
        .then(res => {
          // console.log('Response', res)
        })
        .catch(e => {
          console.error('Error in API call', e)
        })
      i++
    }
  }
  handleClick(e) {
    // icon component
    if (e.target.classList.contains('icon')) {
      if (e.target.innerHTML === 'arrow_forward_ios') {
        console.log('forward')
      } else if (e.target.innerHTML === 'arrow_back_ios') {
        console.log('back')
      }
    }
  }
  paginateDown(arr) {
    console.log('down', arr)
    let sliceEnd = this.state.currentCount - this.state.increment

    if (sliceEnd < arr.length) return

    let count = sliceEnd - this.state.increment
    console.log('end', count)
    // let indexes = utils.range(sliceStart + 1, count + 1, 1)
    let chunk = arr.slice(count, sliceEnd)
    console.log('chunk', chunk)
    this.setState({
      currentCount: sliceEnd,
      lastCount: count
    })
  }
  paginateUp(arr) {
    console.log(arr)
    //increment and get current count
    let count = this.state.currentCount + this.state.increment
    // console.log('count', count)
    let sliceStart = count - this.state.increment
    console.log('start', sliceStart)
    let sliceEnd = count
    if (sliceEnd > arr.length) return
    console.log('end', sliceEnd)
    // let indexes = utils.range(sliceStart + 1, sliceEnd + 1, 1)
    let chunk = arr.slice(sliceStart, sliceEnd)
    console.log('chunk', chunk)
    this.setState({
      currentCount: count,
      lastCount: sliceEnd
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
  testRender(props, dir) {
    if (props.viewPersonsArray) {
      if (dir === 'up') {
        return this.paginateUp(props.viewPersonsArray)
      } else if (dir === 'down') {
        console.log('here')
        return this.paginateDown(props.viewPersonsArray)
      }
    }
    return null
  }
  render() {
    // console.log('props', this.props)
    return (
      <div className="App">
        <Page onClick={this.handleClick} />
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
