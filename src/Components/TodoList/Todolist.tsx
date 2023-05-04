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
	changeStatus: (id: string, isDone: boolean) => void
	filterName: FilterType
}

export function Todolist(props: PropsType) {

	const [newTaskTitle, setNewTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const onNewTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
		setError('')
	}
	const onKeyPressUpHendler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.code === 'Enter') {
			addTask()
		}
	}
	const addTask = () => {
		if (newTaskTitle.trim() !== '') {
			props.addTask(newTaskTitle.trim())
			setNewTaskTitle('')
		}
		else {
			setError('Empty field')
		}
	}



	const onAllchangeFilter = () => props.changeFilter('All')
	const onActivechangeFilter = () => props.changeFilter('Active')
	const onCompletedchangeFilter = () => props.changeFilter('Completed')

	return (
		<div className={s.container} >
			<h3>{props.title}</h3>
			<div className={s.wrapper}>
				<div className={s.inputContainer} >
					<input placeholder={'type new task'}
						value={newTaskTitle}
						onChange={onNewTaskTitleChange}
						onKeyUp={onKeyPressUpHendler}
						onBlur={() => { setError('') }}
						className={error ? s.error : ''}
					/>
					<button onClick={addTask} >+</button>
				</div>
				{error &&
					<div className={s.errorMessageDiv}>
						<p>{error}</p>
					</div>
				}
			</div>
			<div className={s.actives}>
				<button className={props.filterName === 'All' ? s.isActive : ''}
					onClick={onAllchangeFilter}>All</button>
				<button className={props.filterName === 'Active' ? s.isActive : ''}
					onClick={onActivechangeFilter}>Active</button>
				<button className={props.filterName === 'Completed' ? s.isActive : ''}
					onClick={onCompletedchangeFilter}>Completed</button>
			</div>
			<ul className={s.list}>
				{props.tasks.map((t) => {
					const onClickDeleteTask = () => { props.deleteTask(t.id) }
					const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => { props.changeStatus(t.id, e.currentTarget.checked) }
					return (
						<li key={t.id}
							className={s.item}>
							<input type="checkbox" onChange={onChangeCheckbox} checked={t.isDone} />
							<span>{t.title} </span>
							<button onClick={onClickDeleteTask}>delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}