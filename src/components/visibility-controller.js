import React from 'react'
import FilterLink from '../containers/filter-link'
import { VisibilityFilters } from '../actions/types'

const VisibilityController = () => (
    <div>
        <span>SHOW: </span>
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>ALL</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>ACTIVE</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>COMPLETED</FilterLink>
    </div>
)

export default VisibilityController