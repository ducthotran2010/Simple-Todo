import { combineReducers, applyMiddleware } from 'redux'
import todos from './todos'
import { visibilityFilter } from './visibilityFilter'

export default combineReducers({
    todos,
    visibilityFilter,
})