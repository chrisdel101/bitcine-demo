import React, { Component } from 'react'
import { connect } from 'react-redux'
import simpleAction from '../../actions/simpleActions'
import './index.css'
import Page from '../Page/Page.jsx'
import fetchPeopleAction from '../../fetch'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { fetchPeople } = this.props
    fetchPeople()
  }

  simpleAction = event => {
    console.log('click')
    let x = this.props.fetchPeople()
    console.log(this.props.fetchPeople())
    return this.props.fetchPeople()
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.simpleAction}>Test redux action</button>
        <pre>{JSON.stringify(this.props)}</pre>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state
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
