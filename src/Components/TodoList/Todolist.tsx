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
	changeStatus: (id: string, isDone: boolean, todolistId: string) => void
	changeTaskTitle: (title: string, taskId: string, todolistId: string) => void
	filterName: FilterType
	deleteTodolist: (todolistId: string) => void
	changeTodolistTitle: (title: string, todolistId: string) => void
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
	const changeTodolistTitle = (title: string) => {
		props.changeTodolistTitle(title, props.todolistId)
	}

	return (
		<div className={s.container} >
			<div className={s.titleContainer}>
				<h3>
					<EditeblSpan changeTitle={changeTodolistTitle} title={props.title} />
				</h3>
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
					const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => { props.changeStatus(t.id, e.currentTarget.checked, props.todolistId) }
					const onChangeTaskTitle = (title: string) => {
						props.changeTaskTitle(title, t.id, props.todolistId)
					}
					return (
						<li key={t.id}
							className={t.isDone ? s.item + ' ' + s.isDone : s.item}>
							<input type="checkbox" onChange={onChangeCheckbox} checked={t.isDone} />
							<EditeblSpan changeTitle={onChangeTaskTitle} title={t.title} />
							<button onClick={onClickDeleteTask}>delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}
