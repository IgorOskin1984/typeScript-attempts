import { type } from "os";
import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, KeyboardEventHandler, useState } from "react";
import s from './Todolist.module.css'
import { FilterType } from "../../App";

export type TaskType = {
	id: string,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	deleteTask: (id: string) => void
	changeFilter: (value: FilterType) => void
	addTask: (value: string) => void
}

export function Todolist(props: PropsType) {

	const [newTaskTitle, setNewTaskTitle] = useState('')

	const onNewTaskTitleHandlerChange = (e: ChangeEvent<HTMLInputElement>) => { setNewTaskTitle(e.currentTarget.value) }

	const onKeyPressUpSetNewTaskTitle = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			props.addTask(newTaskTitle)
			setNewTaskTitle('')
		}
	}

	return (
		<div className={s.todolist} >
			<h3>{props.title}</h3>
			<div >
				<input placeholder={'type new task'}
					value={newTaskTitle}
					onChange={onNewTaskTitleHandlerChange}
					onKeyUp={onKeyPressUpSetNewTaskTitle}
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
				<button onClick={() => { props.changeFilter('All') }}>All</button>
				<button onClick={() => { props.changeFilter('Active') }}>Active</button>
				<button onClick={() => { props.changeFilter('Completed') }}>Completed</button>
			</div>
		</div>
	)
}