import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {FilterValuesType} from "./App";

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

}

export function Todolist(props: PropsType) {
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            props.addTask(newTaskTitle)
            setNewTaskTitle(' ')
        }
    }
    const addTask = () => {
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
                />
                <button onClick={addTask}>+</button>

                <ul>
                    {
                        props.tasks.map(t => {
                            const onRemoveHandler = () => {props.removeTask(t.id)}
                            return <li key={t.id}>
                                <input type='checkbox' checked={t.isDone}/>
                                <span>{t.title}</span>
                                <button onClick={onRemoveHandler}>x</button>
                            </li>
                        })
                    }
                </ul>

                <div>
                    <button onClick={onAllClickHandler}>Все</button>
                    <button onClick={onActiveClickHandler}>Активные</button>
                    <button onClick={onCompletedClickHandler}>Завершенные</button>
                </div>
            </div>
        </div>
    )
}