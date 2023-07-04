import { applyMiddleware, legacy_createStore } from 'redux'
import reducers from './reducers'
import state from './state'
import thunk from 'redux-thunk'

export default legacy_createStore(reducers, state, applyMiddleware(thunk))