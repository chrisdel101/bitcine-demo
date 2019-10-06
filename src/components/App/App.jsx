import React from 'react'
import { connect } from 'react-redux'
import simpleAction from '../../actions/simpleActions'
import './index.css'
import Page from '../Page/Page.jsx'

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
})
function App(props) {
  const simpleAction = event => {
    this.props.simpleAction()
  }
  return (
    <div className="App">
      <button onClick={simpleAction}>Test redux action</button>
      <pre>{JSON.stringify(props)}</pre>
    </div>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
