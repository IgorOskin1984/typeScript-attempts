import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/TodoList/Todolist';
import { v1 } from 'uuid';

export type FilterValuesType = 'all' | 'active' | "completed"

function App() {

	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: v1(), title: 'html/CSS', isDone: true },
		{ id: v1(), title: 'js', isDone: true },
		{ id: v1(), title: 'react', isDone: true },
		{ id: v1(), title: 'redux', isDone: true },
		{ id: v1(), title: 'toolkit', isDone: false }
	])
	const deleteTask = (id: string) => {
		const newTasks = tasks.filter(item => item.id !== id)
		setTasks(newTasks)
	}

	const [filter, setFilter] = useState<FilterValuesType>('all')
	const changeFilter = (value: FilterValuesType) => {
		setFilter(value)
	}


	let filteredTask = tasks;
	if (filter === 'active') {
		filteredTask = filteredTask.filter(t => t.isDone === false)
	}
	if (filter === 'completed') {
		filteredTask = filteredTask.filter(t => t.isDone === true)
	}


	return (
		<div className='App'>
			<div className='container'>
				<Todolist title={'What to learn'}
					tasks={filteredTask}
					deleteTask={deleteTask}
					changeFilter={changeFilter}
				/>
			</div>
		</div>
	);
}

export default App;
