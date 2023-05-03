import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/Todolist/Todolist';
import { v1 } from 'uuid';
import { type } from 'os';

const title = 'What to learn'

export type FilterType = 'All' | 'Active' | 'Completed'


function App() {

	const [tasks, setTasks] = useState([
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

	const [filterName, setFilterName] = useState<FilterType>('All')

	const filterTasksName = (filterName: FilterType) => {
		setFilterName(filterName)
	}

	let filteredTasks = tasks;
	if (filterName === 'Active') {
		filteredTasks = tasks.filter(t => t.isDone === false)
	}
	else if (filterName === 'Completed') {
		filteredTasks = tasks.filter(t => t.isDone === true)
	}


	return (
		<div className="App">
			<Todolist title={title}
				tasks={filteredTasks}
				deleteTask={deleteTask}
				addNewTask={addNewTask}
				filterTasksName={filterTasksName}
			/>
		</div>
	);
}

export default App;
