import React, { useState } from "react";
import s from './Todolist.module.css'

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	deleteTask: (id: number) => void
	addNewTask: (inputTitle: string) => void
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

	const onClickDeleteTask = (id: number) => {

	}


	return (
		<div className={s.container}>
			<h2>{props.title}</h2>

			<div className={s.inputContainer}>
				<input type="text"
					placeholder="Type new task"
					value={inputTitle}
					onChange={(e) => {
						setInputTitle(e.target.value)
					}}
				/>
				<button onClick={() => {
					props.addNewTask(inputTitle)
					setInputTitle('')
				}}>+</button>
			</div>

			<ul className={s.list}>
				{listItemCreater(props.tasks)}
			</ul >

			<div className={s.actives}>
				<button>All</button>
				<button>Active</button>
				<button>Completed</button>
			</div>
		</div >
	)
}