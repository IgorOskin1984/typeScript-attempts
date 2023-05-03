import React, { KeyboardEvent, useState } from "react";
import s from './Todolist.module.css'
import { FilterType } from "../../App";
import { ChangeEvent } from "react";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	deleteTask: (id: string) => void
	addNewTask: (inputTitle: string) => void
	filterTasksName: (filterName: FilterType) => void
}

export const Todolist = (props: PropsType) => {

	const [inputTitle, setInputTitle] = useState('')

	const listItemCreater = (tasks: Array<TaskType>) => {
		return tasks.map((t) => {
			return (
				<li key={t.id} className={s.item}>
					<input type="checkbox"
						checked={t.isDone} />
					<span>{t.title}</span>
					<button onClick={() => { props.deleteTask(t.id) }}>X</button>
				</li>
			)
		})
	}

	//const onClickDeleteTask = (id: string) => {
	//	props.deleteTask(id)
	//}

	const onHendlerChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputTitle(e.target.value)
	}

	const onHandlerKeyUp = (e: KeyboardEvent) => {
		if (e.code === 'Enter') {
			props.addNewTask(inputTitle)
			setInputTitle('')
		}
	}


	return (
		<div className={s.container}>
			<h2>{props.title}</h2>

			<div className={s.inputContainer}>
				<input type="text"
					placeholder="Type new task"
					value={inputTitle}
					onChange={onHendlerChange}
					onKeyUp={onHandlerKeyUp}
				/>
				<button onClick={() => {
					props.addNewTask(inputTitle)
					setInputTitle('')
				}}
				>+</button>
			</div>

			<ul className={s.list}>
				{listItemCreater(props.tasks)}
			</ul >

			<div className={s.actives}>
				<button onClick={() => { props.filterTasksName('All') }}>All</button>
				<button onClick={() => { props.filterTasksName('Active') }}>Active</button>
				<button onClick={() => { props.filterTasksName('Completed') }}>Completed</button>
			</div>
		</div >
	)
}