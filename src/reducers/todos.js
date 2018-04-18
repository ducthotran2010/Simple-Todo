import * as ACTION from '../actions/types'
import undoable, { includeAction } from 'redux-undo'

const todos = (state = [], action) => {
    switch (action.type) {
        case ACTION.ADD_TODO:
            return [
                ...state,
                {
                    id: state.length + 1,
                    text: action.text,
                    completed: false
                }
            ]
        case ACTION.TOGGLE_TODO:
            return state.map(
                todo => (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
            )
        case ACTION.CLEAR_TODO:
            return []
        default:
            return state
    }
}

const undoableTodos = undoable(todos)//, { filter: includeAction([ACTION.ADD_TODO, ACTION.TOGGLE_TODO]) })

export default undoableTodos