import TodoList from '../components/todo-list'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { VisibilityFilters } from '../actions/types'

function getVisibilityFilter(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

function mapStateToProps(state) {
    return {
        todos: getVisibilityFilter(state.todos.present, state.visibilityFilter)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        toggleTodo: id => dispatch(toggleTodo(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)