import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskType, Todolist } from './Components/DodoList/Todolist';

const tasks: Array<TaskType> = [
	{ id: 1, title: 'html/CSS', isDone: true },
	{ id: 2, title: 'js', isDone: true },
	{ id: 3, title: 'react', isDone: true },
	{ id: 4, title: 'redux', isDone: true },
	{ id: 5, title: 'toolkit', isDone: false }
]

const deleteTask = (id: number) => {
	const newTasks = tasks.filter(item => item.id !== id)
}

function App() {
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
