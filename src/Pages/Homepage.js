import React, {Component} from 'react';
import {Uncompleted} from "../Components/Uncompleted";
import {Completed} from "../Components/Completed";
import {AddToDo} from "../Components/AddToDo";

export class Homepage extends Component {

    constructor(props) {
        super(props);
        // this.state = {tasks: []}

        let data = [ { _id: '5ce41bfa417feb511939b256', task: 'smile', completed: true },
            { _id: '5ce41c08417feb511939b257',
                task: 'buy a porsche',
                uncompleted: 'false' },
            { _id: '5ce41c4c417feb511939b258',
                task: 'smell flowers',
                completed: 'false' },
            { _id: '5ce54b989321236ca9ff8b1f',
                task: 'smile',
                uncompleted: 'false' },
            { _id: '5ce559ebac58517095c0d627',
                task: 'smile',
                completed: 'false' },
            { _id: '5ce55c233ec79570e95c0d88',
                task: 'task1',
                uncompleted: 'false' },
            { _id: '5ce55c233ec79570e95c0d89',
                task: 'task2',
                completed: 'false' } ]

        let tasks = this.sortToDos(data)
        this.state = tasks
        // this.getToDos();
    }

    getToDos = () => {
        // fetch('http://localhost:3000/tasks')
        //     .then(response => response.json())
        //     .then((data) => {

            // })
    }

    sortToDos = (tasks) => {
        let completed = [];
        let uncompleted = [];

        tasks.forEach(task => {
            if(task.completed) {
                completed.push(task)
            } else {
                uncompleted.push(task)
            }
        })

        return {'uncompleted': uncompleted, 'completed': completed}

    }

    addToDo = (todo) => {
        let uncompleted = this.state.uncompleted;
        uncompleted.push({'task': todo});
        this.setState({'uncompleted': uncompleted});
    }

    render () {
        return (
            <div>
                <AddToDo addToDo={this.addToDo} />
                <h1>Uncompleted tasks</h1>
                <Uncompleted tasks={this.state.uncompleted} />
                <h1>Completed tasks</h1>
                <Completed tasks={this.state.completed} />
            </div>
        )
    }
}