import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
// import Page from '../Page/Page.jsx'
import fetchPeopleAction from '../../fetch'
import { bindActionCreators } from 'redux'
import {
  getPerson,
  getPersonPending,
  getPersonError,
  addPersonSuccess,
  addPersonError,
  viewAllPersons
} from '../../reducers/personReducer'

class App extends Component {
  componentDidMount() {
    const { fetchPeople } = this.props
    fetchPeople()
  }

  render() {
    console.log('props', this.props)
    return (
      <div className="App">
        <button>Test redux action</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  personError: getPerson(state),
  persons: getPersonPending(state),
  personPending: getPersonError(state),
  personAdd: addPersonSuccess(state),
  personAddError: addPersonError(state),
  personsAll: viewAllPersons(state)
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
