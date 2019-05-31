import React, {Component} from 'react';
export class AddToDo extends Component {

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addToDo(this.state.task)
    }

    onChange = (e) => {
        this.setState({task: e.target.value})
    }

    render () {
        return (
            <form onSubmit={this.onSubmit}>
            <input type="text" onKeyUp={this.onChange}/>
            <input type="submit" value="it's a button"/>
            </form>
        )
    }
}