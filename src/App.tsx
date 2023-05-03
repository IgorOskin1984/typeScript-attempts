import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/Todolist/Todolist';
import { v1 } from 'uuid';

const title = 'What to learn'

const initialTasks = [
	{ id: v1(), title: 'Rest API', isDone: true },
	{ id: v1(), title: 'HTML CSS', isDone: false },
	{ id: v1(), title: 'React', isDone: false },
	{ id: v1(), title: 'Redux', isDone: true },
]


function App() {

	const [tasks, setTasks] = useState(initialTasks)
	const deleteTask = (id: string) => {
		const newTasks = tasks.filter(t => t.id !== id)
		setTasks(newTasks)
	}
	const addNewTask = (inputTitle: string) => {
		const newTask = { id: v1(), title: inputTitle, isDone: false }
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
