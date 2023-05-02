import { type } from "os";
import React, { useState } from "react";
import s from './Todolist.module.css'
import { FilterValuesType } from "../../App";

export type TaskType = {
	id: string,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	deleteTask: (id: string) => void
	changeFilter: (value: FilterValuesType) => void
	addTask: (value: string) => void
}

export function Todolist(props: PropsType) {

	const [newTaskTitle, setNewTaskTitle] = useState('')
	return (
		<div className={s.todolist} >
			<h3>{props.title}</h3>
			<div >
				<input placeholder={'type new task'}
					value={newTaskTitle}
					onChange={(e) => {
						setNewTaskTitle(e.currentTarget.value)
					}}
				/>
				<button onClick={() => {
					props.addTask(newTaskTitle)
					setNewTaskTitle('')
				}} >+</button>
			</div>
			<ul className={s.list}>
				{props.tasks.map(t => <li key={t.id}
					className={s.item}>
					<input type="checkbox" checked={t.isDone} />
					<span>{t.title} </span>
					<button onClick={() => { props.deleteTask(t.id) }}>delete</button>
				</li>
				)}
			</ul>
			<div className={s.buttons}>
				<button onClick={() => { props.changeFilter('all') }}>All</button>
				<button onClick={() => { props.changeFilter('active') }}>Active</button>
				<button onClick={() => { props.changeFilter('completed') }}>Completed</button>
			</div>
		</div>
	)
}