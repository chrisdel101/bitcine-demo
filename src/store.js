import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default function configureStore(initialState = {}) {
  // console.log('RR', rootReducer)
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  )
  return store
}
