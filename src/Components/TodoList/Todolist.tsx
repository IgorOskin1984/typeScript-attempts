import { ChangeEvent } from "react";
import s from './Todolist.module.css'
import { FilterType } from "../../App";
import { AddItemForm } from "./AddItemForm";

export type TaskType = {
	id: string,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	todolistId: string
	tasks: Array<TaskType>
	deleteTask: (id: string, todolistsId: string) => void
	changeFilter: (value: FilterType, id: string) => void
	addNewTask: (value: string, todolistsId: string) => void
	changeStatus: (id: string, isDone: boolean, todolistsId: string) => void
	filterName: FilterType
	deleteTodolist: (todolistsId: string) => void
}

export function Todolist(props: PropsType) {

	const removeTodolist = () => {
		props.deleteTodolist(props.todolistId)
	}

	const onAllchangeFilter = () => props.changeFilter('All', props.todolistId)
	const onActivechangeFilter = () => props.changeFilter('Active', props.todolistId)
	const onCompletedchangeFilter = () => props.changeFilter('Completed', props.todolistId)

	const addTask = (title: string) => {
		props.addNewTask(title, props.todolistId)
	}

	return (
		<div className={s.container} >
			<div className={s.titleContainer}>
				<h3>{props.title}</h3>
				<button onClick={removeTodolist}>x</button>
			</div>
			<AddItemForm addItem={addTask} />
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
					const onClickDeleteTask = () => { props.deleteTask(t.id, props.todolistId) }
					const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => { props.changeStatus(t.id, e.currentTarget.checked, props.todolistId) }
					return (
						<li key={t.id}
							className={t.isDone ? s.item + ' ' + s.isDone : s.item}>
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
