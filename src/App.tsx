import { useState } from 'react';
import './App.css';
import { TaskType, Todolist } from './Components/TodoList/Todolist';
import { v1 } from 'uuid';
import { AddItemForm } from './Components/TodoList/AddItemForm';


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

	const todolistsId1 = v1();
	const todolistsId2 = v1();
	const [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{ id: todolistsId1, title: 'What to learn', filterName: 'Active' },
		{ id: todolistsId2, title: 'What to watch', filterName: 'Completed' }]
	)
	const [tasks, setTasks] = useState<TaskObjType>({
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


	const deleteTask = (id: string, todolistsId: string) => {
		const newTasks = tasks[todolistsId].filter(t => t.id !== id)
		tasks[todolistsId] = newTasks
		setTasks({ ...tasks })
	}
	const addNewTask = (inputTitle: string, todolistsId: string) => {
		const newTask = { id: v1(), title: inputTitle, isDone: false }
		tasks[todolistsId] = [newTask, ...tasks[todolistsId]]
		//tasks[todolistsId] = tasks[todolistsId].concat(newTask)
		setTasks({ ...tasks })
	}
	const changeTaskStatus = (id: string, isDone: boolean, todolistsId: string) => {
		let task = tasks[todolistsId].find(t => t.id === id)
		if (task) {
			task.isDone = isDone
			setTasks({ ...tasks })
		}
		//*==========================
		//if (task === tasks[0])
		//	alert('same')
		//*==========================
		setTasks({ ...tasks })
	}
	const changeTaskTitle = (id: string, newTitle: string, todolistsId: string) => {
		let task = tasks[todolistsId].find(t => t.id === id)
		if (task) {
			task.title = newTitle
		}
		setTasks({ ...tasks })
	}

	const changeFilter = (filterName: FilterType, id: string) => {
		const todolst = todolists.find(tdl => tdl.id === id)
		if (todolst) {
			todolst.filterName = filterName
		}
		setTodolists([...todolists])
	}
	//========================================================================================================================================================
	const deleteTodolist = (todolistsId: string) => {
		const newTodolists = todolists.filter(tdl => tdl.id !== todolistsId)
		//const deleteIndex = todolists.findIndex(tl => tl.id === todolistsId)
		//todolists.splice(deleteIndex, 1)
		setTodolists(newTodolists)
		delete tasks[todolistsId]
		setTasks({ ...tasks })
	}

	const addTodolist = (title: string) => {
		const newTodolist: TodolistsType = {
			id: v1(),
			title: title,
			filterName: 'All'
		}
		setTodolists([newTodolist, ...todolists])
		setTasks({
			...tasks,
			[newTodolist.id]: []
		})
	}

	const changeTodolistTitle = (title: string, todolistId: string) => {
		const todolist = todolists.find(tdl => tdl.id === todolistId);
		if (todolist) {
			todolist.title = title;
			setTodolists([...todolists])
		}
	}

	//========================================================================================================================================================

	return (
		<div className="App">

			<AddItemForm addItem={addTodolist} />

			{todolists.map((tl) => {
				let filteredTasks = tasks[tl.id];

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
					changeTaskStatus={changeTaskStatus}
					changeTaskTitle={changeTaskTitle}
					filterName={tl.filterName}
					deleteTodolist={deleteTodolist}
					changeTodolistTitle={changeTodolistTitle}
				/>
			})}

		</div>
	);
}

export default App;