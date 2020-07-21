import { combineReducers } from 'redux'
import loading from './loading'

const rootReducer = combineReducers({
  loading,
  // more reducers...
})

export default rootReducer