import { combineReducers } from 'redux'
import personReducer from './personReducer'
import filmReducer from './filmReducer'
import planetReducer from './planetReducer'
import speciesReducer from './speciesReducer'
import starshipReducer from './starshipReducer'
export default combineReducers({
  starshipReducer,
  speciesReducer,
  planetReducer,
  personReducer,
  filmReducer
})
