import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/TodoList/Todolist';
import { v1 } from 'uuid';
import { type } from 'os';

const title: string = 'What to learn'

type TodolistsType = {
	id: string
	title: string
	filterName: FilterType
}
export type FilterType = 'All' | 'Active' | 'Completed'


function App() {

	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: v1(), title: 'Rest API', isDone: true },
		{ id: v1(), title: 'HTML CSS', isDone: false },
		{ id: v1(), title: 'React', isDone: false },
		{ id: v1(), title: 'Redux', isDone: true },
	])
	const deleteTask = (id: string) => {
		const newTasks = tasks.filter(t => t.id !== id)
		setTasks(newTasks)
	}
	const addNewTask = (inputTitle: string) => {
		const newTask = { id: v1(), title: inputTitle, isDone: false }
		setTasks(tasks.concat(newTask))
	}
	const changeStatus = (id: string, isDone: boolean) => {
		let task = tasks.find(t => t.id === id)
		if (task) {
			task.isDone = isDone
		}
		//*==========================
		//if (task === tasks[0])
		//	alert('same')
		//*==========================
		setTasks([...tasks])

	}

	const changeFilter = (filterName: FilterType, id: string) => {
		const todolst = todolists.find(tdl => tdl.id === id)
		if (todolst) {
			todolst.filterName = filterName
		}
		setTodolists([...todolists])
	}


	const [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{ id: v1(), title: 'What to learn', filterName: 'Active' },
		{ id: v1(), title: 'What to watch', filterName: 'Completed' }]
	)


	return (
		<div className="App">
			{todolists.map((tl) => {
				let filteredTasks = tasks;
				if (tl.filterName === 'Active') {
					filteredTasks = tasks.filter(t => t.isDone === false)
				}
				else if (tl.filterName === 'Completed') {
					filteredTasks = tasks.filter(t => t.isDone === true)
				}
				return <Todolist
					key={tl.id}
					id={tl.id}
					title={tl.title}
					tasks={filteredTasks}
					deleteTask={deleteTask}
					addTask={addNewTask}
					changeFilter={changeFilter}
					changeStatus={changeStatus}
					filterName={tl.filterName}
				/>
			})}

		</div>
	);
}

export default App;