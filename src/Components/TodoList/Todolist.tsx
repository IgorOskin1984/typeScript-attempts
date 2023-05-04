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
	changeStatus: (taskId: string, idDone: boolean) => void
}

export function Todolist(props: PropsType) {

	const [newTaskTitle, setNewTaskTitle] = useState('')
	const onNewTaskTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => { setNewTaskTitle(e.currentTarget.value) }
	const onKeyPressUpHendler = (e: KeyboardEvent<HTMLInputElement>) => {
		if (newTaskTitle && e.code === 'Enter') {
			props.addTask(newTaskTitle)
			setNewTaskTitle('')
		}
	}
	const addTask = () => {
		if (newTaskTitle) {
			props.addTask(newTaskTitle)
			setNewTaskTitle('')
		}
	}
	const onAllchangeFilter = () => props.changeFilter('All')
	const onActivechangeFilter = () => props.changeFilter('Active')
	const onCompletedchangeFilter = () => props.changeFilter('Completed')

	return (
		<div className={s.container} >
			<h3>{props.title}</h3>
			<div className={s.inputContainer} >
				<input placeholder={'type new task'}
					value={newTaskTitle}
					onChange={onNewTaskTitleChangeHandler}
					onKeyUp={onKeyPressUpHendler}
				/>
				<button onClick={addTask} >+</button>
			</div>
			<div className={s.actives}>
				<button onClick={onAllchangeFilter}>All</button>
				<button onClick={onActivechangeFilter}>Active</button>
				<button onClick={onCompletedchangeFilter}>Completed</button>
			</div>
			<ul className={s.list}>
				{props.tasks.map((t) => {
					const onClickDeleteTask = () => {
						props.deleteTask(t.id)
					}
					const onCangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
						props.changeStatus(t.id, e.currentTarget.checked)
					}
					return (
						<li key={t.id}
							className={s.item}>
							<input type="checkbox" onChange={onCangeHandler} checked={t.isDone} />
							<span>{t.title} </span>
							<button onClick={onClickDeleteTask}>delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}