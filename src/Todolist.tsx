import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";
import {log} from "util";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFiltr: (value: FilterValuesType) => void
    addTask: (title: string) => void
    changeStatus: (taskId: string, isDone: boolean) => void
    filter: FilterValuesType

}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null);


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle(' ')
        }
        setError(null)
    }
    const addTask = () => {
        if (newTaskTitle.trim() ==="") {
            return setError("error")
        }
        props.addTask(newTaskTitle)
        setNewTaskTitle(' ')
    }
    const onAllClickHandler = () => {props.changeFiltr("all")}
    const onActiveClickHandler = () => {props.changeFiltr("active")}
    const onCompletedClickHandler = () => {props.changeFiltr("completed")}

    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input
                    value={newTaskTitle}
                    onChange={onChangeHandler}
                    onKeyPress={onKeyPressHandler}
                    className={error ? "error" : ''}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">Ошибка ввода!</div>}

                <ul>
                    {
                        props.tasks.map(t => {
                            const onRemoveHandler = () => {props.removeTask(t.id)}
                            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                props.changeStatus(t.id, e.currentTarget.checked)
                            }
                            return <li className={t.isDone ? "is-done" : ""} key={t.id}>
                                <input type='checkbox'
                                       onChange={onChangeHandler}
                                       checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={onRemoveHandler}>x</button>
                            </li>
                        })
                    }
                </ul>

                <div>
                    <button className={props.filter === "all" ? "active-filter" : ""} onClick={onAllClickHandler}>Все</button>
                    <button className={props.filter === "active" ? "active-filter" : ""} onClick={onActiveClickHandler}>Активные</button>
                    <button className={props.filter === "completed" ? "active-filter" : ""} onClick={onCompletedClickHandler}>Завершенные</button>
                </div>
            </div>
        </div>
    )
}