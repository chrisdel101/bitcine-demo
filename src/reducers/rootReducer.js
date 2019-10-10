import { combineReducers } from 'redux'
import personReducer from './personReducer'
import filmReducer from './filmReducer'
export default combineReducers({
  personReducer,
  filmReducer
})
