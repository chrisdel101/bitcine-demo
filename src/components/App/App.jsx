import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import Router from '../Router.jsx'
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

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numToLoad: 30,
      increment: 10,
      currentCount: 0,
      lastCount: 0,
      currentPersonsChunk: null,
      tableCols: ['Name', 'Birth Year', 'Height', 'Mass']
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    // console.log('this', this)
    // const { fetchPeople } = this.props
    this.callFetch()
    // use a timer for now :(
    setTimeout(() => {
      // load first set on load
      console.log(this.props.viewPersonsArray)
      this.paginateUp(this.props.viewPersonsArray)
    }, 4000)
  }
  callFetch() {
    return new Promise((resolve, reject) => {
      let i = 0
      while (i < this.state.numToLoad) {
        const test = `${endpoints.root}${endpoints.people(i)}`
        this.props
          .fetchPeople(test)
          .then(res => {})
          .catch(e => {
            console.error('Error in API call', e)
          })
        i++
      }
    }).finally(() => {
      console.log('done')
    })
  }
  handleClick(e) {
    // icon component
    if (e.target.classList.contains('icon')) {
      if (e.target.innerHTML === 'arrow_forward_ios') {
        this.paginateUp(this.props.viewPersonsArray)
      } else if (e.target.innerHTML === 'arrow_back_ios') {
        console.log('back')
        this.paginateDown(this.props.viewPersonsArray)
      }
    }
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
    // console.log('props', this.state)
    return (
      <div className="App">
        <Router
          onClick={this.handleClick}
          personsData={
            this.state.currentPersonsChunk
              ? this.state.currentPersonsChunk
              : null
          }
          tableCols={this.state.tableCols}
        />
        {/* <Page
          onClick={this.handleClick}
          personsData={
            this.state.currentPersonsChunk
              ? this.state.currentPersonsChunk
              : null
          }
          tableCols={this.state.tableCols}
        /> */}
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
