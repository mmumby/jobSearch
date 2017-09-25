// combime all reducers in the store

import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import feedReducer from '../reducers/feedReducer'

var store

export default {

  configure: () => {

    const reducers = combineReducers({
      feed: feedReducer
    })

    store = createStore(
        reducers,
        applyMiddleware(thunk)
    )

    return store
  },

  currentStore: () => {
    return store
  }
}