import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from '../redux'
import apiMiddleware from '../sendsay/apiMiddleware'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

const reducer = combineReducers(reducers)

export default () => {
  const middlewares = [apiMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  return createStore(reducer, composedEnhancers)
}
