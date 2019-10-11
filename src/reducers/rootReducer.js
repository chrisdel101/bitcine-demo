import { combineReducers } from 'redux'
import personReducer from './personReducer'
import filmReducer from './filmReducer'
import planetReducer from './planetReducer'
import speciesReducer from './speciesReducer'
export default combineReducers({
  speciesReducer,
  planetReducer,
  personReducer,
  filmReducer
})
