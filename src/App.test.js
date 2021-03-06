import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import App from './components/App/App'
import { fetchPeople } from './fetch'

describe('App Test', function() {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={configureStore()}>
        <App />
      </Provider>,
      div
    )
    ReactDOM.unmountComponentAtNode(div)
  })
})
describe('fetch Tests', () => {
  describe('fetchPeople', () => {
    it('test fetch', function() {
      const x = fetchPeople()
      console.log(x)
    })
  })
})
