import React, {useState} from 'react';
import './App.css';
import {Todolist, TaskType} from "./Todolist";

export type FilterValuesType = "all" | "completed" | "active";

function App() {

    const [tasks, setTask] = useState<Array<TaskType>>([
        {id: 1, title: "JS", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "REACT", isDone: false},
        {id: 4, title: "Redux", isDone: false},
        {id: 5, title: "TS", isDone: false},
    ]);
    const [filtr, setFiltr] = useState<FilterValuesType>("all");

    function removeTask(id: number) {
        setTask(tasks.filter(t => t.id !== id))
    }

    function changeFiltr(value: FilterValuesType) {
        setFiltr(value)
    }

    let tasksForTodoList = tasks
    if (filtr === "completed") {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }
    if (filtr === "active") {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }


    return (
        <div className="App">
            <Todolist
                title="Что изучить?"
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFiltr={changeFiltr}
            />
        </div>
    );
}

export default App;
