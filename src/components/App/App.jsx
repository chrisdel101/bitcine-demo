import React, { Component } from 'react'
import { connect } from 'react-redux'
import './index.css'
import Page from '../Page/Page.jsx'
import fetchPeopleAction from '../../fetch'
import { bindActionCreators } from 'redux'
import {
  getPerson,
  getPersonPending,
  getPersonError
} from '../../reducers/personReducer'

class App extends Component {
  constructor(props) {
    super(props)
    // this.shouldComponentRender = this.shouldComponentRender.bind(this)
  }

  componentDidMount() {
    const { fetchPeople } = this.props
    fetchPeople()
  }

  simpleAction = event => {
    console.log('click')
    return this.props.fetchPeople()
  }
  render() {
    return (
      <div className="App">
        <button onClick={''}>Test redux action</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  error: getPerson(state),
  products: getPersonPending(state),
  pending: getPersonError(state)
})
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
