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

class App extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props
    function callFetch() {
      let i = 90
      while (i < 92) {
        const test = `${endpoints.root}${endpoints.people(i)}`
        console.log('PROM', fetchPeople(test))
        fetchPeople(test)
          .then(res => {
            console.log('RES', res)
            if (!res) console.error('HERERHERE')
          })
          .catch(e => {
            console.error('Break')
            i = 92
          })
        i++
      }
    }
    callFetch()
  }

  render() {
    console.log('props', this.props)
    return (
      <div className="App">
        <button>Test redux action</button>
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
