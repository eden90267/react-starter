import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {} from './reducer'

const stateData = {
  data: []
}

const logger = store => next => action => {
  let result
  console.groupCollapsed('dispatching', action.type)
  console.log('prev state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const storeFactory = (initialState = stateData) =>
  applyMiddleware(logger)(createStore)(
    combineReducers({}),
    initialState
  )

export default storeFactory