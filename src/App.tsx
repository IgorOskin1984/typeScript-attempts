import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/Todolist/Todolist';

const title = 'What to learn'

const initialTasks = [
	{ id: 1, title: 'Rest API', isDone: true },
	{ id: 2, title: 'HTML CSS', isDone: false },
	{ id: 3, title: 'React', isDone: false },
	{ id: 4, title: 'Redux', isDone: true },
]


function App() {

	const [tasks, setTasks] = useState(initialTasks)
	const deleteTask = (id: number) => {
		const newTasks = tasks.filter(t => t.id !== id)
		setTasks(newTasks)
	}
	const addNewTask = (inputTitle: string) => {
		const newTask = { id: 5, title: inputTitle, isDone: false }
		setTasks(tasks.concat(newTask))
	}

	return (
		<div className="App">
			<Todolist title={title}
				tasks={tasks}
				deleteTask={deleteTask}
				addNewTask={addNewTask}
			/>
		</div>
	);
}

export default App;
