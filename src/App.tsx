import React, { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/TodoList/Todolist';
import { v1 } from 'uuid';


type TodolistsType = {
	id: string
	title: string
	filterName: FilterType
}
type TaskObjType = {
	[todolistId: string]: Array<TaskType>;
};
export type FilterType = 'All' | 'Active' | 'Completed'


function App() {

	const [tasks, setTasks] = useState<Array<TaskType>>([
		{ id: v1(), title: 'Rest API', isDone: true },
		{ id: v1(), title: 'HTML CSS', isDone: false },
		{ id: v1(), title: 'React', isDone: false },
		{ id: v1(), title: 'Redux', isDone: true },
	])


	const deleteTask = (id: string, todolistsId: string) => {
		const newTasks = taskObj[todolistsId].filter(t => t.id !== id)
		taskObj[todolistsId] = newTasks
		setTaskObj({ ...taskObj })
	}
	const addNewTask = (inputTitle: string, todolistsId: string) => {
		const newTask = { id: v1(), title: inputTitle, isDone: false }
		taskObj[todolistsId] = [newTask, ...taskObj[todolistsId]]
		//taskObj[todolistsId] = taskObj[todolistsId].concat(newTask)
		setTaskObj({ ...taskObj })
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


	const todolistsId1 = v1();
	const todolistsId2 = v1();
	const [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{ id: todolistsId1, title: 'What to learn', filterName: 'Active' },
		{ id: todolistsId2, title: 'What to watch', filterName: 'Completed' }]
	)

	const [taskObj, setTaskObj] = useState<TaskObjType>({
		[todolistsId1]: [
			{ id: v1(), title: 'Rest API', isDone: true },
			{ id: v1(), title: 'HTML CSS', isDone: false },
			{ id: v1(), title: 'React', isDone: false },
			{ id: v1(), title: 'Redux', isDone: true },
		],
		[todolistsId2]: [
			{ id: v1(), title: 'Scarry moovie', isDone: true },
			{ id: v1(), title: 'Terminator', isDone: false }
		]
	})




	return (
		<div className="App">
			{todolists.map((tl) => {
				let filteredTasks = taskObj[tl.id];

				if (tl.filterName === 'Active') {
					filteredTasks = filteredTasks.filter(t => t.isDone === false)
				}
				else if (tl.filterName === 'Completed') {
					filteredTasks = filteredTasks.filter(t => t.isDone === true)
				}
				return <Todolist
					key={tl.id}
					todolistId={tl.id}
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