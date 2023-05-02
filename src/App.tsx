import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskType, Todolist } from './Components/DodoList/Todolist';

const tasks1: Array<TaskType> = [
	{ id: 1, title: 'html/CSS', isDone: true },
	{ id: 2, title: 'js', isDone: true },
	{ id: 3, title: 'react', isDone: true }
]
const tasks2: Array<TaskType> = [
	{ id: 1, title: 'lkhlkh', isDone: true },
	{ id: 2, title: 'lknlk', isDone: true },
	{ id: 3, title: 'lkhlkh', isDone: true }
]

function App() {
	return (
		<div className='App'>
			<Todolist title={'What to learn'} tasks={tasks1} />
			<Todolist title={'Movies'} tasks={tasks2} />
			{/*<Todolist title={'Songs'} />*/}
		</div>
	);
}

export default App;
