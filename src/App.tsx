import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import {Todolist, TaskType} from "./Todolist";


export type FilterValuesType = "all" | "completed" | "active";

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "JS", isDone: true},
        {id: v1(), title: "CSS", isDone: true},
        {id: v1(), title: "REACT", isDone: false},
        {id: v1(), title: "Redux", isDone: false},
        {id: v1(), title: "TS", isDone: false},
    ]);
    const [filtr, setFiltr] = useState<FilterValuesType>("all");

    function addTask(title: string) {
        let newTask = {id: v1(), title: title, isDone: false}
        let newTasks = [newTask, ...tasks]
        setTasks(newTasks)
    }

    function removeTask(id: string) {
        setTasks(tasks.filter(t => t.id !== id))
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
                addTask={addTask}
            />
        </div>
    );
}

export default App;
