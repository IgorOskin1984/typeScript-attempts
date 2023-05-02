import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/DodoList/Todolist';

function App() {

	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: 1, title: 'html/CSS', isDone: true },
		{ id: 2, title: 'js', isDone: true },
		{ id: 3, title: 'react', isDone: true },
		{ id: 4, title: 'redux', isDone: true },
		{ id: 5, title: 'toolkit', isDone: false }
	])
	const deleteTask = (id: number) => {
		const newTasks = tasks.filter(item => item.id !== id)
		setTasks(newTasks)
	}

	return (
		<div className='App'>
			<div className='container'>
				<Todolist title={'What to learn'}
					tasks={tasks}
					deleteTask={deleteTask}
				/>
			</div>
		</div>
	);
}

export default App;
