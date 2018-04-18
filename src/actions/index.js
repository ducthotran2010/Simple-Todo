import * as ACTION from './types'

export const clearTodo = () => ({
    type: ACTION.CLEAR_TODO
})

export const addTodo = text => ({
    type: ACTION.ADD_TODO,
    text,
})

export const toggleTodo = id => ({
    type: ACTION.TOGGLE_TODO,
    id: id,
})

export const setVisibilityFilter = filter => ({
    type: ACTION.SET_VISIBILITY_FILTER,
    filter,
})

// export const exportLocal = () => ({
//     type: ACTION.EXPORT_LOCAL
// })

// export const importLocal = (state) => ({
//     type: ACTION.IMPORT_LOCAL,
//     state,
// })