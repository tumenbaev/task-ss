import { createStore, combineReducers } from 'redux'
import * as reducers from '../redux'

const reducer = combineReducers(reducers)

export default () =>
  createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
