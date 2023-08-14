import React from 'react';
import './App.css';
import {Todolist, TaskType} from "./Todolist";

function App() {
    let task1: Array<TaskType> = [
        {id: 1, title: "JS", isDone: true},
        {id: 1, title: "CSS", isDone: true},
        {id: 1, title: "REACT", isDone: false}
    ]
    let task2: Array<TaskType> = [
        {id: 1, title: "Фильм 1", isDone: false},
        {id: 1, title: "Фильм 2", isDone: true},
        {id: 1, title: "Фильм 3", isDone: false}
    ]

    return (
        <div className="App">
            <Todolist title="Что изучить?" task={task1}/>
            <Todolist title="Что посмотреть?" task={task2}/>
        </div>
    );
}

export default App;
