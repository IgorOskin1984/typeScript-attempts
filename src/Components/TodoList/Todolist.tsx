import { type } from "os";
import React from "react";
import s from './Todolist.module.css'

export type TaskType = {
	id: number,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	tasks: Array<TaskType>
	deleteTask: Function
	changeList: Function
}

export function Todolist(props: PropsType) {
	return (
		<div className={s.todolist} >
			<h3>{props.title}</h3>
			<div >
				<input />
				<button>+</button>
			</div>
			<ul className={s.list}>
				{props.tasks.map(t => <li className={s.item}>
					<input type="checkbox" checked={t.isDone} />
					<span>{t.title} </span>
					<button onClick={() => { props.deleteTask(t.id) }}>delete</button>
				</li>
				)}
			</ul>
			<div className={s.buttons}>
				<button onClick={() => { props.changeList('all') }}>All</button>
				<button onClick={() => { props.changeList('active') }}>Active</button>
				<button onClick={() => { props.changeList('completed') }}>Completed</button>
			</div>
		</div>
	)
}