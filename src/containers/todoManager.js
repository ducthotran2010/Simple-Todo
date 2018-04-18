import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, clearTodo } from '../actions'
import UndoRedo from './UndoRedo'

class TodoManager extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault()
        if (e.target.text.value !== "") {
            this.props.dispatch(addTodo(e.target.text.value))
            e.target.text.value = ""
        }
    }
    handleClear(e) {
        e.preventDefault()
        this.props.dispatch(clearTodo())
    }
    render() {
        return (
            <form method="post" onSubmit={this.handleSubmit}>
                <input type="text" name="text" autoFocus />
                <button type="submit">Add Todo</button>
                <button onClick={this.handleClear}>Clear Todo</button>
                <UndoRedo />
            </form>
        );
    }
}

export default connect()(TodoManager)