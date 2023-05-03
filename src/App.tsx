import React from 'react';
import './App.css';
import { Todolist } from './Components/Todolist/Todolist';

const title = 'What to learn'

const tasks = [
	{ id: 1, title: 'Rest API', isDone: true },
	{ id: 2, title: 'HTML CSS', isDone: false },
	{ id: 3, title: 'React', isDone: false },
	{ id: 4, title: 'Redux', isDone: true },
]

function App() {
	return (
		<div className="App">
			<Todolist title={title}
				tasks={tasks}
			/>
		</div>
	);
}

export default App;
