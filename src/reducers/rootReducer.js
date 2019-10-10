import { combineReducers } from 'redux'
import personReducer from './personReducer'
import filmReducer from './filmReducer'
import planetReducer from './planetReducer'
export default combineReducers({
  planetReducer,
  personReducer,
  filmReducer
})
