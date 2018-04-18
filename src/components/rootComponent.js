import React from 'react'
import TodoManager from '../containers/todoManager'
import Viewer from '../containers/viewer'
import VisibilityController from './visibility-controller'

const RootComponent = () => (
  <div>
    <TodoManager />
    <h1>Todo List</h1>
    <Viewer />
    <VisibilityController />
  </div>
)

export default RootComponent 
