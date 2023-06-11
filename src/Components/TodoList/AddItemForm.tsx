import { ChangeEvent, KeyboardEvent, useState } from "react"
import s from './Todolist.module.css'

type AddItemFormPropsTpe = {
	addItem: (value: string) => void
}

export const AddItemForm = (props: AddItemFormPropsTpe) => {
	const [newTaskTitle, setNewTaskTitle] = useState('')
	const [error, setError] = useState<string | null>(null)

	const onNewTaskTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setNewTaskTitle(e.currentTarget.value)
		setError('')
	}

	const onKeyPressUpHendler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null)
		if (e.code === 'Enter') {
			addTask()
		}
	}

	const addTask = () => {
		if (newTaskTitle.trim() !== '') {
			props.addItem(newTaskTitle.trim())
			setNewTaskTitle('')
		}
		else {
			setError('Empty field')
		}
	}


	return <>
		<div className={s.wrapper}>
			<div className={s.inputContainer} >
				<input placeholder={'type new task'}
					value={newTaskTitle}
					onChange={onNewTaskTitleChange}
					onKeyUp={onKeyPressUpHendler}
					onBlur={() => { setError('') }}
					className={error ? s.error : ''}
				/>
				<button onClick={addTask} >+</button>
			</div>
			{error &&
				<div className={s.errorMessageDiv}>
					<p>{error}</p>
				</div>
			}
		</div>
	</>
}
