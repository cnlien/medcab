import { combineReducers } from 'redux'
import { createUserReducer } from './createUserReducer.js'
import { searchStrainsReducer } from './searchStrainsReducer.js'

const rootReducer = combineReducers({
    createUserReducer,
    searchStrainsReducer
})

export default rootReducer