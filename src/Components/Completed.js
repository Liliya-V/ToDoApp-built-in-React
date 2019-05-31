import React, {Component} from 'react';
import {Task} from "./Task";

export class Completed extends Component {

    constructor(props) {
        super(props);
        this.state = {tasks: props.tasks }
    }

    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({tasks: props.tasks})
    }

    displayTasks = (tasks) => {
        let output = []
        tasks.forEach((task, i) => {
            output.push(<Task key={i} task={task} />);
        })
        return output;
    }

    render () {
        return (
            <ul className='complited'>
                {this.displayTasks(this.state.tasks)}
            </ul>
        )
    }
}