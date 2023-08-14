import React from "react";
import {FilterValuesType} from "./App";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: number) => void
    changeFiltr: (value: FilterValuesType) => void

}

export function Todolist(props: PropsType) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>

                <ul>
                    {
                        props.tasks.map(t => <li><input type='checkbox' checked={t.isDone}/>
                            <span>{t.title}</span><button onClick={ () => {props.removeTask(t.id)}}>x</button></li>)
                    }
                </ul>

                <div>
                    <button onClick={() => props.changeFiltr("all")}>Все</button>
                    <button onClick={() => props.changeFiltr("active")}>Активные</button>
                    <button onClick={() => props.changeFiltr("completed")}>Завершенные</button>
                </div>
            </div>
        </div>
    )
}