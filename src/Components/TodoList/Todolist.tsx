import { ChangeEvent } from "react";
import s from './Todolist.module.css'
import { FilterType } from "../../App";
import { AddItemForm } from "./AddItemForm";
import { EditeblSpan } from "./EditeblSpan";

export type TaskType = {
	id: string,
	title: string,
	isDone: boolean
}

type PropsType = {
	title: string
	todolistId: string
	tasks: Array<TaskType>
	deleteTask: (id: string, todolistId: string) => void
	changeFilter: (value: FilterType, id: string) => void
	addTask: (value: string, todolistId: string) => void
	changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
	changeTaskTitle: (id: string, newTitle: string, todolistId: string) => void
	filterName: FilterType
	deleteTodolist: (todolistId: string) => void
	changeTodolistTitle: (todolistId: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {

	const removeTodolist = () => {
		props.deleteTodolist(props.todolistId)
	}

	const onAllchangeFilter = () => props.changeFilter('All', props.todolistId)
	const onActivechangeFilter = () => props.changeFilter('Active', props.todolistId)
	const onCompletedchangeFilter = () => props.changeFilter('Completed', props.todolistId)

	const addNewTask = (title: string) => {
		props.addTask(title, props.todolistId)
	}

	const changeTodolistTitle = (newTitle: string) => {
		//debugger
		props.changeTodolistTitle(newTitle, props.todolistId)
	}


	return (
		<div className={s.container} >
			<div className={s.titleContainer}>
				<h3>{
					<EditeblSpan title={props.title} onChange={changeTodolistTitle} />
				}</h3>
				<button onClick={removeTodolist}>x</button>
			</div>
			<AddItemForm addItem={addNewTask} />
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
					const onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => { props.changeTaskStatus(t.id, e.currentTarget.checked, props.todolistId) }
					const onChangeTitleHandler = (newValue: string) => {
						props.changeTaskTitle(t.id, newValue, props.todolistId)
					}
					return (
						<li key={t.id}
							className={t.isDone ? s.item + ' ' + s.isDone : s.item}>
							<input type="checkbox" onChange={onChangeStatusHandler} checked={t.isDone} />
							<EditeblSpan title={t.title} onChange={onChangeTitleHandler} />
							<button onClick={onClickDeleteTask}>delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
